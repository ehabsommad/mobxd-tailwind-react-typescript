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
    console.log(name)
    setBtnName(prev=> prev == name?'':name)
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
                className={`absolute right-0 top-[90px] w-full max-w-[350px] rounded-lg border
                border-blue-200 bg-white py-5 px-6 shadow-lg shadow-blue-400/5 
                transition-all lg:static lg:block lg:max-w-full lg:border-none lg:shadow-none 
                lg:bg-transparent lg:px-0 lg:py-0 ${
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
      {/*====== END feature ======*/}

      {/*====== about ======*/}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-8 md:px-6">
          <div className="md:flex md:justify-between md:gap-6">
            <div className="md:w-6/12">
              {/* heading text*/}
              <div className="mb-5 sm:mb-10">
                <p className="text-left font-medium text-blue-500">About Us</p>
                <h1 className="text-left text-2xl font-bold text-slate-700 sm:text-3xl">
                  Creative Marketing agency
                </h1>
              </div>
              <p className="text-left text-slate-500 mb-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat praesentium sit illo libero fugiat magnam cumque
                laborum commodi quidem ratione!
              </p>
              <ul>
                <li className="mb-6 flex items-center">
                  <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                    <div className="text-white">
                      <BriefcaseOutline
                        color={"currentColor"}
                      />
                    </div>
                  </div>
                  <p className="text-left ml-4 max-w-md font-medium text-slate-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
                <li className="mb-6 flex items-center">
                  <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                    <div className="text-white">
                      <CubeOutline
                        color={"currentColor"}
                      />
                    </div>
                  </div>
                  <p className="text-left ml-4 max-w-md font-medium text-slate-600">
                    Omnis unde nam quia harum voluptatum itaque iste nostrum
                    amet vero.
                  </p>
                </li>

                <li className="mb-6 flex items-center">
                  <div className="flex h-[35px] w-[35px] min-w-[35px] items-center justify-center rounded-full bg-blue-500 text-white">
                    <div className="text-white">
                      <MailUnreadOutline
                        color={"currentColor"}
                      />
                    </div>
                  </div>
                  <p className="text-left ml-4 max-w-md font-medium text-slate-600">
                    Id quos et quidem perspiciatis similique! Rerum, natus
                    temporibus.
                  </p>
                </li>
              </ul>
              <div className='flow-root'>
              <button
                className="w-full rounded-md bg-blue-500 px-8 py-2.5 font-semibold
            text-white shadow-md shadow-blue-500/20 hover:bg-blue-600 duration-200
              md:w-max float-left"
              >
                Get Started
              </button></div>
            </div>
            {/* about img*/}
            <div className="mt-8 flex justify-center md:mt-0 md:w-5/12">
              <img
                src={require("./resources/images/about.png")}
                alt="about img"
                className="max-h-[500px] md:max-h-max"
              />
            </div>
          </div>
        </div>
      </section>
      {/*====== END about ======*/}

      {/*====== service ======*/}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-8 md:px-6">
          {/* heading text*/}
          <div className="mb-10 text-center">
            <span className="font-medium text-blue-500"> Our Services</span>
            <h1 className="text-2xl font-bold text-slate-700 sm:text-3xl">
              Provide Awesome Services
            </h1>
            <p className="mx-auto max-w-2 mt-2 text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
              veritatis itaque repellat quidem voluptas. Voluptatum.
            </p>
          </div>

          {/* box wrapper*/}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:gap-8">
            <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
              <div className="text-blue-500 text-[55px] duration-200 group-hover:text-white">
                <BarChartOutline
                  color={"currentColor"}
                  height="35px"
                  width="35px"
                />
              </div>
              <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                Crafted for Startups
              </h4>
              <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                accusamus nihil veritatis ad. Odit, veritatis!
              </p>
            </div>

            <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 bg-blue-500">
              <div className=" text-[55px] duration-200 text-white">
                <ExtensionPuzzleOutline
                  color={"currentColor"}
                  height="35px"
                  width="35px"
                />
              </div>
              <h4 className="mt-3 mb-1 text-[17px] font-semibold  duration-200 text-white">
                Fully Customizable
              </h4>
              <p className="text-center text-sm  duration-200 text-blue-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                accusamus nihil veritatis ad. Odit, veritatis!
              </p>
            </div>

            <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
              <div className="text-blue-500 text-[55px] duration-200 group-hover:text-white">
                <SpeedometerOutline
                  color={"currentColor"}
                  height="35px"
                  width="35px"
                />
              </div>
              <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                Speed Optimized
              </h4>
              <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                accusamus nihil veritatis ad. Odit, veritatis!
              </p>
            </div>

            <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
              <div className="text-blue-500 text-[55px] duration-200 group-hover:text-white">
                <MedalOutline
                  color={"currentColor"}
                  height="35px"
                  width="35px"
                />
              </div>
              <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                High-quality Design
              </h4>
              <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                accusamus nihil veritatis ad. Odit, veritatis!
              </p>
            </div>

            <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
              <div className="text-blue-500 text-[55px] duration-200 group-hover:text-white">
                <FileTrayFullOutline
                  color={"currentColor"}
                  height="35px"
                  width="35px"
                />
              </div>
              <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                All Essential Sections
              </h4>
              <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                accusamus nihil veritatis ad. Odit, veritatis!
              </p>
            </div>

            <div className="group flex cursor-pointer flex-col items-center rounded-xl border border-blue-500/10 bg-white px-5 py-8 shadow-lg shadow-blue-300/10 duration-200 hover:bg-blue-500">
              <div className="text-blue-500 text-[55px] duration-200 group-hover:text-white">
                <CloudDownloadOutline
                  color={"currentColor"}
                  height="35px"
                  width="35px"
                />
              </div>
              <h4 className="mt-3 mb-1 text-[17px] font-semibold text-slate-600 duration-200 group-hover:text-white">
                Regular Updates
              </h4>
              <p className="text-center text-sm text-slate-500 duration-200 group-hover:text-blue-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                accusamus nihil veritatis ad. Odit, veritatis!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*====== END service ======*/}

      {/*====== FAQ ======*/}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-8 md:px-6">
          {/* heading text*/}
          <div className="mb-5 sm:mb-10">
            <p className=" text-left font-medium text-blue-500">Our FAQ</p>
            <h1 className="text-left text-2xl font-bold text-slate-700 sm:text-3xl">
              Frequently Asked Questions
            </h1>
            {/* wapper*/}
            <div className="md:flex md:justify-between md:gap-6">
              <div className="mb-8 flex justify-center md:mb-0 md:w-5/12">
                <img
                  src={require("./resources/images/faq.png")}
                  alt="faq images"
                  className="max-h-[500px] md:max-h-max"
                />
              </div>
              <div className="md:w-6/12">
                <div className="">
                  <ul>
                    <li className="relative mb-5">
                      <button
                        type="button"
                        className="w-full rounded-lg bg-blue-50 px-8 py-6 text-left"
                        onClick={()=>OnClickHandlerBtnFqa("one")}
                      >
                        <div className=" flex items-center justify-between">
                          <h4 className="font-medium text-slate-600">
                            Lorem ipsum dolor sit, amet consectetur?
                          </h4>
                          <div className="w-8 text-lg text-blue-500">
                            <ChevronDownCircleOutline
                              color={"#00000"}
                              height="35px"
                              width="35px"
                            />
                          </div>
                        </div>
                      </button>
                      {btnName === "one" &&
                      <div className={`relative  overflow-hidden rounded-b-lg bg-blue-50/30 transition-all duration-500`}>
                      <div className="p-6">
                        <p className="text-slate-500 text-left">
                          ipsum! Assumenda, dolorem nihil. Commodi, qui?
                          Officiis provident, cumque perspiciatis magni
                          commodi rem nihil,
                        </p>
                      </div>
                    </div>}
                      
                    </li>

                    <li className="relative mb-5">
                      <button 
                        onClick={()=>OnClickHandlerBtnFqa('two')}
                        type="button"
                        className="w-full rounded-lg bg-blue-50 px-8 py-6 text-left"
                      >
                        <div className=" flex items-center justify-between">
                          <h4 className="font-medium text-slate-600">
                            Lorem ipsum dolor sit, amet consectetur?
                          </h4>
                          <div className="w-8 text-lg text-blue-500">
                            <ChevronDownCircleOutline
                              color={"#00000"}
                              height="35px"
                              width="35px"
                            />
                          </div>
                        </div>
                      </button>
                      {btnName === "two" &&
                      <div className={`relative overflow-hidden rounded-b-lg bg-blue-50/30 transition-all duration-500`}>
                        <div className="p-6">
                          <p className="text-slate-500 text-left">
                            ipsum! Assumenda, dolorem nihil. Commodi, qui?
                            Officiis provident, cumque perspiciatis magni
                            commodi rem nihil,
                          </p>
                        </div>
                      </div>}
                      
                    </li>

                    <li className="relative mb-5">
                      <button
                        onClick={()=>OnClickHandlerBtnFqa('three')}
                        type="button"
                        className="w-full rounded-lg bg-blue-50 px-8 py-6 text-left"
                      >
                        <div className=" flex items-center justify-between">
                          <h4 className="font-medium text-slate-600">
                            Lorem ipsum dolor sit, amet consectetur?
                          </h4>
                          <div className="w-8 text-lg text-blue-500">
                            <ChevronDownCircleOutline
                              color={"#00000"}
                              height="35px"
                              width="35px"
                            />
                          </div>
                        </div>
                      </button>
                      {btnName === 'three' &&
                      <div className="relative  overflow-hidden rounded-b-lg bg-blue-50/30 transition-all duration-500">
                        <div className="p-6">
                          <p className="text-slate-500 text-left">
                            ipsum! Assumenda, dolorem nihil. Commodi, qui?
                            Officiis provident, cumque perspiciatis magni
                            commodi rem nihil,
                          </p>
                        </div>
                      </div>}
                    </li>

                    <li className="relative mb-5">
                      <button
                        onClick={()=>OnClickHandlerBtnFqa('four')}
                        type="button"
                        className="w-full rounded-lg bg-blue-50 px-8 py-6 text-left"
                      >
                        <div className=" flex items-center justify-between">
                          <h4 className="font-medium text-slate-600">
                            Lorem ipsum dolor sit, amet consectetur?
                          </h4>
                          <div className="w-8 text-lg text-blue-500">
                            <ChevronDownCircleOutline
                              color={"#00000"}
                              height="35px"
                              width="35px"
                            />
                          </div>
                        </div>
                      </button>
                      {btnName === 'four' &&
                      <div className="relative  overflow-hidden rounded-b-lg bg-blue-50/30 transition-all duration-500">
                        <div className="p-6">
                          <p className="text-slate-500 text-left">
                            ipsum! Assumenda, dolorem nihil. Commodi, qui?
                            Officiis provident, cumque perspiciatis magni
                            commodi rem nihil,
                          </p>
                        </div>
                      </div>}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== END FAQ ======*/}

      {/*====== Portfolio ======*/}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-8 md:px-6">
          {/* heading text*/}
          <div className="mb-10 text-center">
            <p className=" font-medium text-blue-500">Our Portfolio</p>
            <h1 className=" text-2xl font-bold text-slate-700 sm:text-3xl">
              Our Recent Works
            </h1>
            <p className=" mx-auto max-w-2 mt-2 text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur deleniti sit dolor numquam non. Et.
            </p>
          </div>
          {/* wrapper*/}
          <div className="flex flex-col gap-5">
            {/** col-1 */}
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
              <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
                <img
                  src={require("./resources/images/portfolio/p-1.png")}
                  alt="portfolio img"
                  className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
                />
                <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                  <p className="text-sm font-semibold text-white">
                    Type Your portfolio details{" "}
                    <span className="text-xs text-slate-300 block">
                      12 August 2025
                    </span>
                  </p>
                  <div className="rounded-full bg-white p-1.5 text-lg text-blue-500 md hydrated">
                    <Heart color={"currentColor"} height="35px" width="35px" />
                  </div>
                </div>
              </div>
              <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
                <img
                  src={require("./resources/images/portfolio/p-2.png")}
                  alt="portfolio img"
                  className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
                />
                <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                  <p className="text-sm font-semibold text-white">
                    Type Your portfolio details{" "}
                    <span className="text-xs text-slate-300 block">
                      12 August 2025
                    </span>
                  </p>
                  <div className="rounded-full bg-white p-1.5 text-lg text-blue-500 md hydrated">
                    <Heart color={"currentColor"} height="35px" width="35px" />
                  </div>
                </div>
              </div>
              <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52 sm:col-span-2">
                <img
                  src={require("./resources/images/portfolio/p-3.png")}
                  alt="portfolio img"
                  className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
                />
                <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                  <p className="text-sm font-semibold text-white">
                    Type Your portfolio details{" "}
                    <span className="text-xs text-slate-300 block">
                      12 August 2025
                    </span>
                  </p>
                  <div className="rounded-full bg-white p-1.5 text-lg text-blue-500 md hydrated">
                    <Heart color={"currentColor"} height="35px" width="35px" />
                  </div>
                </div>
              </div>
            </div>
            {/*end col-1*/}

            {/** col-2 */}
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52 md:col-span-2">
                <img
                  src={require("./resources/images/portfolio/p-4.png")}
                  alt="portfolio img"
                  className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
                />
                <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                  <p className="text-sm font-semibold text-white">
                    Type Your portfolio details{" "}
                    <span className="text-xs text-slate-300 block">
                      12 August 2025
                    </span>
                  </p>
                  <div className="rounded-full bg-white p-1.5 text-lg text-blue-500 md hydrated">
                    <Heart color={"currentColor"} height="35px" width="35px" />
                  </div>
                </div>
              </div>
              <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
                <img
                  src={require("./resources/images/portfolio/p-5.png")}
                  alt="portfolio img"
                  className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
                />
                <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                  <p className="text-sm font-semibold text-white">
                    Type Your portfolio details{" "}
                    <span className="text-xs text-slate-300 block">
                      12 August 2025
                    </span>
                  </p>
                  <div className="rounded-full bg-white p-1.5 text-lg text-blue-500 md hydrated">
                    <Heart color={"currentColor"} height="35px" width="35px" />
                  </div>
                </div>
              </div>
            </div>
            {/*end col-2*/}

            {/** col-3 */}
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
              <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
                <img
                  src={require("./resources/images/portfolio/p-6.png")}
                  alt="portfolio img"
                  className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
                />
                <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                  <p className="text-sm font-semibold text-white">
                    Type Your portfolio details{" "}
                    <span className="text-xs text-slate-300 block">
                      12 August 2025
                    </span>
                  </p>
                  <div className="rounded-full bg-white p-1.5 text-lg text-blue-500 md hydrated">
                    <Heart color={"currentColor"} height="35px" width="35px" />
                  </div>
                </div>
              </div>
              <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
                <img
                  src={require("./resources/images/portfolio/p-7.png")}
                  alt="portfolio img"
                  className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
                />
                <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                  <p className="text-sm font-semibold text-white">
                    Type Your portfolio details{" "}
                    <span className="text-xs text-slate-300 block">
                      12 August 2025
                    </span>
                  </p>
                  <div className="rounded-full bg-white p-1.5 text-lg text-blue-500 md hydrated">
                    <Heart color={"currentColor"} height="35px" width="35px" />
                  </div>
                </div>
              </div>
              <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52 sm:col-span-2">
                <img
                  src={require("./resources/images/portfolio/p-8.png")}
                  alt="portfolio img"
                  className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
                />
                <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
                  <p className="text-sm font-semibold text-white">
                    Type Your portfolio details{" "}
                    <span className="text-xs text-slate-300 block">
                      12 August 2025
                    </span>
                  </p>
                  <div className="rounded-full bg-white p-1.5 text-lg text-blue-500 md hydrated">
                    <Heart color={"currentColor"} height="35px" width="35px" />
                  </div>
                </div>
              </div>
            </div>
            {/*end col-3*/}
          </div>
        </div>
      </section>
      {/*====== END Portfolio ======*/}

      {/*====== Blog ======*/}
      <section className="py-16">
        <div className="mx-auto max-w max-w-7xl px-8 md:px-6">
          {/* heading text*/}
          <div className="mb-5 sm:mb-10">
            <p className=" text-left font-medium text-blue-500">Our Blog</p>
            <h1 className="text-left text-2xl font-bold text-slate-700 sm:text-3xl">
              From Our Latest Blog
            </h1>
          </div>
          {/* wrapper*/}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
            {/* single Blog*/}
            <div className="w-full duration-200 hover:scale-95">
              <div className="max-h-52 w-full overflow-hidden rounded-t-xl">
                <img
                  src={require("./resources/images/blog/blog-1.png")}
                  alt="Blog img"
                  className="w-full"
                />
              </div>
              <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
                <div className="flow-root">
                  <a
                    href="#"
                    className="mr-2 rounded-md bg-blue-50 px-3 py-1
                    text-sm text-slate-600 float-left"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="block pt-4 font-medium capitalize
                    text-slate-800 hover:text-blue-500 float-left text-left"
                  >
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.
                  </a>
                </div>
              </div>
              <hr className="my-4 border-slate-100" />
              <div className="flex">
                <img
                  src={require("./resources/images/blog/user-1.png")}
                  alt="user img"
                  className="mr-3 h-10 w-10 rounded-full object-cover"
                />
                <p className="text-sm font-semibold capitalize text-slate-600 text-left">
                  Zahidul Hossain{" "}
                  <span className="block text-xs text-slate-400 text-left">
                    Web Designer
                  </span>
                </p>
              </div>
            </div>

            {/* single Blog*/}
            <div className="w-full duration-200 hover:scale-95">
              <div className="max-h-52 w-full overflow-hidden rounded-t-xl">
                <img
                  src={require("./resources/images/blog/blog-2.png")}
                  alt="Blog img"
                  className="w-full"
                />
              </div>
              <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
                <div className="flow-root">
                  <a
                    href="#"
                    className="mr-2 rounded-md bg-blue-50 px-3 py-1
                    text-sm text-slate-600 float-left"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="mr-2 rounded-md bg-blue-50 px-3 py-1
                    text-sm text-slate-600 float-left"
                  >
                    Design
                  </a>
                  <a
                    href="#"
                    className="block pt-4 font-medium capitalize
                    text-slate-800 hover:text-blue-500 float-left text-left "
                  >
                    Dolore Placeat Ullam Architecto Deleniti Maxime Laborum
                  </a>
                </div>
              </div>
              <hr className="my-4 border-slate-100" />
              <div className="flex">
                <img
                  src={require("./resources/images/blog/user-2.png")}
                  alt="user img"
                  className="mr-3 h-10 w-10 rounded-full object-cover"
                />
                <p className="text-sm font-semibold capitalize text-slate-600 text-left">
                  Zahidul Hossain{" "}
                  <span className="block text-xs text-slate-400 text-left">
                    Web Designer
                  </span>
                </p>
              </div>
            </div>

            {/* single Blog*/}
            <div className="w-full duration-200 hover:scale-95">
              <div className="max-h-52 w-full overflow-hidden rounded-t-xl">
                <img
                  src={require("./resources/images/blog/blog-3.png")}
                  alt="Blog img"
                  className="w-full"
                />
              </div>
              <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
                <div className="flow-root">
                  <a
                    href="#"
                    className=" mr-2 rounded-md bg-blue-50 px-3 py-1 text-sm text-slate-600 float-left"
                  >
                    Website
                  </a>
                  <a
                    href="#"
                    className="block pt-4 font-medium capitalize
                    text-slate-800 hover:text-blue-500 float-left text-left"
                  >
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.
                  </a>
                </div>
              </div>
              <hr className="my-4 border-slate-100" />
              <div className="flex">
                <img
                  src={require("./resources/images/blog/user-3.png")}
                  alt="user img"
                  className="mr-3 h-10 w-10 rounded-full object-cover"
                />
                <p className="text-sm font-semibold capitalize text-slate-600 text-left">
                  Zahidul Hossain{" "}
                  <span className="block text-xs text-slate-400 text-left">
                    Web Designer
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== END Blog ======*/}


    </div>
  );
}

export default App;
