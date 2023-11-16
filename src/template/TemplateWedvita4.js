
import img1 from "../assets/img/template4/img-1.png";
import img2 from "../assets/img/template4/img-2.png";
import img3 from "../assets/img/template4/img-3.png";
import img4 from "../assets/img/template4/img-4.png";
import img5 from "../assets/img/template4/img-5.png";
import img6 from "../assets/img/template4/img-6.png";



const TemplateWedvita4 = () => {
    const inisialPria = 'Zayn';
    const inisialWanita = 'Kimberly';
    const namaIbuPria = 'Lyn';
    const namaBapaPria = 'Jhon';
    const namaIbuWanita = 'Elly';
    const namaBapaWanita = 'Kim';
    const alamatWedding = 'JL. SETIABUDI BANDUNG';
    const tempatWedding = 'GH UNIVERSAL'
    const ucapanWedding = '"Hal-hal yang terbaik dan terindah di dunia ini tidak dapat dilihat atau bahkan didengar, tetapi mereka harus dirasakan dengan hati"'
    const quotes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    const hari = 'Sunday'
    const tanggal = '10'
    const tahun = '2023'
    const bulan = 'July'
    const wedvita = '“Ciptakan Kenangan Abadi dengan Undangan Eksklusif Wedvita.”'
    const imageUrls = [];

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
            <div className="konten-1 h-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${img2})` }}>
                <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
                <div className="px-40">
                    <div className="my-8">
                        <p className="text-gold text-5xl my-4 font-bold text-center z-10 relative px-12 font-gotu font-bold">Wedding Invitation</p>
                        <p className="text-gold text-xl text-center z-10 relative px-10">{quotes}</p>
                    </div>
                </div>
            </div>

            {/* konten 3 */}
            <div className="konten-1 h-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${img3})` }}>

                <div className="absolute left-40 top-1/4">
                    {/* Left photo frame */}
                    <img src="left_photo.jpg" alt="Left Frame" className="w-72 h-72 border-4 border-white" />
                </div>
                <div>
                    <div className="my-14 mx-3">
                        {/* Text between frames */}
                        <p className="text-2xl font-thin font-gotu text-4xl text-gold">{inisialPria}</p>
                        <p className="text-2xl font-thin text-sm text-gold">Putra Dari</p>
                        <p className="text-2xl font-thin text-sm text-gold">Bpk {namaBapaPria} & Ibu {namaIbuPria}</p>
                    </div>
                    <div>
                        <hr className="flex-grow border-t-4 border-gold h-5 m-8 " />
                    </div>
                    <div className="my-16 text-right ml-36">
                        {/* Text between frames */}
                        <p className="text-2xl font-thin font-gotu text-4xl text-gold">{inisialWanita}</p>
                        <p className="text-2xl font-thin text-sm text-gold">Putri Dari</p>
                        <p className="text-2xl font-thin text-sm text-gold">Bpk {namaBapaWanita} & Ibu {namaIbuWanita}</p>
                    </div>

                </div>


                <div className="absolute right-40 top-1/4">
                    {/* Right photo frame */}
                    <img src="right_photo.jpg" alt="Right Frame" className="w-72 h-72 border-4 border-white" />
                </div>

            </div>


            {/* konten 4 */}
            <div className="konten-1 h-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${img4})` }}>
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
                        <div className="bg-white p-1 inline-block flex items-center justify-center bg-opacity-10 my-2">
                            <p className="text-gold font-gotu text-xl my-1">{tempatWedding}</p>
                        </div>
                        <div className="bg-white p-1 inline-block flex items-center justify-center bg-opacity-10 my-2">
                            <p className="text-gold font-gotu text-xl my-1">{alamatWedding}</p>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-gold text-black font-gotu flex items-center px-4 py-2 rounded-full mt-4">Lihat Lokasi</button>
                        </div>
                    </div>
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
                    <div className="flex justify-center my-12">
                        <div className="w-1/2 pl-4">
                            <img src="landscape_photo_2.jpg" alt="Landscape Frame 2" className="w-full h-[250px] border-4 border-white" />
                        </div>
                        <div className="w-1/2 pl-4">
                            <img src="landscape_photo_2.jpg" alt="Landscape Frame 2" className="w-[325px] h-[250px] border-4 border-white" />
                        </div>
                        <div className="w-1/2 pl-4">
                            <img src="landscape_photo_2.jpg" alt="Landscape Frame 2" className="w-full h-[250px] border-4 border-white" />
                        </div>
                        <div className="w-1/2 pl-4">
                            <img src="landscape_photo_2.jpg" alt="Landscape Frame 2" className="w-[325px] h-[250px] border-4 border-white" />
                        </div>
                    </div>
                </div>

            </div>

            {/* konten 6 */}
            <div className="konten-1 h-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${img5})` }}>
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