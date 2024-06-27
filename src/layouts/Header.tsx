
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { RiCloseLargeLine } from 'react-icons/ri';
import { navLinks, navLinks2 } from '@/utils/dummy'; // Adjust path as per your project structure

function Header() { 
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [nav, setNav] = useState<boolean>(false);

 

  return (
    <header>
      {/* Navbar 1 */}
      <div className="d-flex justify-content-end">
        <div className={`linearBorderRight`}></div>
      </div>
      <nav className="navbar navbar-expand-xl bg-transparent nav1">
        <div className="container-fluid align-items-start">
          <Link href="/" className="navbar-brand pt-0">
              <Image
                src="/images/indexPage/bottomLogo.svg"
                width={194}
                height={51}
                alt="logo"
                className="bottomLogo"
              /> 
          </Link>
          <button
            className="navbar-toggler shadow-none btn-outline-none border-0"
            type="button"
            onClick={() => setNav(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="rightList">
              <div className="d-block">
                <Image
                  src="/images/indexPage/search.svg"
                  width={18}
                  height={18}
                  alt="search"
                  className="searchIcon"
                />
                <input
                  className="form-control shadow-none"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <ul>
                {navLinks2?.map((item, key) => (
                  <li key={key} className="mx-4 mt-1 link">
                    <Image
                      src={item?.imageLink}
                      width={item?.width}
                      height={item?.height}
                      alt="logo"
                    />
                    <span className={key !== 0 ? 'mx-2' : 'mx-1'}>
                      {item?.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Navbar 2 */}
      <nav className="navbar navbar-expand-xl bg-transparent nav2">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent2">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pl-5 ml-5">
              {navLinks?.map((item, key) => (
                <li key={key} className="nav-item routeLinks"> 
                    <Link
                    href={item?.url}
                      className={`nav-link ${
                        item?.url === currentUrl ? 'activeLink' : ''
                      }`}
                      aria-current="page"
                    >
                      {item?.name}
                    </Link>
                  
                </li>
              ))}
            </ul>

            <form className="" role="search">
              <button className="btn" type="button">
                <Image
                  src="/images/indexPage/cart.svg"
                  width={40}
                  height={40}
                  alt="logo"
                />
                <small className="position-absolute notificationBadge translate-middle badge rounded-pill bg-danger">
                  1<span className="visually-hidden"></span>
                </small>
              </button>
              <button className="btn" type="button">
                <Image
                  src="/images/indexPage/wallet.svg"
                  width={40}
                  height={40}
                  alt="logo"
                />
              </button>
              <button className="btn btn-danger login shadow-sm" type="button">
                Login
              </button>
              <button className="btn login bg-muted shadow-sm border-0" type="button">
                Signup
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {nav && (
        <div className="mobileNav d-xl-none">
          <button
            onClick={() => setNav(false)}
            className="btn shadow-none btn-outline-none border-0"
            type="button"
          >
            <RiCloseLargeLine className="text-white" fontSize={25} />
          </button>

          <ul>
            {navLinks?.map((item, key) => (
              <li key={key}>
                <Link href={item?.url} 
                    className={`nav-link ${
                      item?.url === currentUrl ? 'activeLink' : ''
                    }`}
                  >
                    {item?.name} 
                </Link>
              </li>
            ))}
            <li className="r-5">
              <button className="btn btnNavLogBg w-100 shadow" type="button">
                Login
              </button>
            </li>
            <li>
              <button className="btn login w-100 bg-muted shadow border-0" type="button">
                Signup
              </button>
            </li>
          </ul>
        </div>
      )}

      {/* Linear Border */}
      <div className="d-flex justify-content-start linearBorderLeftContainer d-md-block position-relative">
        <div className={`linearBorderLeft`}></div>
      </div>
    </header>
  );
}

export default Header;
