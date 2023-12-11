import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { apiBackend } from "../recoils/Api";
import axios from "axios";

const ListWish = (props) => {
  const [wish, setWish] = useState([]);
  const apiAddress = useRecoilValue(apiBackend);
  
  const wishData = async () => {
    try {
      const response = await axios.get(apiAddress + "api/wishes/" + props.data, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
          // Atau gunakan header sesuai kebutuhan Anda
          // 'Custom-Header': 'value',
        },
      });
      
    
      setWish(response.data.wishData);
    } catch (err) {
      console.error(err);
    }
  };
  

  useEffect(() => {
    if (!props.data) {
      setWish([
        {
          guest_name: "Miftah",
          message: "Selamat atas pernikahannya!",
        },
        {
          guest_name: "Ramdhani",
          message: "Selamat menempuh hidup baru",
        },
        {
          guest_name: "Arya",
          message: "Selamat untuk kedua mempelai semoga berbahagia",
        },
        {
          guest_name: "Putri",
          message: "Happy wedding",
        },
      ]);
    } else {
      wishData();
    }
  }, [props.data, props.reloadData]);

  return (
    <div className="flex flex-col overflow-y-scroll px-4 mx-14 h-96">
      {wish.length === 0 ? (
        <div className="bg-gray-200 p-4 m-2 rounded-lg">
          <p>Belum ada yang mengirimkan ucapan, jadilah yang pertama</p>
        </div>
      ) : (
        wish.map((item, index) => (
          <div key={index} className="bg-gray-200 p-4 m-2 rounded-lg">
            <div className="flex gap-2">
              <div className="flex-initial w-14 uppercase text-center border border-r-black">
                <div className="flex items-center justify-center h-16 uppercase border rounded-full bg-gray-200">
                  {item.guest_name[0]}
                </div>
              </div>
              <div className="flex-intial w-64">
                <div className="grid grid-rows-2">
                  <p className="pb-2 font-medium capitalize">
                    {item.guest_name}
                  </p>
                  <i>"{item.message}"</i>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListWish;
