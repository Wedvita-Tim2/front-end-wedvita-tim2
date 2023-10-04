import { useRecoilState } from "recoil";
import { InputText } from "../../elements/Forms";
import { groomName, brideName } from "../../recoils/OrderData";

const GroomBride = () => {
  const [, setBrideName] = useRecoilState(brideName);
  const [, setGroomName] = useRecoilState(groomName);

  return (
    <div className="grid md:grid-cols-2 justify-items-center md:justify-items-stretch md:gap-1 mb-4">
      <InputText
        element={"input"}
        type={"text"}
        className={
          "rounded-md w-72 mt-3 md:w-[360px] lg:w-[512px] border border-light-pink"
        }
        name={"groom_name"}
        placeholder={"Nama pengantin pria"}
        onChange={(e) => setGroomName(e.target.value)}
      />

      <InputText
        element={"input"}
        type={"text"}
        className={
          "rounded-md w-72 mt-3 md:w-[360px] lg:w-[512px] border border-light-pink"
        }
        name={"bride_name"}
        placeholder={"Nama pengantin wanita"}
        onChange={(e) => setBrideName(e.target.value)}
      />
    </div>
  );
};

export default GroomBride;
