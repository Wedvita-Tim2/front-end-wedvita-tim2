import { useNavigate } from "react-router-dom";
import Button from "../elements/Buttons";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "../recoils/AuthState";
import { apiBackend, urlFront } from "../recoils/Api";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const AccountProfile = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useRecoilState(authState);
  const url = useRecoilValue(urlFront);
  const urlRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [show, setShow] = useState(false);
  const [transactionToken, setTransactionToken] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("auth");

    setAuth("");
    navigate("/");
  };

  const copyToClipboard = () => {
    if (urlRef.current) {
      navigator.clipboard
        .writeText(urlRef.current.innerText)
        .then(() => {
          setCopied(!copied);
          setTimeout(() => {
            setCopied(false);
          }, 1500);
        })
        .catch((error) => {
          alert("Gagal menyalin link: " + error);
        });
    }
  };

  let apiAddress = useRecoilValue(apiBackend);
  const [orderData, setOrderData] = useState([]); // State untuk menyimpan data

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${apiAddress}api/orders/${auth.dataUser.id}`
      );
      const data = response.data.Data;
      setOrderData(data); // Menyimpan data ke state
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // useEffect hanya dijalankan saat komponen dimount

  const handlePayClick = (token) => {
    let transToken = token.replace(
      "https://app.sandbox.midtrans.com/snap/v3/redirection/",
      ""
    );
    setTransactionToken(transToken);
    if (!transactionToken) {
      return;
    }
    window.snap.pay(transactionToken, {
      onSuccess: function (result) {
        alert("Pembayaran berhasil!");
        fetchData()
        console.log(result);
      },
      onPending: function (result) {
        alert("Menunggu pembayaran Anda!");
        fetchData()
        console.log(result);
      },
      onError: function (result) {
        alert("Pembayaran gagal!");
        console.log(result);
      },
    });
  };

  const onButtonDeleteClick = (id) => {
    const status = window.confirm(
      `Yakin ingin hapus order ini ?`
    );
    if (status) {
      axios
        .delete(`${apiAddress}api/orders/${id}`)
        .then(function (response) {
          console.log(response);
          fetchData();
        })
        .catch(function (error) {
          console.log(error);
          fetchData();
        });
    }
    
  };
  const dataTables =
  orderData.length !==0? (
      orderData.map((order, id) => (
        <div
          className="py-2 px-2 md:px-6 rounded-xl shadow-lg bg-zinc-50"
          key={id}
        >
          <div className="flex flex-row gap-8 md:gap-12 relative">
            <p className="font-bold text-sm text-primary-400 md:text-lg">
              {order.event_information.groom_name} &{" "}
              {order.event_information.bride_name}
            </p>
            <span
              className={`rounded-md bg-white px-2 border-[1px] ${
                order.order_verification !== 1
                  ? "border-yellow-400"
                  : "border-green-500"
              }`}
            >
              <p
                className={`${
                  order.order_verification !== 1
                    ? "text-yellow-400"
                    : " text-green-500"
                } text-xs md:text-base`}
              >
                {order.order_verification !== 1 ? "Pending" : "Active"}
              </p>
            </span>
            <div
              className={`rounded-md absolute top-0 bg-white right-0 pt-6 pb-4 pr-16 pl-4 ${
                !show ? "hidden" : "flex"
              } flex-col gap-4`}
            >
              <Button
                type="button"
                onClick={() => handlePayClick(order.checkout_url)}
                className={`text-center text-sm text-primary-400 font-semibold hover:underline md:text-base ${
                  order.order_verification !== 1 ? "" : "hidden"
                }`}
              >
                Bayar
              </Button>

              <Button
                type={"button"}
                className={"text-center text-sm text-red-500 md:text-base"}
                onClick={() => onButtonDeleteClick(order.id)}
              >
                Hapus
              </Button>
            </div>
            <Button
              type={"button"}
              className={"absolute top-0 right-1 text-primary-400"}
              onClick={() => setShow(!show)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </Button>
          </div>
          <p className="text-xs text-gray-600 md:text-base mb-1 md:mb-2">
            {order.event_information.date_event}
          </p>
          <div className="flex flex-row gap-2">
            {!order.invitation_url ? (
              <Button
                type={"link"}
                href={`/preview/${order.template_id}/${order.order_code}`}
                className={
                  "rounded-md px-2 py-1 mt-1 bg-light-pink text-white text-xs md:text-base"
                }
              >
                Lihat Preview
              </Button>
            ) : (
              <div className="flex flex-wrap gap-1 md:gap-2">
                <Button
                  type={"link"}
                  href={order.invitation_url}
                  className={
                    "rounded-md px-4 md:px-6 py-1 mt-1 bg-light-pink text-white text-xs md:text-base"
                  }
                >
                  Visit
                </Button>

                <p ref={urlRef} className="text-xs hidden">
                  {url + order.invitation_url}
                </p>
                <Button
                  type={"button"}
                  onClick={copyToClipboard}
                  className={`flex flex-wrap mt-1 border-[1px] ${
                    !copied
                      ? "text-gray-600 border-gray-400"
                      : "text-light-pink border-light-pink"
                  } rounded-md px-2 py-1 text-gray-600`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 md:w-5 md:h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                    />
                  </svg>
                  <p
                    className={`text-xs ${
                      !copied ? "text-gray-600" : "text-light-pink"
                    } md:text-sm`}
                  >
                    {!copied ? "Copy Link" : "Copied !"}
                  </p>
                </Button>
              </div>
            )}
          </div>
          {console.log(order)}
        </div>
      ))
    ) : (
      <p className="text-primary-400 text-sm text-center md:text-left font-semibold md:text-lg">
        Anda Belum Melakukan Order
      </p>
    );

  return (
    <div className="px-4 py-2 md:px-12">
      {/* <p>{auth.dataUser.username}</p>
      <p>{auth.dataUser.email}</p>
      <p>{auth.dataUser.phone_number}</p> */}
      <div className="flex flex-col gap-2 py-2 px-2">
        <p className="text-lg text-light-pink px-2 font-bold md:text-2xl">
          Order Anda
        </p>
        <div className="grid grid-cols-1 px-2 py-2 md:grid-cols-2 gap-2 md:gap-6 border-double border-primary-300 rounded-md border-[1px]">
          {dataTables}
        </div>
      </div>
      <Button
        type={"button"}
        onClick={handleLogout}
        isGradient
        className={"mt-4"}
      >
        Logout
      </Button>
      {/* <div className="w-full flex justify-center">
        <table className="shadow-lg w-180">
          <thead>
            <tr>
              <th
                className="px-5 py-2 text-right text-sm font-thin"
                colSpan="5"
              >
                <span className="text-pink-400">
                  {tableData1.banyakUndangan}
                </span>
                <span className="text-blue-800"> Undangan Aktif</span>
              </th>
            </tr>
            <tr>
              <th className="px-5 py-2 border-b border-t border-blue-700 text-sm font-thin">
                No
              </th>
              <th className="px-5 py-2 border-b border-t border-blue-700 text-sm font-thin">
                Order Code
              </th>
              <th className="px-5 py-2 border-b border-t border-blue-700 text-sm font-thin">
                Status Verifikasi
              </th>
              <th className="px-5 py-2 border-b border-t border-blue-700 text-sm font-thin">
                Link
              </th>
              <th className="px-5 py-2 border-b border-t border-blue-700 text-sm font-thin">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-blue-50">
            {tableData.map((data, index) => (
              <tr key={index}>
                <td className="text-pink-400 px-4 py-2 text-center font-thin text-sm">
                  {data.no}
                </td>
                <td className="text-blue-800 px-4 py-2 text-center font-thin text-sm">
                  {data.orderCode}
                </td>
                <td className="text-blue-800 px-4 py-2 text-center font-thin text-sm">
                  {data.statusVerifikasi}
                </td>
                <td className="text-blue-800 px-4 py-2 text-center font-thin text-sm">
                  {data.link}
                </td>
                <td className="px-8 py-2 border-l border-blue-500 ">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1652 0C9.11822 0 7.44345 1.67478 7.44345 3.72172H3.72172C1.67478 3.72172 0 5.3965 0 7.44345H26.0521C26.0521 5.3965 24.3773 3.72172 22.3303 3.72172H18.6086C18.6086 1.67478 16.9338 0 14.8869 0H11.1652ZM3.72172 11.1652V29.0667C3.72172 29.4761 4.01946 29.7738 4.42885 29.7738H21.6604C22.0698 29.7738 22.3676 29.4761 22.3676 29.0667V11.1652H18.6458V24.1912C18.6458 25.2333 17.8271 26.0521 16.785 26.0521C15.7429 26.0521 14.9241 25.2333 14.9241 24.1912V11.1652H11.2024V24.1912C11.2024 25.2333 10.3836 26.0521 9.34153 26.0521C8.29944 26.0521 7.48067 25.2333 7.48067 24.1912V11.1652H3.75894H3.72172Z"
                      fill="#D80808"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};
export default AccountProfile;
