import { useRecoilValue } from "recoil";
import Button from "../elements/Buttons/index";
import { useEffect, useState } from "react";
import { apiBackend } from "../recoils/Api";
import img1 from "../assets/img/template-bg1.jpg";
import img2 from "../assets/img/template-bg2.jpg";
import img3 from "../assets/img/template-bg3.png";
import FormWish from "../component/FormWish";
import ListWish from "../component/ListWish";
import LeafletMap from "../component/LeafletMap";
import img6 from "../assets/img/tamplate2/logo.png";

const TemplateWedvitaTest = (props) => {
  const apiAddress = useRecoilValue(apiBackend);
  const [reloadData, setReloadData] = useState(false);
  const [isSmallScreen, setSmallScreen] = useState(false);

  const handleReloadData = () => {
    setReloadData(!reloadData);
  };

  useEffect(() => {
    const changeScreenContent = () => {
      setSmallScreen(window.innerWidth < 768);
    };
    changeScreenContent();

    window.addEventListener("resize", changeScreenContent);

    return () => {
      window.removeEventListener("resize", changeScreenContent);
    };
  }, []);

  let data = props.data[0];

  if (!data) {
    data = {
      groom_name: "Stefen",
      bride_name: "Stevany",
      groom_father_name: "Jas",
      groom_mother_name: "Jus",
      bride_father_name: "Alex",
      bride_mother_name: "Sisca",
      cover_image: { img1 },
      date_event: "31 OKT 2023",
      address: "Jl. Contoh No. 123",
      building_name: "Gedung Contoh",
      quotes:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      guests: "Rico, Lewis, Capaldi",
      maps_url: "https://maps.example.com",
      lat: 123.4567,
      lng: 987.6543,
      attachment_name: [img1, img2, img3, img3],
    };
  }
  const cover_image =
    props.data[0] !== null ? `${apiAddress}${props.data[0].cover_image}` : img1;
  const smallScreen = `url(${cover_image})`;
  const largeScreen = `url(${cover_image})`;
  const wedvita = '“Ciptakan Kenangan Abadi dengan Undangan Eksklusif Wedvita.”'
  const pria = props.data[0] !== null?props.data[0].groom_name:data.groom_name;
  const wanita = props.data[0] !== null?props.data[0].bride_name:data.bride_name;

  let hariPernikahan = 'Selasa';
  let tglPernikahan = data.date_event
  const dateEvent = props.data[0] !== null?props.data[0].date_event:data.date_event;
  if(props.data[0] !== null){
    const [year, month, day] = dateEvent.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    let options = { weekday: "long" }; // 'long' mengembalikan nama hari lengkap (misalnya, "Senin")
    const dayName = new Intl.DateTimeFormat("id-ID", options).format(date);
  
    hariPernikahan = dayName;
  
    options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("id-ID", options).format(date);
    tglPernikahan = formattedDate;
  }
  const inisialPria = pria[0];
  const inisialWanita = wanita[0];
  const namaIbuPria = props.data[0] !== null?props.data[0].groom_mother_name:data.bride_mother_name;
  const namaBapaPria = props.data[0] !== null?props.data[0].groom_father_name:data.bride_father_name;
  const namaOrtuPria = "Bpk. " + namaBapaPria + " & Ibu " + namaIbuPria;
  const namaIbuWanita = props.data[0] !== null?props.data[0].bride_mother_name:data.groom_mother_name;
  const namaBapaWanita = props.data[0] !== null?props.data[0].bride_father_name:data.groom_father_name;
  const namaOrtuWanita = "Bpk. " + namaBapaWanita + " & Ibu " + namaIbuWanita;
  const alamatGedung = props.data[0] !== null?props.data[0].address:data.address;
  const buildingName = props.data[0] !== null?props.data[0].building_name:data.building_name;
  const teksKonten4 = props.data[0] !== null?props.data[0].quotes:data.quotes;
  const teksKonten2 = props.data[0] !== null?props.data[0].guests:data.guests;
  const maps = props.data[0] !== null?props.data[0].maps_url:data.maps_url;
  const lat = props.data[0] !== null?props.data[0].lat:data.lat;
  const lng = props.data[0] !== null?props.data[0].lng:data.lng;
  const imageUrls = [];

  if (!props.data[0]) {
    for (let i = 0; i < data.attachment_name.length; i++) {
      const imageUrl = data.attachment_name[i];
      imageUrls.push(imageUrl);
    }
  } else {
    for (let i = 0; i < props.data[0].attachment_name.length; i++) {
      const imageUrl = `${apiAddress}${props.data[0].attachment_name[i]}`;
      imageUrls.push(imageUrl);
    }
  }

  const galleryComponents = imageUrls.map((imageUrl, index) => (
    <div
      key={index}
      className="col-span-1 h-64 md:h-[400px] relative z-10"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-dark-brown/10 backdrop-brightness-50 z-0"></div>
    </div>
  ));

  return (
    <div>
      {/* ini adalah konten 1 */}
      <div
        className="grid grid-flow-row auto-rows-max relative h-auto z-10"
        style={{
          backgroundImage: isSmallScreen ? smallScreen : largeScreen,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-dark-brown/10 backdrop-brightness-50 z-0"></div>
        <p className="text-center text-white text-lg pt-60 md:text-xl md:pb-16 md:pt-8 tracking-[.5rem] relative z-30">
          Wedding Invitation
        </p>
        <div className="relative mb-32 mt-8 md:mb-44 md:mt-28">
          <p className="left-1/2 -translate-x-1/2 text-7xl md:text-9xl text-white text-center absolute font-kaushan">
            {inisialPria}
          </p>
          <p className="left-1/2 -translate-x-1/2 text-7xl top-[2vh] ml-2 md:ml-4 md:text-9xl md:top-10 text-white text-center absolute font-kaushan">
            {inisialWanita}
          </p>
        </div>
        <p className="text-center text-white text-3xl md:text-7xl md:pt-20 tracking-[0.75rem] md:tracking-[1rem] relative z-30 font-kaushan">
          { pria.toUpperCase() + " & " + wanita.toUpperCase()}
        </p>
        <div className="relative mt-4 mb-64">
          <span className="bg-white w-80 md:w-115 md:h-8 absolute inset-0 left-1/2 -translate-x-1/2 z-20"></span>
          <p
            className={`relative text-lg md:text-2xl text-center z-30 text-dark-brown tracking-[.25rem]`}
          >
            { tglPernikahan.toUpperCase()
              }
          </p>
        </div>
      </div>

      {/* ini adalah konten-2 */}

      <div className="grid grid-cols-1 md:grid-cols-6">
        <div className="md:col-span-4 relative">
          <div className="relative mt-10 mb-40 md:mt-16 md:mb-64 font-kaushan">
            <p
              className={`left-1/2 -translate-x-1/2 text-7xl md:text-9xl text-dark-brown text-center absolute`}
            >
              {inisialPria}
            </p>
            <p
              className={`left-1/2 -translate-x-1/2 text-7xl top-[2vh] ml-2 md:ml-4 md:text-9xl md:top-10 text-dark-brown text-center absolute`}
            >
              {inisialWanita}
            </p>
          </div>
          <p className="text-center text-lg md:text-4xl md:mt-16 tracking-[.25rem] md:tracking-[.5rem] text-dark-brown font-kaushan">
            {teksKonten4}
          </p>
          <p className="text-center text-base md:text-xl py-12 md:py-8 px-24 md:px-40 pb-20 md:pb-8 text-dark-brown"></p>
          <hr
            className="md:mx-16"
            style={{ borderBottom: "2px solid #5A4739" }}
          />
          <p
            className={`text-center text-dark-brown text-xl my-4 tracking-widest font-kaushan`}
          >
            { pria.toUpperCase() + " & " + wanita.toUpperCase()
              }
          </p>
        </div>
        <div
          className="h-[75vh] md:col-span-2 md:h-auto rounded-lg"
          style={{
            backgroundImage: `url(${imageUrls[0]})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* ini adalah konten-3 */}

      <div className="bg-gradient-to-r from-dark-brown to-light-brown">
        <div className="grid grid-cols-1 md:grid-cols-5 relative font-kaushan">
          <p
            className={`left-[43vw] md:left-[35vw] text-8xl top-[8rem] md:top-[4rem] text-white absolute inset-y-0`}
          >
            {inisialPria}
          </p>
          <p
            className={`left-[45vw] md:left-[36vw] text-8xl top-[10rem] md:top-[6rem] text-white absolute inset-y-0`}
          >
            {inisialWanita}
          </p>
          <div className="md:col-span-5 pt-72 md:pt-32 relative font-kaushan">
            <p className="text-white text-xl tracking-widest text-center">
              { pria.toUpperCase() + " & " + wanita.toUpperCase()
                }
            </p>
          </div>
          <div className="md:col-span-2 relative pt-40 pb-12 md:py-32 font-kaushan">
            <hr
              className="ml-20 mr-80 md:mx-28"
              style={{ borderBottom: "2px white" }}
            />
            <div className="pl-20 md:pl-32 py-8 md:py-4">
              <p className="text-white text-5xl md:text-7xl tracking-wide font-light md:py-2">
                {pria.toUpperCase()}
              </p>
              <p className="text-white text-lg md:text-xl py-2">PUTRA DARI</p>
              <p className="text-white text-xl md:text-2xl font-semibold md:py-2">
                {namaOrtuPria.toUpperCase()}
              </p>
            </div>
            <hr
              className="ml-20 mr-80 md:mx-28 md:py-8"
              style={{ borderBottom: "2px white" }}
            />
          </div>
          <div className="grid md:col-span-1 place-content-center font-kaushan">
            <p className="text-[120px] md:text-[180px] text-center text-white">
              &
            </p>
          </div>
          <div className="md:col-span-2 relative pt-12 pb-40 md:py-32 font-kaushan">
            <hr
              className="ml-80 mr-20 md:mx-28"
              style={{ borderBottom: "2px white" }}
            />
            <div className="pr-20 md:pr-32 py-8 md:py-4">
              <p className="text-white text-5xl md:text-7xl text-right tracking-wide font-light md:py-2">
                {wanita.toUpperCase()}
              </p>
              <p className="text-white text-lg md:text-xl text-right py-2">
                PUTRI DARI
              </p>
              <p className="text-white text-xl md:text-2xl text-right font-semibold md:py-2">
                {namaOrtuWanita.toUpperCase()}
              </p>
            </div>
            <hr
              className="ml-80 mr-20 md:mx-28 md:py-8"
              style={{ borderBottom: "2px white" }}
            />
          </div>
        </div>
        <hr className="" style={{ borderBottom: "2px white" }} />
        <p className="text-lg text-white text-center tracking-[1rem] py-4 font-kaushan">
          WEDVITA
        </p>
      </div>

      {/* ini adalah konten-4 */}
      <div className="grid grid-rows-1 md:grid-cols-6">
        <div
          className="h-96 md:h-[800px] md:col-span-4"
          style={{
            backgroundImage: `url(${cover_image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="md:col-span-2">
          <div className="relative font-kaushan">
            <p
              className={`left-[10rem] md:left-[12rem] text-6xl md:text-8xl top-[4rem] text-dark-brown absolute inset-y-0`}
            >
              {inisialPria}
            </p>
            <p
              className={`left-[11rem] md:left-[13rem] text-6xl md:text-8xl top-[6rem] text-dark-brown absolute inset-y-0`}
            >
              { inisialWanita}
            </p>
          </div>
          <p className="text-center text-dark-brown pt-56 text-lg md:text-2xl tracking-[.25rem] font-kaushan">
            MARRIAGE CONTRACT
          </p>
          <hr className="mx-32" style={{ borderBottom: "2px solid #5A4739" }} />
          <div className="my-8 mx-14 bg-dark-brown">
            <p className="text-white text-center text-xl py-2">
              {hariPernikahan + ", " + tglPernikahan}
            </p>
            <p className="text-white text-center text-xl py-2">
              {buildingName}
            </p>
            <p className="text-white text-center text-xl px-8 py-2">
              {alamatGedung}
            </p>
            <div className="text-center py-4 pb-8">
              <Button isPrimary type={"link"} href={maps} isExternal className={`${props.data[0] !== null ? (props.data[0].lat!==null && props.data[0].lng!==null?'hidden':'' ):''}`}>
                LIHAT LOKASI{" "}
              </Button>
            </div>
          </div>
          <p className="text-center text-dark-brown text-xl md:text-2xl font-bold text-md px-24 py-4 pb-4 font-kaushan">
            Turut Mengundang :
          </p>
          <p className="text-center text-dark-brown text-lg md:text-xl text-light text-md px-24 py-4 pb-16 font-kaushan">
            {teksKonten2}
          </p>
        </div>
      </div>

      <div className="bg-light-brown py-6 px-12">
        <p className="text-white text-center text-xl md:text-4xl mb-3 font-kaushan">Lokasi Acara Melalui Leaflet Map</p>
        <div className={`mt-2 mx-auto w-115 md:w-full ${props.data[0] !== null ? (props.data[0].lat!==null && props.data[0].lng!==null?'relative':'hidden' ):''}`}>
                <LeafletMap lat={props.data[0] !== null ? (props.data[0].lat!==null && props.data[0].lng!==null?props.data[0].lat:-6.871461776598065):-6.871461776598065} lng={props.data[0] !== null ?props.data[0].lng:107.57360083862629}/>
        </div>
      </div>

      {/* ini adalah konten-5 */}
      <div className="bg-gradient-to-r from-dark-brown to-light-brown">
        <p className="text-white text-center text-8xl md:text-[200px] pt-16 leading-[10rem] font-kaushan">
          "
        </p>
        <p className="text-white text-center text-3xl  md:text-6xl tracking-[0.25rem] md:tracking-[.5rem] font-kaushan">
          {teksKonten4}
        </p>
        <p
          className={`text-center text-white text-lg md:text-xl my-4 tracking-[.5rem] md:tracking-[.75rem] pb-32 font-kaushan`}
        >
          {pria.toUpperCase() + " & " + wanita.toUpperCase()
            }
        </p>
      </div>

      {/* ini adalah konten-6 */}
      <div className="grid grid-cols-2 inset-0 py-8">{galleryComponents}</div>
        <p className="text-lg md:text-center text-black text-center md:text-2xl">
          Ucapan & Doa
        </p>
        <div className="sm:flex pb-20">
          <div className="w-full sm:w-1/2">
              <FormWish data={!data ? '' : (props.data ? props.data[0]?.event_information_id : '')} reloadData={handleReloadData}/>
          </div>
          <div className="w-full sm:w-1/2">
              <ListWish data={!data ? '' : (props.data ? props.data[0]?.event_information_id : '')} reloadData={reloadData}/>
          </div>
      </div>

     <div className="bg-light-brown pt-6 pb-36">
            <img src={img6} alt="logo" className="mx-auto"></img>
            <p className="font-kaushan text-white text-xl md:text-3xl text-center mt-20">{wedvita}</p>
     </div>
    </div>
  );
};

export default TemplateWedvitaTest;
