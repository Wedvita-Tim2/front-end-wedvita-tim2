import img1 from "../assets/img/tamplate2/bg-content1.png";
import img2 from "../assets/img/tamplate2/element-content1.png";
import img3 from "../assets/img/tamplate2/bg-content2.png";
import img4 from "../assets/img/tamplate2/content4.png";
import img5 from "../assets/img/tamplate2/bg-content5.png";
import img6 from "../assets/img/tamplate2/border.png";
import img7 from "../assets/img/tamplate2/logo.png";


const TemplateWedvita2 = ()=>{
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
    
    return(
        <div>
            {/* konten 1 */}
            <div className="konten-1"
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
                <div className="kontent1" 
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
                        justifyContent: "flex-end"
                    }}>
                    <p className="text-center text-LightBlue text-[12px] md:tracking-[0.8rem] relative z-30 font-sans" style={{ position: "absolute", top: "50px", right: "490px" }}>{kata}</p>
                    <p className="text-center text-LightBlue text-[80px] relative z-30 font-niconne" style={{ position: "absolute", top: "210px", right: "540px"  }}>{inisialPria}</p>
                    <p className="text-center text-LightBlue text-[50px] relative z-30 font-niconne" style={{ position: "absolute", top: "300px", right: "630px"  }}>&</p>
                    <p className="text-center text-LightBlue text-[80px] relative z-30 font-niconne" style={{ position: "absolute", top: "315px", right: "555px"  }}>{inisialWanita}</p>
                    <p className="text-center text-LightBlue text-[15px] relative z-30 font-sans" style={{ position: "absolute", top: "450px", right: "700px" }}>{hari}</p>
                    <p className="text-center text-LightBlue text-[45px] relative z-30 font-sans" style={{ position: "absolute", top: "435px", right: "630px", fontWeight: "bold" }}>{tanggal}</p>
                    <p className="text-center text-LightBlue text-[15px] relative z-30 font-sans" style={{ position: "absolute", top: "450px", right: "572px" }}>{bulan}</p>
                    <p className="text-center text-LightBlue text-[15px] relative z-30 font-sans" style={{ position: "absolute", top: "468px", right: "700px" }}>{tahun}</p>
                    <p className="text-center text-LightBlue text-[15px] relative z-30 font-sans" style={{ position: "absolute", top: "468px", right: "582px" }}>{tahun}</p>
                    <p className="text-center text-LightBlue text-[10px] md:tracking-[0.8rem] relative z-30 font-sans" style={{ position: "absolute", top: "570px", right: "315px" }}>{kata2}</p>
                </div> 
            </div>
            <div>
                {/* konten2 */}
                <div className="grid grid-flow-row auto-rows-max relative h-auto "
                    style={{
                    backgroundImage: `url(${img3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    width: "100vw",
                    position: "relative",
                    opacity: 1
                    }}
                ><div className="bg-gradient-to-r from-HijauGrad to-BiruGrad relative px-44 pt-[150px]"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    width: "100vw",
                    position: "relative",
                    zIndex: 2,
                    opacity: 0.9
                    }}>
                        <p className="text-center text-white text-[80px] relative z-30 font-niconne" style={{ display:"block" }}>Lorem ipsum</p>
                        <p className="text-center text-white text-[18px] relative z-30 font-sans mx-auto mt-10" style={{ display: "block" }}>{quotes}</p>
                    </div>
            </div>
            </div>
            <div>
                {/* konten 3 */}
                <div className="bg-gradient-to-r from-HijauGrad2 to-BiruGrad relative"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    width: "100vw",
                    position: "relative",
                    }}>
                <div className="kontent3" 
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
                        justifyContent: "flex-end"
                    }}>
                <div className="kontent1" 
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
                        justifyContent: "flex-end"
                    }}></div>
                </div>
                <p className="text-center text-white text-[80px] relative z-30 font-niconne" style={{ position: "absolute", top: "210px", right: "850px"  }}>{inisialPria}</p>
                <p className="text-center text-white text-[80px] relative z-30 font-niconne" style={{ position: "absolute", top: "210px", right: "200px"  }}>{inisialWanita}</p>
                <p className="text-center text-white text-[23px] relative z-30 font-sans" style={{ position: "absolute", top: "320px", right: "1000px" }}>{Putra}</p>
                <p className="text-center text-white text-[30px] relative z-30 font-niconne" style={{ position: "absolute", top: "365px", right: "870px" }}>{namaOrtuPria}</p>
                <p className="text-center text-white text-[23px] relative z-30 font-sans" style={{ position: "absolute", top: "320px", right: "200px" }}>{Putri}</p>
                <p className="text-center text-white text-[30px] relative z-30 font-niconne" style={{ position: "absolute", top: "365px", right: "200px" }}>{namaOrtuWanita}</p>
                </div>
            </div>

            {/* konten 4 */}
            <div className="grid grid-cols-1 md:grid-cols-6 bg-BiruBg">
            <div className="md:col-span-4 relative">
                <p className="text-center text-white text-[50px] relative z-30 font-niconne"style={{ position: "absolute", top: "120px", right: "290px" }}>Marriage Contract</p>
                <div className="kotak1" style={{position: "absolute", bottom: "150px", right: "237px", width: "450px", height: "230px", background: "linear-gradient(to right, #8AE5F1, #719FF6)", borderRadius: "20px"}}>
                <div className="kotak2" style={{position: "absolute", bottom: "120px", right: "50px", width: "350px", height: "40px", background: "white", borderRadius: "10px"}}>
                    <p className="text-center text-BiruBg text-[15px] relative z-30 font-sans" style={{ position: "absolute", bottom: "10px", right: "50px" }}>{alamatGedung}</p>
                </div>
                <div className="kotak3" style={{position: "absolute", bottom: "65px", right: "50px", width: "350px", height: "40px", background: "white", borderRadius: "10px"}}>
                    <p className="text-center text-BiruBg text-[15px] relative z-30 font-sans" style={{ position: "absolute", bottom: "10px", right: "100px" }}>{buildingName}</p>
                </div>
                <div className="kotak4" style={{position: "absolute", bottom: "200px", right: "90px", width: "267px", height: "60px", background: "linear-gradient(to right, #8AE5F1, #719FF6)", borderRadius: "30px"}}>
                    <p className="text-center text-white text-[15px] relative z-30 font-sans" style={{ position: "absolute", bottom: "30px", right: "170px" }}>{hari}</p>
                    <p className="text-center text-white text-[15px] relative z-30 font-sans" style={{ position: "absolute", bottom: "11px", right: "172px" }}>{tahun}</p>
                    <p className="text-center text-white text-[45px] relative z-30 font-sans" style={{ position: "absolute", bottom: "0px", right: "105px", fontWeight: "bold" }}>{tanggal}</p>
                    <p className="text-center text-white text-[15px] relative z-30 font-sans" style={{ position: "absolute", bottom: "30px", right: "55px" }}>{bulan}</p>
                    <p className="text-center text-white text-[15px] relative z-30 font-sans" style={{ position: "absolute", bottom: "11px", right: "65px" }}>{tahun}</p>
                </div>
                </div>

            {/* harusnya button */}
            <div className="kotak4" style={{position: "absolute", bottom: "130px", right: "380px", width: "150px", height: "50px", background: "linear-gradient(to right, #8AE5F1, #719FF6)", borderRadius: "30px"}}>
                <p className="text-center text-white text-[23px] relative z-30 font-niconne"style={{ position: "absolute", top: "10px", right: "20px" }}>Lihat Lokasi</p>
            </div>

            </div>
            <div className="md:col-span-2">
                <img src={img4} alt="Foto" className="w-full h-auto" />
            </div>
            </div>

        <div>
            {/* konten 5 */}
            <div className="grid grid-flow-row auto-rows-max relative h-auto "
                    style={{
                    backgroundImage: `url(${img5})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    width: "100vw",
                    position: "relative",
                    opacity: 1
                    }}
                ><div className="bg-gradient-to-r from-HijauGrad3 to-BiruGrad3 relative px-44 pt-[200px]"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    width: "100vw",
                    position: "relative",
                    zIndex: 2,
                    opacity: 0.85
                    }}>
                        <p className="text-center text-white text-[80px] relative z-30 font-niconne" style={{ display:"block" }}>QUOTES</p>
                        <p className="text-center text-white text-[18px] relative z-30 font-sans mx-auto mt-5" style={{ display: "block" }}>{quotes}</p>
                    </div>
            </div> 
            </div>

            <div>
                {/* konten 6 (gallery) */}
            </div>
            
            <div>
                {/* konten 7 */}
                <div className="bg-gradient-to-r from-HijauGrad3 to-BiruGrad3 relative"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    width: "100vw",
                    position: "relative",
                    }}>

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
                        style={{
                        position: "absolute",
                        top: "1px",
                        left: "420px",
                        }}
                    />
                    </div>
                    <p className="text-center text-white text-[20px] relative z-30 font-sans" style={{ position: "absolute", top: "350px", left: "400px" }}>{wedvita}</p>
                    <p className="text-center text-white text-[18px] relative z-30 font-sans" style={{ position: "absolute", top: "380px", left: "610px" }}>{web}</p>
                </div>
                
            </div>

        </div>
    )
}

export default TemplateWedvita2