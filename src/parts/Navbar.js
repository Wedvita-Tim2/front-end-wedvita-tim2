import { useEffect, useState } from "react";
import Button from "../elements/Buttons";
import { useRecoilValue } from "recoil";
import { authState } from "../recoils/AuthState";


 const Navbar = ()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const auth = useRecoilValue(authState)
    const isLogin = auth.isAuthenticated

    const handleLogout = () => {
        localStorage.removeItem("auth");
        window.location.href = "/";
      };

    const UserAccount = ()=>{
        if(!isLogin){
            return(
                    <Button type={'link'} href={'/login'} isGradient>Sign In</Button>
                )
        }else{
            const username = auth.dataUser.username.slice(0,1).toUpperCase() + auth.dataUser.username.slice(1)
            return(
                <>
                <Button className="font-bold text-2xl text-center text-primary-300 py-2 px-8 hover:underline" type={'button'}>
                    {username}
                </Button>
                <Button type={'button'} onClick={handleLogout} isGradient>Log Out</Button>
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
        <header className={`bg-transparent top-0 left-0 w-full flex items-center z-40 ${isNavbarFixed?'fixed bg-opacity-80 shadow-md backdrop-blur-sm':''}`}>
            <div className="flex item-center justify-between relative w-full ">
                <Button type={'link'} href={'/'} className={'ml-8 mt-8 md:mt-10 md:ml-14'}>
                    <img src="/logo.svg" alt="Logo" />
                </Button>
                <div className="flex items-center">
                    <Button  className="block absolute right-4 mr-9 md:hidden" type={'button'} onClick={hamburgerClick}>
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
                        } absolute py-3 z-30 bg-white bg-opacity-95 shadow-lg duration-300 ease-in-out rounded-lg max-w-[250px] w-full right-4 top-full md:block md:bg-transparent md:max-w-full md:rounded-none md:shadow-none md:static md:mb-4 md:left-4 md:ml-14`}
                    >
                        <ul className="block md:flex md:items-center">
                            {menuItems.map((menuItem, index) => (
                                <li className="group md:py-2" key={index}>
                                <Button type={'link'} href={menuItem.href}>
                                    <p className="mt-2 ml-6 font-bold text-primary-300 text-lg hover:underline">
                                    {menuItem.text}
                                    </p>
                                </Button>
                                </li>
                            ))}
                            <li className="group ml-20 my-4 md:mt-4 md:mx-20 md:py-2">
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