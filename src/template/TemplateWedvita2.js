import img1 from "../assets/img/tamplate2/bg-content1.png";
import img2 from "../assets/img/tamplate2/element-content1.png";
import img3 from "../assets/img/tamplate2/bg-content2.png";
import img4 from "../assets/img/tamplate2/content4.png";
import img5 from "../assets/img/tamplate2/bg-content5.png";



const TemplateWedvita2 = ()=>{
    const inisialPria = 'Francois';
    const inisialWanita = 'Korina';
    const namaIbuPria = 'Elle';
    const namaBapaPria = 'Jors';
    const namaOrtuPria = "Bpk. " + namaBapaPria + " & Ibu " + namaIbuPria;
    const namaIbuWanita = 'Elle';
    const namaBapaWanita = 'Jors';
    const namaOrtuWanita = "Bpk. " + namaBapaWanita + " & Ibu " + namaIbuWanita;
    const alamatGedung = 'Jl. Jenderal Sudirman No. 123, Jakarta';
    const buildingName = 'Hotel Grand Ballroom'
    const maps = 'https://maps.app.goo.gl/m3VcPHwk5NfXqMoz5'
    const kata = 'wedding invitation'
    const hari = 'Sunday'
    const tanggal = '27'
    const tahun = '2025'
    const bulan = 'March'
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
                    opacity: 0.2
                    }}
                ></div>
                <div className="bg-gradient-to-r from-HijauGrad to-BiruGrad relative "></div>
            </div>
        </div>
    )
}

export default TemplateWedvita2