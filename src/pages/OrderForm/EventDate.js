import { useState } from "react";
import { InputDate } from "../../elements/Forms";
import { useRecoilState } from "recoil";
import { dateEvent } from "../../recoils/OrderData";

const EventDate = () => {
  const [date, setDate] = useState(new Date());
  const [, setDateE] = useRecoilState(dateEvent);

  const handleDateChange = (selectedDate) => {
    const formattedDate = `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`;
    setDateE(formattedDate);
    setDate(selectedDate);
  };

  return (
    <div className="flex justify-center py-2 md:justify-start">
      <div className="flex-col">
        <p className="text-normal md:text-left text-primary-300 text-center ">
          Masukkan tanggal pernikahan anda
        </p>
        <InputDate selected={date} onChange={handleDateChange} className="border border-light-pink p-2.5 w-72 rounded-md" />
      </div>
    </div>
  );
};

export default EventDate;
