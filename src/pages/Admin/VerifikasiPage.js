import { useEffect, useState } from "react";
import Button from "../../elements/Buttons";
import axios from "axios";

const VerifikasiPage = () => {
  const [orders, setOrders] = useState([]);

  const orderData = async () => {
    try {
      const datas = await fetch("http://localhost:8000/api/orders");
      const value = await datas.json();
      if (value.response === 200) {
        setOrders(value.Data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    orderData();
  }, []);

  const onButtonVerifClick = (id, order_code) => {
    const status = window.confirm(`Yakin ingin memverifikasi order dengan order code ${order_code}?`);
    if (status) {
      axios
        .post(`http://localhost:8000/api/Verification/${id}`)
        .then(function (response) {
          console.log(response);
          orderData();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const onButtonDeleteClick = (id, order_code) => {
    const status = window.confirm(
      `Yakin ingin hapus order dengan order code ${order_code} ?`
    );
    if(status){
        axios
        .post(`http://localhost:8000/api/AddEventInformationsDelete/${id}`)
        .then(function (response) {
          console.log(response);
          orderData();
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const dataTables = orders.map((order, id) => (
    <tr key={id}>
      <td className="border border-slate-600 px-4 py-1 w-44 text-center">
        {id + 1}
      </td>
      <td className="border border-slate-600 px-4 py-1 w-44">{order.id}</td>
      <td className="border border-slate-600 px-4 py-1 w-44">
        {order.order_code}
      </td>
      <td className="border border-slate-600 px-4 py-1 w-44">
        {order.user.username}
      </td>
      <td className="border border-slate-600 px-4 py-1 w-44">
        {order.template.template_name}
      </td>
      <td className="border border-slate-600 px-4 py-1 w-44">
        {order.order_verification}
      </td>
      <td className="border px-4 py-1 w-64 flex flex-wrap">
        <Button
          type={"button"}
          className={`${
            order.order_verification !== 1 ? "" : "hidden"
          } bg-green-400 text-white rounded-lg px-3 py-1 mr-3`}
          onClick={() => onButtonVerifClick(order.id, order.order_code)}
        >
          Verifikasi
        </Button>
        <span
          className={`${
            order.order_verification !== 1 ? "hidden" : ""
          } border border-green-400 rounded-lg px-3 py-1 mr-3`}
        >
          Verified
        </span>
        <Button
          type={"button"}
          className={"hover:border hover:border-red-500 rounded-md p-1"}
          onClick={() =>
            onButtonDeleteClick(order.event_information_id, order.order_code)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </Button>
      </td>
    </tr>
  ));

  return (
    <div className="px-5 py-6">
      <p className="text-3xl text-light-pink font-bold">Halaman Verifikasi</p>
      <table className="table-fix border-collapse border border-slate-500 font-light mt-12">
        <thead>
          <tr className="text-white bg-slate-400 font-bold ">
            <th className="border border-slate-600 px-4 py-1 w-44">No</th>
            <th className="border border-slate-600 px-4 py-1 w-44">Order Id</th>
            <th className="border border-slate-600 px-4 py-1 w-44">
              Order Code
            </th>
            <th className="border border-slate-600 px-4 py-1 w-44">Username</th>
            <th className="border border-slate-600 px-4 py-1 w-44">
              Template Name
            </th>
            <th className="border border-slate-600 px-4 py-1 w-44">
              Status Verifikasi
            </th>
            <th className="border border-slate-600 px-4 py-1 w-64">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {!orders || orders.length === 0 ? (
            <tr>
              <td
                className="border border-slate-600 px-4 py-1 w-full text-center text-light-pink font-bold"
                colSpan="6"
              >
                Belum ada data
              </td>
            </tr>
          ) : (
            dataTables
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VerifikasiPage;
