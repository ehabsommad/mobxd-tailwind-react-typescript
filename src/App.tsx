import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MenuOutline , BriefcaseOutline ,CubeOutline ,MailUnreadOutline, BarChartOutline, ExtensionPuzzleOutline ,SpeedometerOutline ,MedalOutline,FileTrayFullOutline ,CloudDownloadOutline ,ChevronDownCircleOutline ,Heart ,LocationOutline, CallOutline , MailOutline} from 'react-ionicons'
function App() {
  const [toggle, setToggle] = useState(false)
  const onclickMneu = () =>{
    setToggle((prev)=>!prev)
  }
  return (
    <div className="App">
      {/*====== header ======*/}
      <header className=" sticky left-0 top-0 z-50 bg-white/90 w-full backdrop-blur">
        <div className="mx-auto h-[90px] max-w-7xl px-8 md:px-6">
          <div
            className="relative flex h-full items-center
          justify-between border-b border-slate-500/10"
          >
            {/*Logo*/}
            <div className="w-[15rem] max-w-full">
              <a href="#">
                <img
                  src={require("./resources/images/logo.png")}
                  alt="logo"
                  className="w-full"
                />
              </a>
            </div>

            {/*menu*/}
            <div className="flex w-full items-center justify-between">
              <nav
                className={`absolute right-0 top-[90px] w-full max-w-[350px] rounded-lg border border-blue-200 bg-white py-5 px-6 shadow-lg shadow-blue-400/5 transition-all lg:static lg:block lg:max-w-full lg:border-none lg:shadow-none lg:bg-transparent lg:px-0 lg:py-0 ${
                  !toggle && "hidden"
                }`}
              >
                <ul
                  className={`flex flex-col justify-center gap-8 lg:flex-row ${
                    !toggle && "hidden"
                  } `}
                >
                  <li>
                    <a
                      href="#"
                      className="text-lg font-medium text-slate-700 duration-200 hover:text-blue-500 lg:text-base"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-lg font-medium text-slate-700 duration-200 hover:text-blue-500 lg:text-base"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-lg font-medium text-slate-700 duration-200 hover:text-blue-500 lg:text-base"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-lg font-medium text-slate-700 duration-200 hover:text-blue-500 lg:text-base"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-lg font-medium text-slate-700 duration-200 hover:text-blue-500 lg:text-base"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-lg font-medium text-slate-700 duration-200 hover:text-blue-500 lg:text-base"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/**menu Button */}
            <div className="flex">
              <a
                href="#"
                className="mr-10 hidden rounded-md bg-blue-500 px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 duration-200 hover:bg-blue-600 sm:block lg:mr-0"
              >
                Register
              </a>

              <button className="block lg:hidden" onClick={onclickMneu}>
                <div className="text-blue-500">
                  <MenuOutline
                    color={"currentColor"}
                    height="36px"
                    width="36px"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/*====== END header ======*/}


    </div>
  );
}

export default App;
