
import img1 from "../assets/img/template4/img-1.png";
import img2 from "../assets/img/template4/img-2.png";
import img3 from "../assets/img/template4/img-3.png";
import img4 from "../assets/img/template4/img-4.png";
import img5 from "../assets/img/template4/img-5.png";
import img6 from "../assets/img/template4/img-6.png";



const TemplateWedvita4 = () => {
    const inisialPria = 'Francois';
    const inisialWanita = 'Korina';
    const namaIbuPria = 'Elle';
    const namaBapaPria = 'Jors';
    const Putra = 'Putra Dari';
    const Putri = 'Putri Dari';
    const namaOrtuPria = "Bpk. " + namaBapaPria + " & Ibu " + namaIbuPria;
    const namaIbuWanita = 'Elle';
    const namaBapaWanita = 'Jors';
    const namaOrtuWanita = "Bpk. " + namaBapaWanita + " & Ibu " + namaIbuWanita;
    const alamatGedung = 'Jl. Jenderal Sudirman No. 123, Jakarta';
    const buildingName = 'Hotel Grand Ballroom'
    const maps = 'https://maps.app.goo.gl/m3VcPHwk5NfXqMoz5'
    const kata = 'wedding invitation'
    const kata2 = 'Invite You To our Wedding Celebration'
    const quotes = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    const hari = 'Sunday'
    const tanggal = '27'
    const tahun = '2025'
    const bulan = 'March'
    const wedvita = '“Ciptakan Kenangan Abadi dengan Undangan Eksklusif Wedvita.”'
    const web = 'www.wedvita.com'
    const imageUrls = [];

    return (
        <div>
            {/* konten 1 */}
            <div className="konten-1 h-screen bg-cover bg-center bg-fixed bg-no-repeat relative flex items-center justify-center" style={{ backgroundImage: `url(${img1})` }}>
                <div className="my-8">
                    <p className="text-white text-lg text-center">THE WEDDING OF</p>
                    <p className="text-white text-lg text-center my-4">Zayn & Kimberly </p>
                    <div className="flex items-center">
                        <hr className="flex-grow border-t border-white h-0 m-2 " />
                        <p className="mx-2 text-white ml-4">July</p>
                        <hr className="flex-grow border-t border-white h-0 m-2" />
                    </div>
                    <div className="flex items-center">
                        <p className="mx-2 text-white border-b border-white mb-2">Sunday</p>
                        <hr className="flex-grow border-t border-white h-0 m-2" />
                        <p className="mr-7 text-white text-3xl">10</p>
                        <p className="mx-2 text-white border-b border-white mb-2">2023</p>
                    </div>
                </div>
            </div>

            {/* konten 2 */}
            <div className="konten-1 h-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${img2})` }}>
                <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
                <div className="my-8">
                <p className="text-white text-4xl my-4 font-bold text-center z-10 relative px-12 font-alata">Wedding Invitation</p>
                <p className="text-white text-sm font-bold text-center z-10 relative px-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>

            {/* konten 3 */}
            <div className="konten-1 h-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${img3})` }}>

                <div className="absolute left-1/4 top-1/4">
                    {/* Left photo frame */}
                    <img src="left_photo.jpg" alt="Left Frame" className="w-40 h-40 border-4 border-white" />
                </div>

                <div className="absolute right-1/4 top-1/4">
                    {/* Right photo frame */}
                    <img src="right_photo.jpg" alt="Right Frame" className="w-40 h-40 border-4 border-white" />
                </div>
            </div>


            {/* konten 4 */}
            <div className="konten-1 h-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${img4})` }}>
                <div className="absolute inset-0 bg-[#050B14] opacity-80 z-0"></div>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
            </div>

            {/* konten 5 */}
            <div className="konten-1 h-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${img3})` }}>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
            </div>

            {/* konten 6 */}
            <div className="konten-1 h-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${img5})` }}>
                <div className="absolute inset-0 bg-[#050B14] opacity-80 z-0"></div>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
                <p className="text-white text-4xl font-bold text-center z-10 relative">The Wedding of</p>
            </div>

            {/* konten 7 */}
            <div className="konten-1 h-screen relative bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${img6})` }}>
            </div>
        </div>
    )
}

export default TemplateWedvita4