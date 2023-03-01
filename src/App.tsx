import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MenuOutline , BriefcaseOutline ,CubeOutline ,MailUnreadOutline, BarChartOutline, ExtensionPuzzleOutline ,SpeedometerOutline ,MedalOutline,FileTrayFullOutline ,CloudDownloadOutline ,ChevronDownCircleOutline ,Heart ,LocationOutline, CallOutline , MailOutline} from 'react-ionicons'
function App() {
  const [toggle, setToggle] = useState(false)
  const onclickMneu = () =>{
    setToggle((prev)=>!prev)
  }
  const [btnName, setBtnName] = useState("one")
  const OnClickHandlerBtnFqa = (name:string) =>{
    setBtnName(name)
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

      {/*====== hero ======*/}
      <section className="relative bg-white py-16 lg:pt-[100px]">
        <div className="mx-auto max-w-7xl px-8 md:px-6">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-5/12">
              <h1
                className=" text-left text-slate-800 mb-3 text-4xl font-bold leading-snug sm:text-
            [42px] lg:text-[40px] xl:text-[42px] "
              >
                Everything you need to run your online{" "}
                <span className="text-blue-600">business</span>
              </h1>

              <p className="text-left text-slate-500 mb-8 max-w-[480px] text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
                alias voluptate esse blanditiis molestiae repudiandae fugiat
                eius sapiente expedita ut.
              </p>
              <div className='flow-root'>
              <button
                className="w-full rounded-md bg-blue-500 px-8 py-2.5 font-semibold
            text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200
              sm:w-auto float-left"
              >
                Get Started
              </button>
              <button
                className=" mt-4 box-border w-full rounded-md border
              border-blue-500/20 px-8 py-2.5 font-semibold text-blue-500 shadow-md
              shadow-blue-500/10 duration-200 sm:ml-4 sm:mt-0 sm:w-auto float-left"
              >
                Register Now
              </button></div>
              {/** brand */}
              <div className="mt-6 flex flex-wrap gap-4 ">
                <img
                  src={require("./resources/images/brand/brand (1).png")}
                  alt="brand"
                  className="w-32
                cursor-pointer rounded-lg border border-blue-300/20 bg-white
                px-5 py-3 shadow-md shadow-blue-500/5 duration-200
                hover:scale-95 sm:w-36"
                />

                <img
                  src={require("./resources/images/brand/brand (2).png")}
                  alt="brand"
                  className="w-32
                cursor-pointer rounded-lg border border-blue-300/20 bg-white
                px-5 py-3 shadow-md shadow-blue-500/5 duration-200
                hover:scale-95 sm:w-36"
                />

                <img
                  src={require("./resources/images/brand/brand (3).png")}
                  alt="brand"
                  className="w-32
                cursor-pointer rounded-lg border border-blue-300/20 bg-white
                px-5 py-3 shadow-md shadow-blue-500/5 duration-200
                hover:scale-95 sm:w-36"
                />

                <img
                  src={require("./resources/images/brand/brand (4).png")}
                  alt="brand"
                  className="w-32
                cursor-pointer rounded-lg border border-blue-300/20 bg-white
                px-5 py-3 shadow-md shadow-blue-500/5 duration-200
                hover:scale-95 sm:w-36"
                />
              </div>
            </div>

            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src={require("./resources/images/hero.png")}
                    alt="hero section image"
                    className="max-w-full lg:ml-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== END hero ======*/}

      {/*====== feature ======*/}
      <div className="pb-16">
        <div className="mx-auto max-w-7xl px-8 md:px-6">
          {/* heading text*/}
          <div className="mb-5 sm:mb-10">
            <p className="text-left font-medium text-blue-500">Our Features</p>
            <h1 className="text-left text-2xl font-bold text-slate-700 sm:text-3xl">
              Provide Our Features
            </h1>
          </div>
          {/* feature img*/}
          <div className="md:flex md:justify-between md:gap-6 xl:gap-10">
            <div className="mb-5 max-h-[600px] overflow-hidden rounded-lg md:mb-0 md:w-5/12">
              <img
                src={require("./resources/images/features/features.png")}
                alt="feature img "
                className="h-full scale-125 sm:w-full sm:object-cover"
              />
            </div>
            <div className="md:w-7/12">
              <div className="mb-16 flex flex-col">
                <p className="text-left mb-3 text-slate-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quod aliquam quis, nesciunt alias illo totam dicta,
                  officia eum veritatis non dolor, minima illum perferendis
                  facilis. Possimus sit mollitia minima!
                </p>

                <p className="text-left mb-10 text-slate-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nisi, necessitatibus? Labore voluptatibus cupiditate fugit
                  libero magni id laudantium rem distinctio, iste ipsam facilis,
                  eaque illum architecto temporibus repellat! Consectetur, quos.
                </p>

                <button
                  className="w-full rounded-md bg-blue-500 px-8 py-2.5 font-semibold
                text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200
                  md:w-max"
                >
                  Get Started
                </button>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                  <img
                    className="mb-3 w-16"
                    src={require("./resources/images/features/icon (1).png")}
                    alt=""
                  />
                  <h3 className="text-lg font-bold text-slate-600">
                    Web Design
                  </h3>
                  <a href="#" className="text-sm text-blue-500">
                    Learn more
                  </a>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                  <img
                    className="mb-3 w-16"
                    src={require("./resources/images/features/icon (2).png")}
                    alt=""
                  />
                  <h3 className="text-lg font-bold text-slate-600">
                    Automation
                  </h3>
                  <a href="#" className="text-sm text-blue-500">
                    Learn more
                  </a>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl bg-white px-4 py-8 shadow-lg">
                  <img
                    className="mb-3 w-16"
                    src={require("./resources/images/features/icon (3).png")}
                    alt=""
                  />
                  <h3 className="text-lg font-bold text-slate-600">
                    Infographics
                  </h3>
                  <a href="#" className="text-sm text-blue-500">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
