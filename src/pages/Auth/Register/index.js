import React, { useState, useEffect } from "react";
import Button from "../../../elements/Buttons";
import { InputText } from "../../../elements/Forms";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import AuthImage from "../AuthImage";
import "../Auth.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { authState } from "../../../recoils/AuthState";
import { apiBackend } from "../../../recoils/Api";
import Modal from "../../../component/Modal";

const Register = () => {
  const [text, setText] = useState({
    username: "",
    password: "",
    phone_number: "",
    email: "",
  });
  const [phone, setPhone] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isInputValid, setInputValid] = useState({
    username: true,
    password: true,
    phone_number: true,
    email: true,
    password_confirmation: true,
  });
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isRegisterSucces, setRegisterSucces] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useRecoilState(authState);
  const apiAddress = useRecoilValue(apiBackend);

  const navigate = useNavigate();
  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/");
    } else {
      navigate("/register");
    }
  }, []);

  const [isSmallScreen, setSmallScreen] = useState(false);

  useEffect(() => {
    const changeScreenContent = () => {
      setSmallScreen(window.innerWidth < 768);
    };
    changeScreenContent();

    window.addEventListener("resize", changeScreenContent);

    return () => {
      window.removeEventListener("resize", changeScreenContent);
    };
  }, []);

  useEffect(() => {
    setText((prevText) => ({
      ...prevText,
      phone_number: phone,
    }));
  }, [phone]);

  const handleTextChanged = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
    setInputValid({
      ...isInputValid,
      [name]: value !== "",
    });
  };

  const handleLogin = async () => {
    
    try {
      const response = await fetch(apiAddress + "api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.response !== 200) {
          console.error(data.message);
          setShow(true);
          setRegisterSucces(false);
        } else {
          const updatedAuth = {
            isAuthenticated: true,
            dataUser: data.dataUser,
          };
          setAuth(updatedAuth);

          localStorage.setItem("auth", JSON.stringify(updatedAuth));
          navigate("/");
        }
      } else {
        console.error("Login gagal");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  const handleSignInClick = async () => {
    const isValidation = Object.values(isInputValid).every(
      (isValid) => isValid
    );
    setInputValid({
      username: text.username !== "",
      password: text.password !== "",
      phone_number: text.phone !== "",
      email: text.email !== "",
      password_confirmation: passwordConfirmation !== "",
    });

    setIsPasswordValid(text.password === passwordConfirmation);
    if (isValidation && text.password === passwordConfirmation) {
      try {
        const response = await fetch(apiAddress + "api/registers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(text),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.response !== 200) {
            console.error(data.errors);
            setRegisterSucces(false);
          } else {
            handleLogin();
          }
        } else {
          console.error("Register gagal");
        }
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    }
  };

  const eyePassword = () => {
    if (!isVisible) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    }
  };

  return (
    <div
      className="bg-auth"
      style={{ top: "0", left: "0", overflowY: "auto", overflowX: "hidden" }}
    >
      <div className="grid mt-32 grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center md:mt-2 md:ml-32 md:mr-2">
          <AuthImage />
        </div>
        <div className="flex justify-center">
          <div className="lg:w-96">
            <h1 className=" text-2xl md:text-3xl text-white font-bold text-center">
              Halaman Register
            </h1>

            <InputText
              element={"input"}
              type={"text"}
              value={text.username}
              onChange={handleTextChanged}
              className="block mt-6 w-80 md:w-96 text-lg rounded-md"
              name={"username"}
              placeholder={"Username"}
              isRequired
            />
            {!isInputValid.username && (
              <div className="text-red-500 font-md block">
                *This fill is required
              </div>
            )}

            <PhoneInput
              defaultCountry="id"
              value={text.phone}
              name={"phone"}
              className="mt-6"
              placeholder={"Phone"}
              inputStyle={{
                paddingTop: 23,
                paddingBottom: 23,
                fontSize: 18,
                width: isSmallScreen ? 275 : 339,
              }}
              countrySelectorStyleProps={{
                buttonStyle: {
                  height: 48,
                  width: 44,
                  backgroundColor: "white",
                },
              }}
              onChange={(phone) => {
                setPhone(phone);
              }}
            />

            {!isInputValid.phone_number && (
              <div className="text-red-500 font-md block">
                *This fill is required
              </div>
            )}

            <InputText
              element={"input"}
              type={"email"}
              value={text.email}
              onChange={handleTextChanged}
              className="block mt-6 w-80 md:w-96 text-lg rounded-md"
              name={"email"}
              placeholder={"Email"}
              isRequired
            />
            {!isInputValid.email && (
              <div className="text-red-500 font-md block">
                *This fill is required
              </div>
            )}

            <div className="mt-4 ml-3 w-[280px] md:w-[342px]">
              <p className="text-primary-100 font-light text-sm text-center md:text-right ">
                Password 8 Karakter dan Mengandung Huruf Besar, Huruf Kecil,
                Angka, dan Simbol
              </p>
            </div>
            <div className="flex mt-4">
              <InputText
                element={"input"}
                type={!isVisible ? "password" : "text"}
                value={text.password}
                onChange={handleTextChanged}
                className="w-[280px] md:w-[342px] text-lg rounded-l-md"
                isBasic
                name={"password"}
                placeholder={"Password"}
                isRequired
              />

              <Button
                type={"button"}
                className={
                  "py-1 bg-white h-12 shadow-md border-l-slate-200 rounded-r-md px-2"
                }
                onClick={() => setVisible(!isVisible)}
              >
                {eyePassword()}
              </Button>
            </div>
            {!isInputValid.password && (
              <div className="text-red-500 font-md block">
                *This fill is required
              </div>
            )}

            <div className="flex mt-6">
              <InputText
                element={"input"}
                type={!isVisible ? "password" : "text"}
                value={passwordConfirmation}
                onChange={(pass_conf) =>
                  setPasswordConfirmation(pass_conf.target.value)
                }
                className="w-[280px] md:w-[342px] text-lg"
                name={"password_confirmation"}
                placeholder={"Konfirmasi Password"}
                isRequired
              />

              <Button
                type={"button"}
                className={
                  "py-1 bg-white h-12 shadow-md border-l-slate-200 rounded-r-md px-2"
                }
                onClick={() => setVisible(!isVisible)}
              >
                {eyePassword()}
              </Button>
            </div>
            {!isInputValid.password_confirmation && (
              <div className="text-red-500 font-md block">
                *This fill is required
              </div>
            )}
            {!isPasswordValid && (
              <div className="text-red-500 font-md block">
                *Password and password confirmation don't match
              </div>
            )}

            <div className="flex justify-center mt-10">
              <Button
                type={"button"}
                onClick={handleSignInClick}
                isPrimary
                className="block"
              >
                Sign Up
              </Button>
              <Modal show={show} title={"Registrasi Berhasil"}>
                <div className="flex items-center flex-col gap-5 justify-items-center text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-36 h-36 stroke-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-center text-primary-200">
                    Selamat, registrasi Anda berhasil. Silahkan cek email Anda pada <b>inbox/spam</b> untuk melakukan verifikasi akun. Batas melakukan verifikasi akun adalah <b>30 menit</b>.
                  </p>
                  <Button type={"link"} href={"/"} isPrimary className={"mt-3"}>
                    Kembali Ke Home
                  </Button>
                </div>
              </Modal>
            </div>
            <div className="flex justify-center mt-4 text-md, text-primary-100">
              <p className="text-md mr-2">Already have account ? </p>{" "}
              <Button
                type={"link"}
                href={"/login"}
                className="font-bold hover:text-primary-200 hover:underline"
              >
                Sign In Here
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
