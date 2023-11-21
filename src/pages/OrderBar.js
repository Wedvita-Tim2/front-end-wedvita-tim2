import { useRecoilValue } from "recoil";
import Button from "../elements/Buttons";
import { selectedTemplateName, selectedTemplatePrice } from "../recoils/SelectedTemplate";
import { authState } from "../recoils/AuthState";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../component/Modal";

const OrderBar = (props) => {
  const auth = useRecoilValue(authState);
  const navigate = useNavigate();
  const [modalState, setModalState] = useState(false);
  const handleOrderButton = () => {
    if(auth.isAuthenticated){
        navigate('/order');
    }else{
      setModalState(true);
    }
  }

  const namaTemplate = useRecoilValue(selectedTemplateName);
  const hargaTemplate = "Rp."+ useRecoilValue(selectedTemplatePrice).toLocaleString('id-ID');
  return (
    <div>
      <Modal
        show={modalState}
        title={"Sepertinya Anda Belum Bergabung Dengan Kami"}
        isCancelButton
        onModalToggle={(newShowModalValue) => {
          setModalState(newShowModalValue);
        }}
      >
        <div className="md:text-lg mt-3">
          <p className="block font-semibold mb-2">Tunggu dulu,</p>
          <p>
            Sebelum melakukan order Wedvita, Ayo bergabung bersama kami dengan Login
            terlebih dahulu. Dengan login, Anda dapat melakukan order pemesanan
            undangan digital anda. Bersama-sama, kita akan membuat momen
            istimewa anda lebih berkesan.
          </p>
        </div>
        <div className="flex justify-end gap-4 mx-4 mt-12">
          <Button
            type={"button"}
            onClick={() => setModalState(false)}
            className={
              "px-2 py-1 md:px-6 md:py-1.5 rounded-full border-2 border-primary-400 hover:bg-primary-400 hover:text-white"
            }
          >
            Cancel
          </Button>
          <Button
            type={"link"}
            href={"/login"}
            className={
              "px-4 py-1.5 md:px-12 md:py-2 rounded-full bg-primary-400 text-white hover:bg-primary-300"
            }
          >
            Login
          </Button>
        </div>
      </Modal>
      <div className={`${!props.visible?'hidden': 'flex'} justify-center w-full relative z-[99]`}>
        <div className="fixed bottom-8 rounded-lg bg-slate-100 w-3/4  shadow-xl md:w-1/2 p-4">
          <ul className="flex gap-3 md:gap-12 items-center justify-around">
            <li className="sm:text-xl">{namaTemplate}</li>
            <li className="sm:text-xl">{hargaTemplate}</li>
            <li className="">
              <Button
                className={
                  "bg-primary-200 text-white px-2 py-1 rounded-md hover:bg-primary-100"
                }
                type={"button"}
                onClick={handleOrderButton}
              >
                Order
              </Button>
            </li>
            <li className="">
              <Button
                className={
                  "bg-primary-200 text-white px-2 py-1 rounded-md hover:bg-primary-100"
                }
                type={"link"}
                href={"/template"}
              >
                Kembali
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderBar;
