import { useLocation } from "react-router-dom";
import Button from "../elements/Buttons";

const Footer = () => {
  const location = useLocation();
  let isShow =
    location.pathname === "/" ||
    location.pathname === "/template" ||
    location.pathname === "/myaccount" ||
    location.pathname === "/order";

  return (
    <footer
      className={`${
        isShow ? "" : "hidden"
      } bg-slate-50 px-1 py-3 md:py-6 md:px-16`}
    >
      <div className="flex item-center justify-between relative w-full mt-6 md:mt-8">
        <div className="w-1/2">
          <Button type={"link"} href={"/"} className={""}>
            <img src="/logo.svg" alt="Logo" className="scale-75 md:scale-100" />
          </Button>
          <p className="text-gray-500 decoration-1 text-xs md:text-lg ml-8">
            Kelompok Wedvita 2B
          </p>
          <p className="text-gray-500 decoration-1 text-xs md:text-lg ml-8">
            Jl. Gegerkalong Hilir, Ciwaruga, Kec. Parongpong, Kabupaten Bandung
            Barat, Jawa Barat 40559
          </p>
          <p className="text-gray-500 decoration-1 text-xs md:text-lg ml-8">
            Politeknik Negeri Bandung
          </p>
        </div>
        <div className="w-1/2 py-6 px-4 md:ml-9">
          <div className="">
            <p className="text-gray-600 decoration-1 text-xs md:text-lg font-bold mb-2">
              Akun
            </p>
            <Button type={"link"} href={"/login"}>
              <p className="text-gray-500 decoration-1 text-xs  text-left mb-1 md:text-md">
                Sign In / Sign Up
              </p>
            </Button>
            <Button type={"link"} href={"/"}>
              <p className="text-gray-500 decoration-1 text-xs text-left mb-1 md:text-md">
                Akun Saya
              </p>
            </Button>
            <Button type={"link"} href={"/"}>
              <p className="text-gray-500 decoration-1 text-xs text-left mb-1 md:text-md">
                Layanan
              </p>
            </Button>
            <div className="mt-6">
              <p className="text-gray-600 decoration-1 text-xs md:text-lg font-bold mb-2">
                Sitemap
              </p>
              <Button type={"link"} href={"/template"}>
                <p className="text-gray-500 decoration-1 text-xs text-left mb-1 md:text-md">
                  Pilih Template
                </p>
              </Button>
              <Button type={"link"} href={"/"}>
                <p className="text-gray-500 decoration-1 text-xs text-left mb-1 md:text-md">
                  Lihat Portofolio
                </p>
              </Button>
              <Button type={"link"} href={"/"}>
                <p className="text-gray-500 decoration-1 text-xs text-left mb-1 md:text-md">
                  Bantuan
                </p>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-1/2 py-6 px-2">
          <div className="">
            <p className="text-gray-600 decoration-1 text-xs font-bold mb-2 md:text-lg">
              Hubungi Kami
            </p>

            <p className="text-gray-500 decoration-1 text-xs text-left mb-1 md:text-md">
              WhatsApp : +62 87654321
            </p>
            <p className="text-gray-500 decoration-1 text-xs text-left mb-1 md:text-md">
              Instagram : @wedvita
            </p>
            <p className="text-gray-500 decoration-1 text-xs text-left mb-1 md:text-md">
              Twitter : @wedvita
            </p>
            <div className="mt-6">
              <p className="text-gray-500 decoration-1 text-xs text-left mb-1 md:text-lg">
                ©2023 Wedvita
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
