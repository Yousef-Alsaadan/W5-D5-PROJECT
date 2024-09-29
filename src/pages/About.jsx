import Footer from "../components/Footer";
import Nav from "../components/Nav";

function About() {
  return (
    <div>
      <div className="bg-[#F5F5F5]">
        <Nav />

        <div
          className="bg-no-repeat bg-contain flex flex-col justify-evenly gap-12 xl:justify-evenly lg:justify-around"
          style={{
            backgroundImage:
              "url(https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-header-bg-img.jpg)",
            backgroundPosition: "60vw 0",
          }}
        >
          <div className="hero-content items-start p-0 flex-col-reverse lg:flex-row h-full justify-between max-w-[1200px] mx-auto">
            <div className="fraunces_font flex flex-col justify-between lg:w-1/2 text-black ">
              <div className="flex flex-col gap-7 mt-40">
                <h1 className="font-semibold text-6xl">About Me</h1>

                <p className="montserrat_font font-normal text-base text-[#707c84] lg:w-3/4">
                  Diam urna ornare leo facilisis suspendisse eu rutrum id augue
                  cursus tincidunt nisl eget ornare pharetra ac pharetra,
                  pulvinar ipsum sed amet diam morbi amet cursus blandit augue
                  feugiat arcu aliquet egestas id diam rhoncus, mollis arcu
                  pharetra quis duis morbi a nunc diam mauris ut tortor.
                </p>
              </div>

              <div className="">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#BE7C68"
                  >
                    <path d="M480-80 80-680q85-72 186.5-116T480-840q112 0 213.5 43.5T880-680L480-80Zm0-144 292-438q-65-45-139-71.5T480-760q-79 0-152.5 26.5T188-662l292 438ZM380-560q25 0 42.5-17.5T440-620q0-25-17.5-42.5T380-680q-25 0-42.5 17.5T320-620q0 25 17.5 42.5T380-560Zm100 200q25 0 42.5-17.5T540-420q0-25-17.5-42.5T480-480q-25 0-42.5 17.5T420-420q0 25 17.5 42.5T480-360Zm0 136Z" />
                  </svg>

                  <div className="">
                    <h1>Food Critic</h1>

                    <p>
                      Diam nulla blandit urna tristique sit etiam amet
                      adipiscing.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#BE7C68"
                  >
                    <path d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z" />
                  </svg>

                  <div className="">
                    <h1>Influencer</h1>
                    <p>
                      Et volutpat lacinia enim, purus et rhoncus nibh egestas
                      habitant elit.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#BE7C68"
                  >
                    <path d="M160-120q-33 0-56.5-23.5T80-200v-480h80v480h600v80H160Zm160-160q-33 0-56.5-23.5T240-360v-480h680v480q0 33-23.5 56.5T840-280H320Zm0-80h520v-400H320v400Zm80-120h160v-200H400v200Zm200 0h160v-80H600v80Zm0-120h160v-80H600v80ZM320-360v-400 400Z" />
                  </svg>

                  <div className="">
                    <h1>Blogger</h1>
                    <p>Venenatis egestas lectus interdum enim orci intege.</p>
                  </div>
                </div>
              </div>

              <div className="max-w-[1200px] w-full mx-auto flex gap-4 sm:gap-14 items-center lg:gap-24 uppercase">
                <div className="flex flex-col gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="#BE7C68"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                  </svg>

                  <h1 className="text-black fraunces_font font-semibold text-3xl mb-2">
                    1.2M+
                  </h1>
                  <p className="text-[#707c84] tracking-[0.15em] montserrat_font font-semibold text-xs">
                    Subscribers
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    fill="#BE7C68"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>

                  <h1 className="text-black fraunces_font font-semibold text-3xl mb-2">
                    1.8M+
                  </h1>
                  <p className="text-[#707c84] tracking-[0.15em] montserrat_font font-semibold text-xs">
                    Followers
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 -960 960 960"
                    width="48"
                    fill="#BE7C68"
                  >
                    <path d="M200-120q-33 0-56.5-23.5T120-200q0-33 23.5-56.5T200-280q33 0 56.5 23.5T280-200q0 33-23.5 56.5T200-120Zm480 0q0-117-44-218.5T516-516q-76-76-177.5-120T120-680v-120q142 0 265 53t216 146q93 93 146 216t53 265H680Zm-240 0q0-67-25-124.5T346-346q-44-44-101.5-69T120-440v-120q92 0 171.5 34.5T431-431q60 60 94.5 139.5T560-120H440Z" />
                  </svg>

                  <h1 className="text-black fraunces_font font-semibold text-3xl mb-2">
                    800K+
                  </h1>
                  <p className="text-[#707c84] tracking-[0.15em] montserrat_font font-semibold text-xs">
                    Readers
                  </p>
                </div>
              </div>
            </div>

            <div className="h-full">
              <img
                className="h-full"
                height="960"
                width="624"
                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-about-header-img.jpg"
              />
            </div>
          </div>
        </div>

        <div className=""></div>

        <div className="bg-[#F5F5F5] p-14 lg:flex lg:flex-col lg:p-28">
          <p className="montserrat_font font-semibold text-xs text-black tracking-[0.15em] text-center uppercase">
            As Featured in
          </p>

          <div className="grid grid-cols-2 justify-items-center lg:flex lg:flex-row lg:justify-evenly lg:items-center">
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-1.svg" />
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-2.svg" />
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-3.svg" />
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-4.svg" />
            <img
              className="col-span-full"
              src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-featured-in-logo-5.svg"
            />
          </div>
        </div>

        <div className=""></div>

        <div className=""></div>

        <div className="bg-[#BE7C68] text-center text-white">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8 p-14 lg:p-28">
            <h1 className="font-semibold text-6xl fraunces_font">
              Invite me to your restaurant. <br />
              Get exposure of millions food lovers.
            </h1>

            <p className="text-[#f6ecea] montserrat_font text-base lg:px-44">
              Lorem dui tincidunt nunc viverra morbi et maecenas quam adipiscing
              integer amet eget blandit phasellus est natoque blandit facilisi
              eleifend.
            </p>

            <div>
              <button className="bg-white tracking-[0.15em] text-[#BE7C68] border border-white montserrat_font font-bold text-xs px-8 py-4 hover:border hover:border-white hover:text-white hover:bg-inherit">
                LET'S TALK
              </button>
            </div>
          </div>
        </div>

        <div className="fixed top-[40%] right-0 cursor-pointer flex gap-2 items-center px-3 py-3 asd">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-palette-fill"
            viewBox="0 0 16 16"
          >
            <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
          </svg>

          <p className="font-normal text-base dm-sans_font">Customize</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default About;
