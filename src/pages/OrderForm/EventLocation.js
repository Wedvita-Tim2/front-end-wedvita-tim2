import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { InputText } from "../../elements/Forms";
import { useRecoilState } from "recoil";
import { addressEvent, buildingEvent, latEvent, lngEvent } from "../../recoils/OrderData";

const EventLocation = () => {
  const [latitude, setLatitude] = useRecoilState(latEvent);
  const [longitude, setLongitude] = useRecoilState(lngEvent);
  const [alamat, setAlamat] = useRecoilState(addressEvent);
  const [building, setBuilding] = useRecoilState(buildingEvent);

  const handleMarkerDragEnd = (e) => {
    const newLatLng = e.target.getLatLng();
    setLatitude(newLatLng.lat);
    setLongitude(newLatLng.lng);
    console.log("Latitude:", newLatLng.lat);
    console.log("Longitude:", newLatLng.lng);
  };

  return (
    <div className="flex flex-col justify-center px-7 md:px-0 mt-4 md:justify-start">
      <p className="text-normal md:text-left text-primary-300 font-semibold text-center md:text-2xl ">Form Lokasi Acara</p>
      <div className="flex flex-wrap justify-center md:flex md:flex-row md:justify-between md:pr-24">
        <InputText
            element={'input'}
            type={'text'}
            value={alamat}
            placeholder={'Masukkan alamat acara'}
            onChange={(e) => setAlamat(e.target.value)}
            className='border border-light-pink w-72 my-2 md:w-[360px] lg:w-[512px] rounded-md'
          />
          <InputText
            element={'input'}
            type={'text'}
            value={building}
            placeholder={'Masukkan nama gedung acara'}
            onChange={(e) => setBuilding(e.target.value)}
            className='border border-light-pink w-72 md:my-2 md:w-[360px] lg:w-[512px] rounded-md'
          />
      </div>
        
      <div className="flex flex-wrap justify-center md:justify-start my-2">
        <div className="flex flex-col">
          <p className="text-primary-400">Latitude Lokasi</p>
          <InputText
            element={'input'}
            type={'number'}
            value={latitude}
            placeholder={'Latitude'}
            onChange={(e) => setLatitude(e.target.value)}
            className='border border-light-pink md:mr-3'
          />
        </div>
        <div className="flex flex-col">
          <p className="text-primary-400">Longitude Lokasi</p>
          <InputText
            element={'input'}
            type={'number'}
            value={longitude}
            placeholder={'Longitude'}
            onChange={(e) => setLongitude(e.target.value)}
            className='border border-light-pink'
          />
        </div>
      </div>

      <div className="mx-auto md:mx-0">
        <MapContainer center={[-6.871461776598065, 107.57360083862629]} zoom={16} scrollWheelZoom={false} className="w-72 h-72 md:w-96 md:h-96">
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
    </div>
  );
};

export default EventLocation;
