import img1 from "../assets/img/tamplate2/bg-content1.png";
import img2 from "../assets/img/tamplate2/element-content1.png";
import img3 from "../assets/img/tamplate2/bg-content2.png";
import img4 from "../assets/img/tamplate2/content4.png";
import img5 from "../assets/img/tamplate2/bg-content5.png";
import img6 from "../assets/img/tamplate2/border.png";
import img7 from "../assets/img/tamplate2/logo.png";
import { useRecoilValue } from "recoil";
import { apiBackend } from "../recoils/Api";
import { useState } from "react";
import FormWish from "../component/FormWish";
import ListWish from "../component/ListWish";
import Button from "../elements/Buttons";
import LeafletMap from "../component/LeafletMap";

const TemplateWedvita2 = (props) => {
  const apiAddress = useRecoilValue(apiBackend);
  const [reloadData, setReloadData] = useState(false);
  const handleReloadData = () => {
    setReloadData(!reloadData);
  };

  const inisialPria = props.data[0] !== null?props.data[0].groom_name:"Francois";
  const inisialWanita = props.data[0] !== null?props.data[0].bride_name:"Korina";
  const namaIbuPria = props.data[0] !== null?props.data[0].groom_mother_name:"Elle";
  const namaBapaPria = props.data[0] !== null?props.data[0].groom_father_name:"Jors";
  const Putra = "Putra Dari";
  const Putri = "Putri Dari";
  const namaOrtuPria = "Bpk. " + namaBapaPria + " & Ibu " + namaIbuPria;
  const namaIbuWanita = props.data[0] !== null?props.data[0].bride_mother_name:"Elle";
  const namaBapaWanita = props.data[0] !== null?props.data[0].bride_father_name:"Jors";
  const namaOrtuWanita = "Bpk. " + namaBapaWanita + " & Ibu " + namaIbuWanita;
  const alamatGedung = props.data[0] !== null?props.data[0].address:"Jl. Jenderal Sudirman No. 123, Jakarta";
  const buildingName = props.data[0] !== null?props.data[0].building_name:"Hotel Grand Ballroom";
  const maps = props.data[0] !== null?props.data[0].maps_url:"https://maps.app.goo.gl/m3VcPHwk5NfXqMoz5";
  const kata = "wedding invitation";
  const kata2 = "Invite You To our Wedding Celebration";
  const quotes =props.data[0] !== null?props.data[0].quotes:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const date_event = "2025-03-27"
    const tanggalObj = props.data[0] !== null?new Date(props.data[0].date_event):new Date(date_event);

    // Array untuk menyimpan nama hari dalam bahasa Inggris
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    // Mendapatkan hari, tanggal, bulan, dan tahun dari objek Date
    const hari = days[tanggalObj.getDay()];
    const tanggal = tanggalObj.getDate();
    const bulan = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(tanggalObj);
    const tahun = tanggalObj.getFullYear();
  const wedvita =
    "“Ciptakan Kenangan Abadi dengan Undangan Eksklusif Wedvita.”";
  const web = "www.wedvita.com";
  const imageUrls = [];
  const attachment_name = [img3, img4, img5, img4];
  const coverImage =
    props.data[0] !== null ? `${apiAddress.replace(/\/$/, '')}${props.data[0].cover_image}` : img3;
  const imgKonten1 =
    props.data[0] !== null ? `${apiAddress.replace(/\/$/, '')}${props.data[0].cover_image}` : img4;
    const imgKonten2 =
    props.data[0] !== null ? `${apiAddress.replace(/\/$/, '')}${props.data[0].attachment_name[0]}` : img5;

  if (!props.data[0]) {
    for (let i = 0; i < attachment_name.length; i++) {
      const imageUrl = attachment_name[i];
      imageUrls.push(imageUrl);
    }
  } else {
    for (let i = 0; i < props.data[0].attachment_name.length; i++) {
      const imageUrl = `${apiAddress.replace(/\/$/, '')}${props.data[0].attachment_name[i]}`;
      imageUrls.push(imageUrl);
    }
  }

  const galleryComponents = imageUrls.map((imageUrl, index) => (
    <div
      key={index}
      className="col-span-1 h-64 md:h-[400px] w-80 md:w-[480px] overflow-hidden relative z-10"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  ));

  return (
    <div>
      {/* konten 1 */}
      <div
        className="konten-1"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          position: "relative",
        }}
      >
        <div
          className="kontent1"
          style={{
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100vw",
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <p
            className="text-center text-LightBlue text-[12px] md:tracking-[0.8rem] relative z-30 font-sans"
            style={{ position: "absolute", top: "50px", right: "490px" }}
          >
            {kata}
          </p>
          <p
            className="text-center text-LightBlue text-[80px] relative z-30 font-niconne"
            style={{ position: "absolute", top: "210px", right: "540px" }}
          >
            {inisialPria}
          </p>
          <p
            className="text-center text-LightBlue text-[50px] relative z-30 font-niconne"
            style={{ position: "absolute", top: "300px", right: "630px" }}
          >
            &
          </p>
          <p
            className="text-center text-LightBlue text-[80px] relative z-30 font-niconne"
            style={{ position: "absolute", top: "315px", right: "555px" }}
          >
            {inisialWanita}
          </p>
          <p
            className="text-center text-LightBlue text-[15px] relative z-30 font-sans"
            style={{ position: "absolute", top: "450px", right: "700px" }}
          >
            {hari}
          </p>
          <p
            className="text-center text-LightBlue text-[45px] relative z-30 font-sans"
            style={{
              position: "absolute",
              top: "435px",
              right: "630px",
              fontWeight: "bold",
            }}
          >
            {tanggal}
          </p>
          <p
            className="text-center text-LightBlue text-[15px] relative z-30 font-sans"
            style={{ position: "absolute", top: "450px", right: "550px" }}
          >
            {bulan}
          </p>
          <p
            className="text-center text-LightBlue text-[15px] relative z-30 font-sans"
            style={{ position: "absolute", top: "468px", right: "700px" }}
          >
            {tahun}
          </p>
          <p
            className="text-center text-LightBlue text-[15px] relative z-30 font-sans"
            style={{ position: "absolute", top: "468px", right: "582px" }}
          >
            {tahun}
          </p>
          <p
            className="text-center text-LightBlue text-[10px] md:tracking-[0.8rem] relative z-30 font-sans"
            style={{ position: "absolute", top: "570px", right: "315px" }}
          >
            {kata2}
          </p>
        </div>
      </div>
      <div>
        {/* konten2 */}
        <div
          className="grid grid-flow-row auto-rows-max relative h-auto "
          style={{
            backgroundImage: `url(${coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100vw",
            position: "relative",
            opacity: 1,
          }}
        >
          <div
            className="bg-gradient-to-r from-HijauGrad to-BiruGrad relative px-44 pt-[150px]"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "100vw",
              position: "relative",
              zIndex: 2,
              opacity: 0.9,
            }}
          >
            <p
              className="text-center text-white text-[80px] relative z-30 font-niconne"
              style={{ display: "block" }}
            >
              Quotes
            </p>
            <p
              className="text-center text-white text-[18px] relative z-30 font-sans mx-auto mt-10"
              style={{ display: "block" }}
            >
              {quotes}
            </p>
          </div>
        </div>
      </div>
      <div>
        {/* konten 3 */}
        <div
          className="bg-gradient-to-r from-HijauGrad2 to-BiruGrad relative"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100vw",
            position: "relative",
          }}
        >
          <div
            className="kontent3"
            style={{
              backgroundImage: `url(${img6})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "100vw",
              position: "relative",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              className="kontent1"
              style={{
                backgroundImage: `url(${img2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                width: "100vw",
                position: "relative",
                display: "flex",
                justifyContent: "flex-end",
              }}
            ></div>
          </div>
          <p
            className="text-center text-white text-[80px] relative z-30 font-niconne"
            style={{ position: "absolute", top: "210px", left: "200px" }}
          >
            {inisialPria}
          </p>
          <p
            className="text-center text-white text-[80px] relative z-30 font-niconne"
            style={{ position: "absolute", top: "210px", right: "200px" }}
          >
            {inisialWanita}
          </p>
          <p
            className="text-center text-white text-[23px] relative z-30 font-sans"
            style={{ position: "absolute", top: "320px", right: "1000px" }}
          >
            {Putra}
          </p>
          <p
            className="text-center text-white text-[30px] relative z-30 font-niconne"
            style={{ position: "absolute", top: "365px", right: "870px" }}
          >
            {namaOrtuPria}
          </p>
          <p
            className="text-center text-white text-[23px] relative z-30 font-sans"
            style={{ position: "absolute", top: "320px", right: "200px" }}
          >
            {Putri}
          </p>
          <p
            className="text-center text-white text-[30px] relative z-30 font-niconne"
            style={{ position: "absolute", top: "365px", right: "200px" }}
          >
            {namaOrtuWanita}
          </p>
        </div>
      </div>

      {/* konten 4 */}
      <div className="grid grid-cols-1 md:grid-cols-6 bg-BiruBg">
        <div className="md:col-span-4 relative">
            <div>

          <p
            className="text-center text-white text-[50px] relative z-30 font-niconne"
            style={{ position: "absolute", top: "120px", right: "290px" }}
          >
            Marriage Contract
          </p>
          <div
            className="kotak1"
            style={{
              position: "absolute",
              bottom: "150px",
              right: "237px",
              width: "450px",
              height: "230px",
              background: "linear-gradient(to right, #8AE5F1, #719FF6)",
              borderRadius: "20px",
            }}
          >
            <div
              className="kotak2"
              style={{
                position: "absolute",
                bottom: "120px",
                right: "50px",
                width: "350px",
                height: "40px",
                background: "white",
                borderRadius: "10px",
              }}
            >
              <p
                className="text-center text-BiruBg text-lg relative z-30 font-sans"
              >
                {alamatGedung}
              </p>
            </div>
            <div
              className="kotak3"
              style={{
                position: "absolute",
                bottom: "65px",
                right: "50px",
                width: "350px",
                height: "40px",
                background: "white",
                borderRadius: "10px",
              }}
            >
              <p
                className="text-center text-BiruBg text-lg relative z-30 font-sans"
                
              >
                {buildingName}
              </p>
            </div>
            <div
              className="kotak4"
              style={{
                position: "absolute",
                bottom: "200px",
                right: "90px",
                width: "267px",
                height: "60px",
                background: "linear-gradient(to right, #8AE5F1, #719FF6)",
                borderRadius: "30px",
              }}
            >
              <p
                className="text-center text-white text-[15px] relative z-30 font-sans"
                style={{ position: "absolute", bottom: "30px", right: "190px" }}
              >
                {hari}
              </p>
              <p
                className="text-center text-white text-[15px] relative z-30 font-sans"
                style={{ position: "absolute", bottom: "11px", right: "172px" }}
              >
                {tahun}
              </p>
              <p
                className="text-center text-white text-[45px] relative z-30 font-sans"
                style={{
                  position: "absolute",
                  bottom: "0px",
                  right: "105px",
                  fontWeight: "bold",
                }}
              >
                {tanggal}
              </p>
              <p
                className="text-center text-white text-[15px] relative z-30 font-sans"
                style={{ position: "absolute", bottom: "30px", right: "30px" }}
              >
                {bulan}
              </p>
              <p
                className="text-center text-white text-[15px] relative z-30 font-sans"
                style={{ position: "absolute", bottom: "11px", right: "65px" }}
              >
                {tahun}
              </p>
            </div>
          </div>

          {/* harusnya button */}
          <Button
            type={'link'}
            href={maps}
            isExternal
            className={`kotak4 ${props.data[0] !== null ? (props.data[0].lat!==null && props.data[0].lng!==null?'hidden':'' ):''}`}
            style={{
              position: "absolute",
              bottom: "130px",
              right: "380px",
              width: "150px",
              height: "50px",
              background: "linear-gradient(to right, #8AE5F1, #719FF6)",
              borderRadius: "30px",
            }}
          >
            <p
              className="text-center text-white text-[23px] relative z-30 font-niconne"
              style={{ position: "absolute", top: "10px", right: "20px" }}
            >
              Lihat Lokasi
            </p>
          </Button>
            </div>
            
        </div>
        <div className="md:col-span-2 overflow-hidden h-[600px] w-[500px]">
            <img src={imgKonten1} alt="Foto" className="object-cover w-full h-full" />
        </div>
        <div className={`md:col-span-6 mt-2 mx-auto bottom-0 w-115 md:w-[800px] ${props.data[0] !== null ? (props.data[0].lat!==null && props.data[0].lng!==null?'relative':'hidden' ):''}`}>
            <LeafletMap lat={props.data[0] !== null ?props.data[0].lat:-6.871461776598065} lng={props.data[0] !== null ?props.data[0].lng:107.57360083862629}/>
          </div>
      </div>

      <div>
        {/* konten 5 */}
        <div
          className="grid grid-flow-row auto-rows-max relative h-auto "
          style={{
            backgroundImage: `url(${imgKonten2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100vw",
            position: "relative",
            opacity: 1,
          }}
        >
          <div
            className="bg-gradient-to-r from-HijauGrad3 to-BiruGrad3 relative px-44 pt-[200px]"
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "100vw",
              position: "relative",
              zIndex: 2,
              opacity: 0.85,
            }}
          >
            <p
              className="text-center text-white text-[80px] relative z-30 font-niconne"
              style={{ display: "block" }}
            >
              QUOTES
            </p>
            <p
              className="text-center text-white text-lg relative z-30 font-sans mx-auto mt-5"
              style={{ display: "block" }}
            >
              {quotes}
            </p>
          </div>
        </div>
      </div>

      <div className=" px-8 py-8 bg-BiruGrad2">
        <p className="text-center text-white text-[80px] relative z-30 font-niconne">
          Galerry Kami
        </p>
        <div className="flex flex-wrap mt-8 items-center justify-center">
          {galleryComponents}
        </div>
      </div>
        <div className="bg-gradient-to-r from-BiruGrad3 to-HijauGrad3">
        <p className="text-center text-white text-[80px] relative z-30 font-niconne">
          Ucapan & Doa
        </p>
        <div className="sm:flex pb-20 mt-6">
          <div className="w-full sm:w-1/2">
              <FormWish data={!props.data[0] ? '' : (props.data ? props.data[0]?.event_information_id : '')} reloadData={handleReloadData}/>
          </div>
          <div className="w-full sm:w-1/2">
              <ListWish data={!props.data[0] ? '' : (props.data ? props.data[0]?.event_information_id : '')} reloadData={reloadData}/>
          </div>
        </div>
        </div>
      <div>
        {/* konten 7 */}
        <div
          className="bg-gradient-to-r from-HijauGrad3 to-BiruGrad3 relative"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            width: "100vw",
            position: "relative",
          }}
        >
          <div
            className="kontent3"
            style={{
              height: "100vh",
              width: "100vw",
              position: "relative",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={img7}
              alt="Gambar 7"
              className="absolute top-16 right-[480px]"
            />
          </div>
          <p
            className="text-center text-white text-[20px] relative z-30 font-sans"
            style={{ position: "absolute", top: "350px", left: "400px" }}
          >
            {wedvita}
          </p>
          <p
            className="text-center text-white text-[18px] relative z-30 font-sans"
            style={{ position: "absolute", top: "380px", left: "610px" }}
          >
            {web}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateWedvita2;
