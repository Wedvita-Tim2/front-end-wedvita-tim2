
import { useRecoilValue } from "recoil";
import img1 from "../assets/img/template4/img-1.png";
import img2 from "../assets/img/template4/img-2.png";
import img3 from "../assets/img/template4/img-3.png";
import img4 from "../assets/img/template4/img-4.png";
import img5 from "../assets/img/template4/img-5.png";
import img6 from "../assets/img/template4/img-6.png";
import { apiBackend } from "../recoils/Api";
import LeafletMap from "../component/LeafletMap";
import FormWish from "../component/FormWish";
import ListWish from "../component/ListWish";
import Button from "../elements/Buttons";
import { useState } from "react";



const TemplateWedvita4 = (props) => {

    const apiAddress = useRecoilValue(apiBackend)
    const [reloadData, setReloadData] = useState(false);
    const handleReloadData = () => {
      setReloadData(!reloadData);
    };

    const inisialPria = props.data[0] !== null?props.data[0].groom_name:'Zayn';
    const inisialWanita = props.data[0] !== null?props.data[0].bride_name:'Kimberly';
    const namaIbuPria = props.data[0] !== null?props.data[0].groom_mother_name:'Lyn';
    const namaBapaPria = props.data[0] !== null?props.data[0].groom_father_name:'Jhon';
    const namaIbuWanita = props.data[0] !== null?props.data[0].bride_mother_name:'Elly';
    const namaBapaWanita = props.data[0] !== null?props.data[0].bride_father_name:'Kim';
    const alamatWedding = props.data[0] !== null?props.data[0].address:'JL. SETIABUDI BANDUNG';
    const tempatWedding = props.data[0] !== null?props.data[0].building_name:'GH UNIVERSAL'
    const ucapanWedding = props.data[0] !== null?props.data[0].quotes:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .'
    const quotes = '"Hal-hal yang terbaik dan terindah di dunia ini tidak dapat dilihat atau bahkan didengar, tetapi mereka harus dirasakan dengan hati"'
    const date_event = "2025-03-27"
    const tanggalObj = props.data[0] !== null?new Date(props.data[0].date_event):new Date(date_event);

    // Array untuk menyimpan nama hari dalam bahasa Inggris
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    // Mendapatkan hari, tanggal, bulan, dan tahun dari objek Date
    const hari = days[tanggalObj.getDay()];
    const tanggal = tanggalObj.getDate();
    const bulan = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(tanggalObj);
    const tahun = tanggalObj.getFullYear();
    const maps = props.data[0] !== null?props.data[0].maps_url:"https://maps.app.goo.gl/m3VcPHwk5NfXqMoz5";
    const wedvita = '“Ciptakan Kenangan Abadi dengan Undangan Eksklusif Wedvita.”'
    const imageUrls = [];
    const coverImage = props.data[0] !== null ? `${apiAddress.replace(/\/$/, '')}${props.data[0].cover_image}` : img2;
    const attachment_name = [img4, img5, img2, img4];
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

      const galleryComponents1 = imageUrls.map((imageUrl, index) => (
        <div className="w-1/2 pl-4 overflow-hidden" key={index}>
            <img src={imageUrl} alt={`Landscape Frame ${index}`} className="object-cover w-full h-full border-4 border-white" />
        </div>
      ));

    return (
        <div>
            {/* konten 1 */}
            <div className="konten-1 h-screen bg-cover bg-center bg-fixed bg-no-repeat relative flex items-center justify-center" style={{ backgroundImage: `url(${img1})` }}>
                <div className="my-8">
                    <p className="text-gold font-alata text-lg text-center">THE WEDDING OF</p>
                    <p className="text-gold font-gotu text-5xl text-center my-4">{inisialPria} & {inisialWanita} </p>
                    <div className="flex items-center">
                        <hr className="flex-grow border-t border-gold h-0 m-2 " />
                        <p className="mx-2 text-gold ml-4">{bulan}</p>
                        <hr className="flex-grow border-t border-gold h-0 m-2" />
                    </div>
                    <div className="flex items-center">
                        <p className="mx-4 text-gold border-b border-gold mb-2">{hari}</p>
                        <hr className="flex-grow border-t border-gold h-0 m-2" />
                        <p className="mr-1 text-gold text-3xl">{tanggal}</p>
                        <p className="mx-2 text-gold border-b border-gold mb-2">{tahun}</p>
                    </div>
                </div>
            </div>

            {/* konten 2 */}
            <div className="konten-1 h-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${coverImage})` }}>
                <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
                <div className="px-40">
                    <div className="my-8">
                        <p className="text-gold text-5xl my-4 text-center z-10 relative px-12 font-gotu font-bold">Wedding Invitation</p>
                        <p className="text-gold text-xl text-center z-10 relative px-10">{quotes}</p>
                    </div>
                </div>
            </div>

            {/* konten 3 */}
            <div className="konten-1 h-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${img3})` }}>

                <div className="absolute left-40 top-1/4 w-72 h-72 overflow-hidden">
                    {/* Left photo frame */}
                    <img src={imageUrls[0]} alt="Left Frame" className="w-full h-full object-cover border-4 border-white" />
                </div>
                <div>
                    <div className="my-14 mx-3">
                        {/* Text between frames */}
                        <p className="md:text-2xl font-thin font-gotu text-4xl text-gold">{inisialPria}</p>
                        <p className="md:text-2xl font-thin text-sm text-gold">Putra Dari</p>
                        <p className="md:text-2xl font-thin text-sm text-gold">Bpk {namaBapaPria} & Ibu {namaIbuPria}</p>
                    </div>
                    <div>
                        <hr className="flex-grow border-t-4 border-gold h-5 m-8 " />
                    </div>
                    <div className="my-16 text-right ml-36">
                        {/* Text between frames */}
                        <p className="text-2xl font-thin font-gotu md:text-4xl text-gold">{inisialWanita}</p>
                        <p className="md:text-2xl font-thin text-sm text-gold">Putri Dari</p>
                        <p className="md:text-2xl font-thin text-sm text-gold">Bpk {namaBapaWanita} & Ibu {namaIbuWanita}</p>
                    </div>

                </div>


                <div className="absolute right-40 top-1/4 overflow-hidden w-72 h-72">
                    {/* Right photo frame */}
                    <img src={coverImage} alt="Right Frame" className="w-full h-full border-4 object-cover border-white" />
                </div>

            </div>


            {/* konten 4 */}
            <div className="konten-1 h-screen relative bg-cover px-12 bg-center flex items-center justify-center" style={{ backgroundImage: `url(${imageUrls[0]})` }}>
                <div className="absolute inset-0 bg-[#050B14] opacity-80 z-0"></div>
                <div className="my-8 z-10 text-center">
                    <p className="text-gold font-gotu text-5xl my-4">Save The Date</p>
                    <div className="flex items-center justify-center">
                        <hr className="flex-grow border-t border-gold h-0 m-2 " />
                        <p className="mx-2 text-gold">{bulan}</p>
                        <hr className="flex-grow border-t border-gold h-0 m-2" />
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="mx-4 text-gold border-b border-gold mb-2">{hari}</p>
                        <hr className="flex-grow border-t border-gold h-0 m-2" />
                        <p className="mr-1 text-gold text-3xl">{tanggal}</p>
                        <p className="mx-2 text-gold border-b border-gold mb-2">{tahun}</p>
                    </div>
                    <div className="my-8 text-center">
                        <div className="bg-white p-1 flex items-center justify-center bg-opacity-10 my-2">
                            <p className="text-gold font-gotu text-xl my-1">{tempatWedding}</p>
                        </div>
                        <div className="bg-white p-1 flex items-center justify-center bg-opacity-10 my-2">
                            <p className="text-gold font-gotu text-xl my-1">{alamatWedding}</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <Button type={'link'} href={maps} className={`bg-gold text-black font-gotu flex items-center px-4 py-2 rounded-full mt-4 ${props.data[0] !== null ? (props.data[0].lat!==null && props.data[0].lng!==null?'hidden':'' ):''}`}>Lihat Lokasi</Button>
                        </div>
                    </div>
                    
                </div>
                <div className={`mt-2 ml-24 w-96 md:w-115 ${props.data[0] !== null ? (props.data[0].lat!==null && props.data[0].lng!==null?'relative':'hidden' ):''}`}>
                        <LeafletMap lat={props.data[0] !== null ? (props.data[0].lat!==null && props.data[0].lng!==null?props.data[0].lat:-6.871461776598065):-6.871461776598065} lng={props.data[0] !== null ?props.data[0].lng:107.57360083862629}/>
                </div>
            </div>

            {/* konten 5 */}
            <div className="konten-1 h-screen relative bg-cover bg-center flex justify-center" style={{ backgroundImage: `url(${img3})` }}>
                <div className="my-12">
                    <div className="my-4">
                        <p className="text-gold font-gotu text-5xl text-center">GALLERY</p>
                        <p className="text-gold font-alata text-lg text-center">{inisialPria} & {inisialWanita} </p>
                    </div>

                    {/* Landscape Frames */}
                    <div className="flex gap-2 justify-center my-12 px-6">
                        {galleryComponents1}
                    </div>
                </div>

            </div>
            <div className="konten-1 h-screen relative bg-cover px-12 bg-center items-center bg-[#050B14] py-9 justify-center" style={{ backgroundImage: `url(${coverImage})` }}>
                <div className="bg-[#050B14] rounded-xl py-9 opacity-80">
                    <p className="text-center text-gold relative z-30 font-gotu font-bold text-4xl">
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

            {/* konten 6 */}
            <div className="konten-1 h-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${imageUrls.length>1?imageUrls[1]:imageUrls[0]})` }}>
                <div className="absolute inset-0 bg-[#050B14] opacity-80 z-0"></div>
                <p className="text-gold text-lg font-gotu items-center z-1 absolute bottom-40">- {inisialPria} & {inisialWanita} -</p>
                <p className="text-gold text-2xl font-alata text-center relative w-1/2 px-10 mb-100">{ucapanWedding}</p>
            </div>

            {/* konten 7 */}
            <div className="konten-1 h-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${img6})` }}>
                <p className="text-gold text-xl font-gotu text-center relative w-1/2 px-10 mb-100 mt-60">“{wedvita}”</p>
            </div>
        </div>
    )
}

export default TemplateWedvita4