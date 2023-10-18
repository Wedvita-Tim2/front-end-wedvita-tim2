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
import Modal from "../../component/Modal";

const EventLocation = () => {
  const [latitude, setLatitude] = useRecoilState(latEvent);
  const [longitude, setLongitude] = useRecoilState(lngEvent);
  const [alamat, setAlamat] = useRecoilState(addressEvent);
  const [building, setBuilding] = useRecoilState(buildingEvent);
  const [isLeaflet, setLeaflet] = useState("gmaps");
  const [linkGmaps, setLinkGmaps] = useRecoilState(linkGmapsEvent);
  const [visible, setVisible] = useState(false);

  const questionButtonHandler = () => {
    setVisible(!visible);
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
          <div className="relative py-2">
            <div>
              <p className="text-primary-400 mb-2 font-medium md:text-lg">
                Pilih tipe lokasi
              </p>
              <Button
                className={`absolute right-0 md:mt-3 mt-2 top-0 text-light-pink hover:text-primary-300`}
                type="button"
                onClick={questionButtonHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </div>
            <Modal
              show={visible}
              title={"Apa Itu Pilih Tipe Lokasi ?"}
              isCancelButton
              onModalToggle={(newShowModalValue) => {
                setVisible(newShowModalValue);
              }}
            >
              <p className="text-primary-200 text-base">
                Tipe lokasi terdiri dari 2 yaitu link gmaps dan leaflet map
              </p>
              <p className="text-primary-200 text-base">
                1. Link Gmaps; Disini anda harus memasukkan lokasi event dengan
                cara buka google maps lalu pilih lokasi acara anda lalu share
                dan salin link, lalu copy-kan link tersebut pada form link gmaps
                dibawah.
              </p>
              <p className="text-primary-200 text-base">
                2. Leaflet Maps; Disini anda dapat memasukkan latitude dan
                longitude lokasi event anda, atau anda juga dapat melakukan drag
                and drop pada maps yang sudah tersedia.
              </p>
              <p className="text-primary-200 text-base mt-1">
                Perbedaannya terdapat ketika undangan di generate, jika anda
                memilih link gmaps, maka di undangan digital akan terdapat
                button yang langsung mengarahkan ke google maps, jika anda
                memilih maps leaflet, maka saat undangan di generate akan tampil
                map leaflet dan rincian lokasi event anda.
              </p>
            </Modal>
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
