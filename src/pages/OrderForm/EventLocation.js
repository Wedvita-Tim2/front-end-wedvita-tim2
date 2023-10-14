import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { InputText } from "../../elements/Forms";
import { useRecoilState } from "recoil";
import {
  addressEvent,
  buildingEvent,
  latEvent,
  linkGmapsEvent,
  lngEvent,
} from "../../recoils/OrderData";
import { useState } from "react";
import Button from "../../elements/Buttons";

const EventLocation = () => {
  const [latitude, setLatitude] = useRecoilState(latEvent);
  const [longitude, setLongitude] = useRecoilState(lngEvent);
  const [alamat, setAlamat] = useRecoilState(addressEvent);
  const [building, setBuilding] = useRecoilState(buildingEvent);
  const [isLeaflet, setLeaflet] = useState("gmaps");
  const [linkGmaps, setLinkGmaps] = useRecoilState(linkGmapsEvent);
  const [isMinimize, setMinimize] = useState(true);

  const minimizeButtonHandler = () => {
    setMinimize(!isMinimize);
  };

  const handleMarkerDragEnd = (e) => {
    const newLatLng = e.target.getLatLng();
    setLatitude(newLatLng.lat);
    setLongitude(newLatLng.lng);
    console.log("Latitude:", newLatLng.lat);
    console.log("Longitude:", newLatLng.lng);
  };

  const linkGmapsComponent = (
    <div className="flex flex-wrap justify-center md:justify-start my-2">
      <div className="flex flex-col">
        <p className="text-primary-400">Link Google Maps</p>
        <InputText
          element={"input"}
          type={"text"}
          value={linkGmaps}
          placeholder={"Link Google Maps"}
          onChange={(e) => setLinkGmaps(e.target.value)}
          className="w-72 md:my-2 md:w-[360px] lg:w-[512px] rounded-md border border-light-pink"
        />
      </div>
    </div>
  );

  const leafletMap = (
    <>
      <div className="flex flex-wrap justify-center md:justify-start my-2">
        <div className="flex flex-col">
          <p className="text-primary-400">Latitude Lokasi</p>
          <InputText
            element={"input"}
            type={"number"}
            value={latitude}
            placeholder={"Latitude"}
            onChange={(e) => setLatitude(e.target.value)}
            className="border border-light-pink md:mr-3"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-primary-400">Longitude Lokasi</p>
          <InputText
            element={"input"}
            type={"number"}
            value={longitude}
            placeholder={"Longitude"}
            onChange={(e) => setLongitude(e.target.value)}
            className="border border-light-pink"
          />
        </div>
      </div>

      <div className="mx-auto md:mx-0">
        <MapContainer
          center={[latitude, longitude]}
          zoom={16}
          scrollWheelZoom={false}
          className="w-72 h-72 md:w-96 md:h-96"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[latitude, longitude]}
            draggable={true}
            eventHandlers={{
              dragend: handleMarkerDragEnd,
            }}
          >
            <Popup>Pilih Lokasi Anda</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );

  return (
    <div className="flex flex-col justify-center px-7 md:px-0 mt-4 md:justify-start">
      <p className="text-normal md:text-left text-primary-300 font-semibold text-center md:text-2xl ">
        Form Lokasi Acara
      </p>
      <div className="flex flex-wrap justify-center md:flex md:flex-row md:justify-between md:pr-24">
        <InputText
          element={"input"}
          type={"text"}
          value={alamat}
          placeholder={"Masukkan alamat acara"}
          onChange={(e) => setAlamat(e.target.value)}
          className="border border-light-pink w-72 my-2 md:w-[360px] lg:w-[512px] rounded-md"
        />
        <InputText
          element={"input"}
          type={"text"}
          value={building}
          placeholder={"Masukkan nama gedung acara"}
          onChange={(e) => setBuilding(e.target.value)}
          className="border border-light-pink w-72 md:my-2 md:w-[360px] lg:w-[512px] rounded-md"
        />
        <div className="flex flex-col">
          <p className="text-primary-400 mb-2 font-medium md:text-lg">
            Pilih tipe lokasi
          </p>

          <div className="relative pb-2">
            <div className="bg-white shadow-md rounded-top-md p-1.5 w-72 md:w-115 md:p-3 border-t-gray-100">
              <p className="text-primary-300 font-normal">Apa itu pilih tipe lokasi ?</p>
              <Button
                className={`absolute right-4 md:mr-4 top-0 mt-2 md:mt-4`}
                type="button"
                onClick={minimizeButtonHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-5 h-5 ${
                    !isMinimize ? "" : "hidden"
                  } stroke-primary-400 duration-300 ease-in-out hover:scale-105`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-5 h-5 ${
                    !isMinimize ? "hidden" : ""
                  } stroke-primary-400 duration-300 ease-in-out hover:scale-105`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </Button>
            </div>
            <div
              className={`${
                isMinimize ? "hidden" : ""
              } p-1 duration-300 ease-in-out delay-200 md:p-3 bg-white shadow-md rounded-b-md w-72 md:w-115`}
            >
              <p className="text-primary-200 font-light text-base">Tipe lokasi terdiri dari 2 yaitu link gmaps dan leaflet map</p>
              <p className="text-primary-200 font-light text-base">1. Link Gmaps; Disini anda harus memasukkan lokasi event dengan cara buka google maps lalu pilih lokasi acara anda lalu share dan salin link, lalu copy-kan link tersebut pada form link gmaps dibawah.</p>
              <p className="text-primary-200 font-light text-base">2. Leaflet Maps; Disini anda dapat memasukkan latitude dan longitude lokasi event anda, atau anda juga dapat melakukan drag and drop pada maps yang sudah tersedia.</p>
              <p className="text-primary-200 font-light text-base mt-1">Perbedaannya terdapat ketika undangan di generate, jika anda memilih link gmaps, maka di undangan digital akan terdapat button yang langsung mengarahkan ke google maps, jika anda memilih maps leaflet, maka saat undangan di generate akan tampil map leaflet dan rincian lokasi event anda.</p>
            </div>
          </div>
          <select
            className="px-2 py-2.5 border border-light-pink rounded-md"
            onChange={(e) => {
              setLeaflet(e.target.value);
            }}
          >
            <option value={"gmaps"}>Link Google Maps</option>
            <option value={"leaflet"}>Maps Leaflet</option>
          </select>
        </div>
      </div>

      {isLeaflet === "leaflet" ? leafletMap : linkGmapsComponent}
    </div>
  );
};

export default EventLocation;
