import { Link as LinkScroll } from "react-scroll";
import NavLink from "../components/NavLink";
import { useState } from "react";
import clsx from "clsx";
import { useEffect } from "react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(()=>{
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  const handleSectionSelect = () => {
    setIsOpen(false);
  }

  const handleOpen = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className={clsx("fixed left-0 top-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4", hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]")}>
      <div className="container flex h-14 items-center max-lg:px-5">
        <a href="/" className="z-2 flex-1 cursor-pointer lg:hidden">
          <img
            width={115}
            height={55}
            src="/images/xora.svg"
            alt="xora's logo"
          />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen
              ? "max-lg:opacity-100"
              : "max-lg:pointer-events-none",
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:min-h-screen max-lg:flex-col max-lg:overflow-hidden max-lg:p-6 max-md:px-4 sidebar-before">
            <nav className="max-lg:realtive max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink onClick={handleSectionSelect} title={"características"} />
                  <div className="dot" />
                  <NavLink title={"precios"} />
                </li>
                <li className="nav-logo">
                  <LinkScroll to="hero"
                    offset={-100}
                    spy
                    smooth
                    className={clsx('max-lg:hidden transition-transform duration-500 cursor-pointer')}
                  >
                    <img
                      width={160}
                      height={55}
                      src="/images/xora.svg"
                      alt="xora's logo"
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title={"faq"} />
                  <div className="dot" />
                  <NavLink title={"descargar"} />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img 
                src="/images/bg-outlines.svg"
                width={960}
                height={380} 
                className="relative z-2"
                alt="outline" 
              />
              <img 
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380} 
                className="absolute inset-0 mix-blend-soft-light opacity-5"
                alt="outline" 
              />
            </div>
          </div>
        </div>
        <button
          className="z-2 flex size-10 items-center justify-center rounded-full border-2 border-s4/25 lg:hidden"
          onClick={handleOpen}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="menu icon"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
