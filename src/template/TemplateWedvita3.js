import img4 from "../assets/img/template-bg4.png";
import img5 from "../assets/img/template-bg5.png";
import img6 from "../assets/img/template-bg6.png";
import img8 from "../assets/img/img-8.png";
import img9 from "../assets/img/img-9.png";
import { apiBackend } from "../recoils/Api";
import LeafletMap from "../component/LeafletMap";
import FormWish from "../component/FormWish";
import ListWish from "../component/ListWish";
import Button from "../elements/Buttons";
import { useRecoilValue } from "recoil";
import { useState } from "react";

const TemplateWedvita3 = (props) => {
  const apiAddress = useRecoilValue(apiBackend);
  const [reloadData, setReloadData] = useState(false);
  const handleReloadData = () => {
    setReloadData(!reloadData);
  };

  const tanggalAwal =
    props.data[0] !== null ? props.data[0].date_event : "2024-11-25";
  const [tahun, bulan, tanggal] = tanggalAwal.split("-");

  // Daftar nama bulan dalam Bahasa Indonesia
  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Konversi bulan menjadi teks
  const bulanTeks = namaBulan[parseInt(bulan, 10) - 1];

  // Format tanggal yang diinginkan
  const tglPernikahan = `${tanggal} ${bulanTeks} ${tahun}`;
  const maps =
    props.data[0] !== null
      ? props.data[0].maps_url
      : "https://maps.app.goo.gl/m3VcPHwk5NfXqMoz5";
  const inisialPria =
    props.data[0] !== null ? props.data[0].groom_name : "jonathan";
  const inisialWanita =
    props.data[0] !== null ? props.data[0].bride_name : "claudia";
  const namaIbuPria =
    props.data[0] !== null ? props.data[0].groom_mother_name : "Jors";
  const namaBapaPria =
    props.data[0] !== null ? props.data[0].groom_father_name : "Belle";
  const namaOrtuPria = "Bpk. " + namaBapaPria + " & " + "Ibu " + namaIbuPria;
  const namaIbuWanita =
    props.data[0] !== null ? props.data[0].bride_mother_name : "Bryan";
  const namaBapaWanita =
    props.data[0] !== null ? props.data[0].bride_father_name : "Rose";
  const namaOrtuWanita =
    "Bpk. " + namaBapaWanita + " & " + "Ibu " + namaIbuWanita;
  const alamatGedung =
    props.data[0] !== null
      ? props.data[0].address
      : "Jl. Cihampelas No.23 25, Pasir Kaliki";
  const buildingName =
    props.data[0] !== null ? props.data[0].building_name : "Novotel Bandung";
  const imgGallery1 = img5;
  const imgGallery2 =
    props.data[0] !== null ? `${apiAddress}${props.data[0].cover_image}` : img4;
  const imgGallery3 =
    props.data[0] !== null
      ? `${apiAddress}${props.data[0].attachment_name[0]}`
      : img6;
  const imageUrls = [];
  const attachment_name = [img4, img6, img8, img9];
  if (!props.data[0]) {
    for (let i = 0; i < attachment_name.length; i++) {
      const imageUrl = attachment_name[i];
      imageUrls.push(imageUrl);
    }
  } else {
    for (let i = 0; i < props.data[0].attachment_name.length; i++) {
      const imageUrl = `${apiAddress}${props.data[0].attachment_name[i]}`;
      imageUrls.push(imageUrl);
    }
  }

  const galleryComponents = imageUrls.map((imageUrl, index) => (
    <>
      {index % 2 === 0 ? (
        <div className="w-[760px] h-96 overflow-hidden border-gray-800 border rounded-md">
          <img
            className=" object-cover w-full h-full"
            src={imageUrl}
            alt="Foto Pria dan Wanita"
          />
        </div>
      ) : (
        <div className="w-[480px] h-96 overflow-hidden border-gray-800 border rounded-md">
          <img
            className=" object-cover w-full h-full"
            src={imageUrl}
            alt="Foto Pria dan Wanita"
          />
        </div>
      )}
    </>
  ));
  const kata = "WEDVITA";
  const kata2 = props.data[0] !== null ? props.data[0].quotes : "Lorem Ipsum";

  return (
    <>
      <div>
        {/* ini adalah konten 1 */}
        <div
          className="grid grid-flow-row auto-rows-max relative h-auto"
          style={{
            backgroundImage: `url(${imgGallery2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute left-0 z-10 w-full h-full "
            style={{
              backgroundImage: `url(${imgGallery1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-5 backdrop-brightness-50 z-0"></div>
          {/* <img className='absolute inset-0 w-full h-full object-cover z-10' src={imgGallery2} alt='Another Image' style={{width: "1478px", height: "888px"}}/> */}
          <div
            className="relative mb-32 mt-8 md:mb-44 md:mt-28 "
            style={{ height: "350px" }}
          >
            <p className="text-center text-white text-lg top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-2xl md:pb-16 md:pt-8 tracking-[.5rem] relative z-30 font-monserrat-classic">
              WELCOME TO
            </p>
            <p className="text-center text-white text-lg top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-7xl md:pb-16 md:pt-8 tracking-[.5rem] relative z-30 font-belleza">
              THE WEDDING
            </p>
            <p className="text-center text-white text-1xl md:text-2xl top-1/3 left-1/2 transform -translate-x-1/2 md:pt-15 tracking-[0.75rem] md:tracking-[1rem] relative z-30 font-arimo">
              {inisialPria.toUpperCase() + " & " + inisialWanita.toUpperCase()}
            </p>
          </div>
          <p className="text-center text-white text-1xl md:text-2xl top-1/3 left-1/2 transform -translate-x-1/2 md:pt-15 tracking-[0.75rem] md:tracking-[1rem] relative z-30 font-arimo">
            {tglPernikahan}
          </p>
          <div className="relative mt-4 mb-64"></div>
        </div>
      </div>

      {/* ini adalah konten 2 */}
      <div
        className="bg-gradient-to-r from-gray-400 to-white"
        style={{ height: "900px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 relative font-belleza">
          <div className="md:col-span-5 pt-72 md:pt-32 relative font-belleza">
            <p className="text-black font-bold text-3xl md:text-7xl tracking-widest text-center">
              {inisialPria[0].toUpperCase() + inisialWanita[0].toUpperCase()}
            </p>
          </div>
          <div
            className="absolute w-15 h-3 bg-black left-0"
            style={{ width: "290px", height: "30px", marginTop: "210px" }}
          ></div>
          <div className="md:col-span-2 relative pt-40 pb-12 md:py-32 font-belleza">
            <div className="pl-20 md:pl-32 py-8 md:py-4">
              <p className="text-black text-5xl md:text-7xl tracking-wide font-belleza md:py-2">
                {inisialPria.toUpperCase()}
              </p>
              <p className="text-black text-lg md:text-xl py-2">PUTRA DARI</p>
              <p className="text-black text-xl md:text-4xl font-arimo md:py-2">
                {namaOrtuPria.toUpperCase()}
              </p>
            </div>
          </div>
          <div className="grid md:col-span-1 place-content-center font-belleza">
            <p className="text-[120px] md:text-[120px] text-center font-belleza text-black">
              &
            </p>
          </div>
          <div className="md:col-span-2 relative pt-12 pb-40 md:py-32 font-belleza">
            <div className="pr-20 md:pr-32 py-8 md:py-4">
              <p className="text-black text-5xl md:text-7xl text-right tracking-wide font-belleza md:py-2">
                {inisialWanita.toUpperCase()}
              </p>
              <p className="text-black text-lg md:text-xl text-right py-2">
                PUTRI DARI
              </p>
              <p className="text-black text-xl md:text-4xl text-right font-arimo md:py-2">
                {namaOrtuWanita.toUpperCase()}
              </p>
            </div>
            <div
              className="absolute w-15 h-3 bg-black right-0"
              style={{ width: "290px", height: "30px", marginTop: "95px" }}
            ></div>
          </div>
        </div>
      </div>

      {/* ini adalah konten 3 */}
      <div
        className="px-48"
        style={{
          height: "800px",
          background: "linear-gradient(to right, #000000, #737373)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 relative font-belleza">
          <div className="md:col-span-5 pt-72 md:pt-32 relative font-belleza">
            <p className="text-white text-lg md:text-m tracking-widest text-center">
              {inisialPria.toUpperCase() + " & " + inisialWanita.toUpperCase()}
            </p>
            <div className="flex flex-wrap">
              <div className="md:col-span-1 md:row-span-2 flex items-center justify-start mx-4 my-10">
                <img
                  className="w-84 h-72 object-cover ml-4"
                  src={imgGallery3}
                  alt="Foto Pria dan Wanita"
                  style={{ marginTop: "130px" }}
                />
              </div>
              <div className="md:col-span-2">
                <div
                  className="grid grid-cols-1"
                  style={{
                    marginLeft: "700px",
                    marginTop: "-325px",
                    marginBottom: "200px",
                    height: "160px",
                  }}
                >
                  <div className="rounded-lg w-[400px] bg-gradient-to-r from-gray-400 to-white p-4">
                    <p
                      className="rounded-lg text-white text-center"
                      style={{
                        height: "30px",
                        width: "330px",
                        background: "#545454",
                        marginTop: "25px",
                        marginLeft: "15px",
                      }}
                    >
                      {alamatGedung}
                    </p>
                    <p
                      className="rounded-lg text-white text-center"
                      style={{
                        height: "30px",
                        width: "330px",
                        background: "#545454",
                        margin: "15px",
                      }}
                    >
                      {buildingName}
                    </p>
                    <div className="flex items-center justify-center">
                      <Button
                        type={"link"}
                        href={maps}
                        className={`bg-[#545454] text-white font-gotu flex items-center px-4 py-2 rounded-full mt-4 ${
                          props.data[0] !== null
                            ? props.data[0].lat !== null &&
                              props.data[0].lng !== null
                              ? "hidden"
                              : ""
                            : ""
                        }`}
                      >
                        Lihat Lokasi
                      </Button>
                    </div>
                  </div>
                </div>

                <hr className="border-t-2 border-white my-4 mx-auto w-full" />
                <p
                  className="text-white text-lg md:text-lg tracking-widest text-center font-neuton"
                >
                  {kata}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-400 to-white py-16 flex flex-col items-center">
      <p
            className="text-black text-2xl md:text-6xl tracking-widest text-center font-belleza mb-16"
        >
           Lokasi Acara 
        </p>
        <div
          className={`mt-2 w-115 md:w-[900px] ${
            props.data[0] !== null
              ? props.data[0].lat !== null && props.data[0].lng !== null
                ? "relative"
                : "hidden"
              : ""
          }`}
        >
          <LeafletMap
            lat={
              props.data[0] !== null
                ? props.data[0].lat !== null && props.data[0].lng !== null
                  ? props.data[0].lat
                  : -6.871461776598065
                : -6.871461776598065
            }
            lng={
              props.data[0] !== null ? props.data[0].lng : 107.57360083862629
            }
          />
        </div>
      </div>

      {/* ini adalah konten 4 */}
      <div
        className="px-64 py-20"
        style={{
          background: "linear-gradient(to right, #a6a6a6, #ffffff)",
        }}
      >

        <p
            className="text-black text-2xl md:text-6xl tracking-widest text-center font-belleza mb-16"
        >
            Quotes
        </p>
        <p
            className="text-black text-lg md:text-4xl tracking-widest text-center font-belleza"
        >
            "{kata2}""
        </p>
        <p
            className="text-black text-base md:text-xl tracking-widest text-center font-arimo mt-24"
        >
            {inisialPria + " & " + inisialWanita}
        </p>
      </div>

      <div className="konten-1 relative bg-cover px-12 bg-center items-center bg-[#737373] py-9 justify-center"
            style={{
              backgroundImage: `url(${imgGallery1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",}} >
                <div className="px- 2 rounded-xl py-9 bg-opacity-5 backdrop-brightness-50 z-0">
                    <p className="text-center text-white relative z-30 font-arimo font-bold text-4xl">
                        Wish
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
            </div>

      {/* ini adalah konten 5 */}
      <div
        className="px-28 py-24"
        style={{ background: "linear-gradient(to right, #000000, #737373)" }}
      >
        <p className="text-white font-bold text-5xl md:text-7xl tracking-widest text-center my-8">
          Gallery
        </p>
        <p className="text-white font-bold text-5xl md:text-7xl tracking-widest text-center my-8">
          {inisialPria[0].toUpperCase() + inisialWanita[0].toUpperCase()}
        </p>
        <div className="flex flex-row gap-6 justify-between">
          {galleryComponents}
        </div>
      </div>
      {/* ini adalah konten 6 */}
    </>
  );
};

export default TemplateWedvita3;
