import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import DropDown from '../components/Dropdown';
import '../styles.css';

export default function Navbar({
  isLanding
}: {
  isLanding: boolean;
}): ReactElement {
  if (isLanding) {
    var d = document.getElementById('nav-landing-page');
    if (d != null) {
      d.setAttribute('class', d.className.replace('hidden', 'visible'));
    }
    console.log(d);
  }

  function labelHovered(event: any, id: string) {
    var d = document.getElementById(id + '-hover-text');
    if (d != null) {
      d.setAttribute('class', d.className.replace('invisible', 'visible'));
    }
  }
  function labelUnhovered(event: any, id: string) {
    var d = document.getElementById(id + '-hover-text');
    if (d != null) {
      d.setAttribute('class', d.className.replace('visible', 'invisible'));
    }
  }

  return (
    <div
      id="navbar"
      className="bg-gradient-to-b from-[#27476e] to-[#37C4C4]  via-[#006992] animate-gradient-y"
    >
      <nav className="relative p-3 h-50 flex justify-between items-center">
        {/* Left Conent */}
        <ul className="flex mr-auto flex items-center w-auto space-x-10">
          <li>
            <NavLink to="/">
              <img
                src={require('../images/ac-logo.png')}
                className="h-[35px] object-contain object-center pl-2"
                alt="AC Logo"
              />
            </NavLink>
          </li>

          <li>
            <NavLink className="" to="/algorithms">
              <svg
                className="h-[40px] w-[40px] object-contain object-center hover:opacity-30"
                id="algorithms"
                onMouseOver={(event) => labelHovered(event, 'algorithms')}
                onMouseOut={(event) => labelUnhovered(event, 'algorithms')}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                {/* prettier-ignore */}
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                {/* prettier-ignore */}
                <g id="SVGRepo_iconCarrier"> <path opacity="0.1" d="M5 7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H12H15C16.8856 3 17.8284 3 18.4142 3.58579C19 4.17157 19 5.11438 19 7V12V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H12H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12V7Z" fill="#FFF"/> <path d="M9 7H15" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15 17V14" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M15 11H15.01" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 11H12.01" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9 11H9.01" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9 14H9.01" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 14H12.01" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 17H12.01" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M9 17H9.01" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M5 7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H12H15C16.8856 3 17.8284 3 18.4142 3.58579C19 4.17157 19 5.11438 19 7V12V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H12H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12V7Z" stroke="#FFF" stroke-width="2" stroke-linejoin="round"/></g>
              </svg>
              <div
                className="invisible absolute z-10 justify-center items-center text-sm text-black font-semibold bg-slate-500  py-2 px-4 rounded bg-opacity-50 translate-y-[3px] -translate-x-[30px]"
                id="algorithms-hover-text"
              >
                Algorithms
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink className="" to="/calculator">
              <svg
                className="h-[40px] w-[40px] object-contain object-center hover:opacity-30"
                id="calculator"
                onMouseOver={(event) => labelHovered(event, 'calculator')}
                onMouseOut={(event) => labelUnhovered(event, 'calculator')}
                fill="#FFFFFF"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <g id="calculator">
                  <path d="M13.15,8.85a.48.48,0,0,0,.7,0L15,7.71l1.15,1.14a.48.48,0,0,0,.7,0,.48.48,0,0,0,0-.7L15.71,7l1.14-1.15a.49.49,0,1,0-.7-.7L15,6.29,13.85,5.15a.49.49,0,0,0-.7.7L14.29,7,13.15,8.15A.48.48,0,0,0,13.15,8.85Z" />
                  <path d="M18.5,15h-4a.5.5,0,0,0,0,1h4a.5.5,0,0,0,0-1Z" />
                  <path d="M18.5,17h-4a.5.5,0,0,0,0,1h4a.5.5,0,0,0,0-1Z" />
                  <path d="M9.5,6h-4a.5.5,0,0,0,0,1h4a.5.5,0,0,0,0-1Z" />
                  <path d="M9.5,13H8V11.5a.5.5,0,0,0-1,0V13H5.5a.5.5,0,0,0,0,1H7v1.5a.5.5,0,0,0,1,0V14H9.5a.5.5,0,0,0,0-1Z" />
                  <path d="M20,12.26V3.5A1.5,1.5,0,0,0,18.5,2H3.5A1.5,1.5,0,0,0,2,3.5v15A1.5,1.5,0,0,0,3.5,20h8.76A5.5,5.5,0,1,0,20,12.26ZM3.5,19a.5.5,0,0,1-.5-.5V3.5A.5.5,0,0,1,3.5,3h15a.5.5,0,0,1,.5.5v8.11A5.4,5.4,0,0,0,16.5,11,5.51,5.51,0,0,0,11,16.5a5.4,5.4,0,0,0,.61,2.5Zm13,2A4.5,4.5,0,1,1,21,16.5,4.51,4.51,0,0,1,16.5,21Z" />
                </g>
              </svg>

              <div
                className="invisible absolute z-10 justify-center items-center text-sm text-black font-semibold bg-slate-500  py-2 px-4 rounded bg-opacity-50 translate-y-[3px] -translate-x-[30px]"
                id="calculator-hover-text"
              >
                Calculator
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink className="" to="/photomathclone">
              <svg
                className="h-[35px] w-[40px] object-contain object-center hover:opacity-30"
                id="photomathclone"
                onMouseOver={(event) => labelHovered(event, 'photomathclone')}
                onMouseOut={(event) => labelUnhovered(event, 'photomathclone')}
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="512.000000pt"
                height="512.000000pt"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#FFFFFF"
                  stroke="none"
                >
                  <path
                    d="M600 3915 l0 -1205 -150 0 -150 0 0 225 0 225 -150 0 -150 0 0 -600
                    0 -600 150 0 150 0 0 225 0 225 150 0 150 0 0 -1205 0 -1205 1960 0 1960 0 0
                    1205 0 1205 150 0 150 0 0 -225 0 -225 150 0 150 0 0 600 0 600 -150 0 -150 0
                    0 -225 0 -225 -150 0 -150 0 0 713 0 712 -493 493 -492 492 -1468 0 -1467 0 0
                    -1205z m2720 455 l0 -450 450 0 450 0 0 -605 0 -605 -755 0 -755 0 0 150 0
                    150 225 0 225 0 0 150 0 150 -600 0 -600 0 0 -150 0 -150 225 0 225 0 0 -150
                    0 -150 -755 0 -755 0 0 1055 0 1055 1210 0 1210 0 0 -450z m495 40 l190 -190
                    -193 0 -192 0 0 190 c0 105 1 190 3 190 1 0 88 -85 192 -190z m-1405 -2300 l0
                    -300 150 0 150 0 0 300 0 300 755 0 755 0 0 -1055 0 -1055 -1660 0 -1660 0 0
                    1055 0 1055 755 0 755 0 0 -300z"
                  />
                  <path d="M1200 4370 l0 -150 910 0 910 0 0 150 0 150 -910 0 -910 0 0 -150z" />
                  <path d="M1200 3770 l0 -150 150 0 150 0 0 150 0 150 -150 0 -150 0 0 -150z" />
                  <path d="M1800 3770 l0 -150 610 0 610 0 0 150 0 150 -610 0 -610 0 0 -150z" />
                  <path d="M1200 1350 l0 -150 910 0 910 0 0 150 0 150 -910 0 -910 0 0 -150z" />
                  <path d="M3320 1350 l0 -150 300 0 300 0 0 150 0 150 -300 0 -300 0 0 -150z" />
                  <path d="M1200 750 l0 -150 150 0 150 0 0 150 0 150 -150 0 -150 0 0 -150z" />
                  <path d="M1800 750 l0 -150 1060 0 1060 0 0 150 0 150 -1060 0 -1060 0 0 -150z" />
                </g>
              </svg>
              <div
                className="invisible absolute z-10 justify-center items-center text-sm text-black font-semibold bg-slate-500  py-2 px-4 rounded bg-opacity-50 translate-y-[3px] -translate-x-[30px]"
                id="photomathclone-hover-text"
              >
                Math OCR
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink className="" to="/ac_bot">
              <svg
                className="h-[40px] w-[40px] object-contain object-center hover:opacity-30"
                id="acbot"
                onMouseOver={(event) => labelHovered(event, 'acbot')}
                onMouseOut={(event) => labelUnhovered(event, 'acbot')}
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="512.000000pt"
                height="512.000000pt"
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  fill="#FFFFFF"
                  stroke="none"
                >
                  <path
                    d="M2370 5109 c-544 -61 -1038 -406 -1284 -896 -196 -393 -229 -846 -90
                    -1262 80 -240 192 -420 408 -655 201 -218 271 -329 342 -541 56 -169 64 -250
                    64 -688 0 -316 3 -402 16 -465 83 -404 482 -669 881 -586 99 20 162 45 248 99
                    121 75 231 201 291 334 55 123 56 133 64 631 8 498 9 512 66 685 63 191 146
                    320 336 526 77 85 163 186 190 224 588 835 302 1978 -609 2434 -106 53 -203
                    88 -333 120 -198 48 -395 62 -590 40z m385 -304 c148 -22 266 -59 400 -125
                    377 -183 638 -518 727 -933 29 -136 31 -399 5 -529 -56 -277 -169 -483 -395
                    -721 -70 -74 -155 -173 -189 -221 -129 -182 -234 -432 -270 -648 l-17 -108
                    -456 0 -456 0 -17 108 c-34 200 -125 430 -239 602 -68 102 -104 145 -235 282
                    -210 221 -325 435 -380 706 -26 130 -24 393 5 529 119 556 557 970 1117 1057
                    121 19 278 19 400 1z m255 -3840 c0 -150 -5 -276 -11 -307 -38 -178 -185 -319
                    -368 -350 -232 -40 -460 117 -510 350 -6 32 -11 156 -11 307 l0 255 450 0 450
                    0 0 -255z"
                  />
                  <path
                    d="M2455 4206 c-84 -21 -147 -57 -211 -121 -98 -97 -134 -197 -134 -370
                    l0 -95 150 0 150 0 0 90 c0 110 18 154 78 188 49 27 91 28 142 2 68 -35 99
                    -128 65 -193 -8 -15 -50 -61 -94 -102 -136 -129 -190 -265 -191 -477 l0 -108
                    149 0 149 0 4 118 c5 146 18 174 137 292 99 97 134 159 153 269 24 141 -22
                    281 -127 387 -112 113 -269 158 -420 120z"
                  />
                  <path d="M2410 2570 l0 -150 150 0 150 0 0 150 0 150 -150 0 -150 0 0 -150z" />
                  <path
                    d="M260 4565 l-105 -105 223 -223 222 -222 107 108 108 107 -220 220
                    c-121 121 -222 220 -225 220 -3 0 -52 -47 -110 -105z"
                  />
                  <path
                    d="M4525 4450 l-220 -220 108 -107 107 -108 222 222 223 223 -105 105
                      c-58 58 -107 105 -110 105 -3 0 -104 -99 -225 -220z"
                  />
                  <path d="M0 3470 l0 -150 305 0 305 0 0 150 0 150 -305 0 -305 0 0 -150z" />
                  <path d="M4510 3470 l0 -150 305 0 305 0 0 150 0 150 -305 0 -305 0 0 -150z" />
                  <path
                    d="M377 2702 l-217 -217 108 -108 107 -107 220 220 220 220 -105 105
                    c-58 58 -107 105 -110 105 -3 0 -103 -98 -223 -218z"
                  />
                  <path
                    d="M4410 2815 l-105 -105 220 -220 220 -220 107 107 108 108 -217 217
                    c-120 120 -220 218 -223 218 -3 0 -52 -47 -110 -105z"
                  />
                </g>
              </svg>

              <div
                className="invisible absolute z-10 justify-center items-center text-sm text-black font-semibold bg-slate-500  py-2 px-4 rounded bg-opacity-50 translate-y-[3px] -translate-x-[20px]"
                id="acbot-hover-text"
              >
                Pratice
              </div>
            </NavLink>
          </li>
        </ul>

        {/* Right Content*/}
        <ul className="absolute top-[100%] left-[100%] transform -translate-y-[120%] -translate-x-[100%] flex mx-auto flex items-center w-auto space-x-6">
          <li>
            <NavLink to="#">
              <input
                className="pl-3 h-[30px] w-[200px] object-contain object-center"
                type="text"
                placeholder="Search Aggies Compute"
                style={{ borderRadius: '10px' }}
              ></input>
            </NavLink>
          </li>
          <li>
            <DropDown>
              <img
                src={require('../images/profile-icon.png')}
                className="h-[30px] w-[30px] object-contain object-center"
                alt="Temp Profile Icon"
              />
            </DropDown>
          </li>
        </ul>
      </nav>
      <div
        id="nav-landing-page"
        className="hidden flex flex-col w-full h-56 items-center w-full"
      >
        <h1 className="flex items-center w-full h-2/3  justify-center text-6xl font-extrabold  text-[#44f2f2]">
          Aggie <span className="text-[#00b3f8]">Compute</span>
        </h1>

        <h2 className="flex flex-col items-center w-full pb-6 h-1/3 justify-center text-xl font-medium  text-white">
          Empowering Students with Math:
          <span>
            <span className="text-[#37C4C4] font-bold"> Free </span> and
            <span className="text-[#37C4C4] font-bold mx-1">Centralized</span>
            Resources
          </span>
        </h2>
      </div>
    </div>
  );
}
