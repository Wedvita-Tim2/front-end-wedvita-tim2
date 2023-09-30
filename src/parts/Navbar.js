import { useEffect, useState } from "react";
import Button from "../elements/Buttons";
import { useRecoilValue } from "recoil";
import { authState } from "../recoils/AuthState";
import { useLocation } from "react-router-dom";


 const Navbar = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const [activePage, setActivePage] = useState('/');
    const auth = useRecoilValue(authState)
    const isLogin = auth.isAuthenticated


    const location = useLocation();
    let isLoginPage = location.pathname === '/login';
    let isRegisterPage = location.pathname === '/register';
    let isAdminPage = location.pathname ==='/adminpanel'

    useEffect(()=>{
        setActivePage(location.pathname)
    },[location])

    const UserAccount = ()=>{
        if(!isLogin){
            return(
                    <Button type={'link'} href={'/login'} className={`${(isLoginPage || isRegisterPage) ? 'hidden' : ''} mx-auto`} isGradient>Login</Button>
                )
        }else{
            const username = auth.dataUser.username.slice(0,1).toUpperCase() + auth.dataUser.username.slice(1)
            return(
                <>
                <Button className={`font-bold text-2xl mx-auto text-center ${activePage === '/myaccount'?'text-light-pink':'text-primary-300'} py-2 px-8 hover:underline`} type={'link'} href={'/myaccount'}>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mt-1 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                        {username}
                    </div>   
                </Button>
                
                </>
            )
        }
    }


    const hamburgerClick =()=>{
        setIsMenuOpen(!isMenuOpen)
    }
    
    useEffect(() => {
        const handleScroll = () => {
          const header = document.querySelector('header');
          const fixNav = header.offsetTop;
    
          if (window.scrollY > fixNav) {
            setIsNavbarFixed(true);
          } else {
            setIsNavbarFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const menuItems = [
        { text: 'Template', href: '/template' },
        { text: 'Portofolio', href: '/portfolio' },
        { text: 'Bantuan', href: '/help' },
      ];

    return (
        <>
        <header className={`${(isLoginPage || isRegisterPage) ?'':'bg-white'} ${isAdminPage?'hidden':''} top-0 left-0 w-full flex items-center z-[100] ${isNavbarFixed && !(isLoginPage||isRegisterPage)?'fixed shadow-md':''}`}>
            <div className="flex item-center justify-between relative w-full ">
                <Button type={'link'} href={'/'} className={'ml-1 mt-8 md:mt-10 md:ml-14'}>
                    <img src="/logo.svg" alt="Logo" className="scale-75 md:scale-100" />
                </Button>
                <div className={`flex items-center`}>
                    <Button  className={`${(isLoginPage || isRegisterPage) ? 'hidden' : 'block'} absolute right-3 mr-9 md:hidden`} type={'button'} onClick={hamburgerClick}>
                       <span className={`w-6 h-1 my-1 block bg-primary-300 duration-300 ease-in-out origin-top-left ${
                                isMenuOpen ? 'rotate-45 ' : ''
                            }`}></span>
                       <span className={`w-6 h-1 my-1 block bg-primary-300 duration-300 ease-in-out ${
                                isMenuOpen ? 'scale-0' : ''
                            }`}></span>
                       <span className={`w-6 h-1 my-1 block bg-primary-300 duration-300 ease-in-out origin-bottom-left ${
                                isMenuOpen ? '-rotate-45 ' : ''
                            }`}></span>
                    </Button>
                    <nav
                        className={`${
                            isMenuOpen ? '' : 'hidden'
                        } ${(isLoginPage || isRegisterPage)? 'hidden' : ''} absolute py-3 z-30 bg-white bg-opacity-95 shadow-lg duration-300 ease-in-out rounded-lg max-w-[250px] w-full right-4 top-full md:block md:bg-transparent md:max-w-full md:rounded-none md:shadow-none md:static md:mb-4 md:left-4 md:ml-14`}
                    >
                        <ul className={`block md:flex md:items-center`}>
                            {menuItems.map((menuItem, index) => (
                                <li className={`${(isLoginPage || isRegisterPage) ? 'hidden' : ''} group md:py-2 ${menuItem.href === activePage ? 'text-light-pink' : 'text-primary-300'} `} key={index}>
                                <Button type={'link'} href={menuItem.href}>
                                    <p className="mt-2 mx-3 font-bold text-lg hover:underline">
                                    {menuItem.text}
                                    </p>
                                </Button>
                                </li>
                            ))}
                            <li className={`group mx-7 flex md:mr-20`}>
                                {UserAccount(false)}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            
        </header>
        <div style={{ height: isNavbarFixed ? '92px' : '0' }}></div>
        </>
      );
 }

 export default Navbar;