import Nav from "../components/Nav";
import Reviews from "../components/Reviews";
import Best from "../components/Best";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div className="bg-[#F5F5F5]">
        <Nav />

        <div
          className="xl:h-[150vh] bg-no-repeat bg-contain p-8 flex flex-col justify-evenly gap-12 xl:justify-evenly lg:justify-around"
          style={{
            backgroundImage:
              "url(https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-bg-grad.svg)",
            backgroundPosition: "60vw 0",
          }}
        >
          <div className="hero-content flex-col-reverse lg:flex-row justify-between max-w-[1200px] mx-auto mt-20 sm:mt-16 xl:mt-20">
            <div className="fraunces_font flex flex-col justify-between lg:w-1/2 text-black">
              <div className="flex flex-col gap-7 mt-7">
                <div className="mb-7 text-[#BE7C68] montserrat_font font-semibold text-xs tracking-[0.15em] flex gap-3 items-center">
                  <span className="bg-[#BE7C68] h-[1px] w-12"></span>
                  <span>WELCOME</span>
                </div>

                <h1 className="font-semibold text-6xl">I’m Dianna Adams</h1>

                <h2 className="font-semibold text-3xl">
                  Food Critic / Influencer / Blogger
                </h2>

                <p className="montserrat_font font-normal text-base text-[#707c84] lg:w-3/4">
                  Massa urna magnis dignissim id euismod porttitor vitae etiam
                  viverra nunc at adipiscing sit morbi aliquet mauris porttitor
                  nisi, senectus pharetra, ac porttitor orci.
                </p>

                <div className="mt-7">
                  <button className="montserrat_font font-bold text-xs border border-[#BE7C68] px-8 py-4 text-[#BE7C68] hover:bg-[#BE7C68] hover:text-white">
                    JOIN INSIDER
                  </button>
                </div>
              </div>
            </div>

            <div>
              <img
                className="lg:h-[552px] w-[552px]"
                src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-img.jpg"
              />
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

        <div className="lg:max-w-[1200px] lg:mx-auto mb-16 p-4">
          <div className="flex flex-col justify-between items-center gap-8 lg:flex-row">
            <h1 className="text-black fraunces_font font-semibold text-6xl text-center">
              Latest Reviews
            </h1>

            <div>
              <button className="montserrat_font font-bold text-xs border border-[#BE7C68] px-8 py-4 text-[#BE7C68] hover:bg-[#BE7C68] hover:text-white">
                VIEW ALL
              </button>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <Reviews
              reviewImg="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-1.jpg"
              reviewTitle="Grilled Flank Steak with Chimichurri"
              reviewText="Potenti tincidunt arcu euismod curabitur iaculis ut aliquet facilisis pharetra, pharetra dolor scelerisque."
            />

            <Reviews
              reviewImg="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-2.jpg"
              reviewTitle="Mushroom Penne with Walnut Pesto"
              reviewText="Ipsum amet ultrices suscipit eget tortor, tincidunt urna, mattis aliquam duis eget luctus."
            />

            <Reviews
              reviewImg="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-review-img-3.jpg"
              reviewTitle="Garlic Butter White Wine Shrimp Linguine"
              reviewText="Non faucibus tincidunt commodo est arcu ipsum augue ipsum at vitae, nunc purus erat sem leo fames facilisis."
            />
          </div>
        </div>

        <div className="bg-[#F3EFEE] pb-8 lg:pb-64">
          <div className="max-w-[1200px] mx-auto p-4 py-20">
            <div className="text-center flex flex-col gap-4 items-center">
              <h1 className="fraunces_font font-semibold text-6xl text-black">
                Best in Class Restaurant
              </h1>

              <p className="montserrat_font font-normal text-base text-[#707c84] w-[55%]">
                Massa urna magnis dignissim id euismod porttitor vitae etiam
                viverra nunc at adipiscing sit morbi aliquet mauris porttitor
                nisi, senectus pharetra ac porttitor orci.
              </p>
            </div>

            <div className="lg:grid lg:grid-cols-3 lg:gap-12">
              <Best
                bestImg="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-1.jpg"
                bestTitle="Bern's Steak House"
                bestText="Potenti tincidunt arcu euismod amet ac curabitur iaculis in ut aliquet."
              />

              <Best
                bestImg="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-2.jpg"
                bestTitle="Eewak Korean Restaurant"
                bestText="Tristique in ornare lectus facilisis diam libero, eros sit scelerisque pulvinar dui."
              />

              <Best
                bestImg="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-3.jpg"
                bestTitle="The Ramban Vegan House"
                bestText="Iaculis morbi id maecenas mi amet, mi ut dolor aenean id justo."
              />

              <Best
                bestImg="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-4.jpg"
                bestTitle="Maniest Bake & Cake"
                bestText="Diam lacus nunc est commodo nunc, velit et amet eu vitae sem."
              />

              <Best
                bestImg="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-5.jpg"
                bestTitle="Crush Los Angeles"
                bestText="Adipiscing eget in sit lectus sem euismod ut consequat suspendisse ut tristique."
              />

              <Best
                bestImg="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-best-restaurant-6.jpg"
                bestTitle="The Mike Winery"
                bestText="Aliquet ut vel faucibus gravida tellus non ipsum ullamcorper adipiscing felis."
              />
            </div>
          </div>
        </div>

        <div className="xl:max-w-[1200px] xl:mx-auto bg-white border-8 border-[#E0E0E0] lg:px-10 md:mx-4 px-4 pb-10 flex flex-col gap-8 lg:gap-16 items-center lg:-translate-y-1/2 lg:flex-row">
          <div className="-mt-12">
            <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-subscribe-cta-img.jpg" />
          </div>

          <div className="flex flex-col gap-6 justify-between xl:mt-28 lg:w-auto max-w-[1200px] mx-auto">
            <h1 className="text-black fraunces_font font-semibold text-6xl">
              Join Mailing List
            </h1>

            <p className="montserrat_font font-normal text-base text-[#707c84] lg:w-4/5 mb-8">
              Sign up and get all the latest, ad-free reviews, recipes and news
              sent to your inbox.
            </p>

            <div className="flex md:flex-row flex-col lg:gap-2 gap-6 items-center">
              <input
                type="text"
                placeholder="Email address"
                className="bg-[#FAFAFA] border pl-4 montserrat_font w-full h-14 lg:w-2/3"
              />

              <div className="w-full lg:w-auto">
                <button className="tracking-[0.15em] md:w-auto w-full border border-[#BE7C68] hover:bg-[#BE7C68] hover:text-white text-center montserrat_font font-bold text-xs  px-8 py-4 text-[#BE7C68]">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto mb-16 p-4 mt-16 lg:mt-auto">
          <h1 className="fraunces_font font-semibold text-6xl text-black mb-12 text-center lg:text-start">
            Latest Videos
          </h1>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex flex-col gap-8 lg:w-1/2">
              <img src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-1.jpg" />

              <div className="absolute flex items-center justify-center w-[90%] h-[25%] md:h-[45%] lg:w-[552px] lg:h-[368px]">
                <div className="bg-white p-4 rounded-full text-[#BE7C68] hover:text-white hover:bg-[#BE7C68] cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-play-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                  </svg>
                </div>
              </div>

              <h1 className="fraunces_font font-semibold text-3xl text-black lg:w-3/4">
                Dianna Adams visits the Sooto Restaurant | Uncovered Miami
              </h1>

              <p className="montserrat_font font-normal text-base text-[#707c84] lg:w-5/6">
                A consectetur eget ultrices nec velit purus quam dignissim purus
                gravida aliquam mattis ultrices eget ultricies tincidunt et erat
                enim vitae sollicitudin tellus placerat
              </p>
            </div>

            <div className="flex flex-col gap-8 lg:gap-0 lg:justify-between lg:w-1/2">
              <div className="flex flex-col md:flex-row">
                <div className="lg:mr-8 w-1/3">
                  <a href="#">
                    <img
                      src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-2.jpg"
                      height="96"
                      width="144"
                    />
                  </a>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <a
                    href="#"
                    className="montserrat_font font-semibold text-lg text-black"
                  >
                    Family Dinner - Latea pulvinar scelerisque diam tempus
                    facilisi
                  </a>

                  <p className="montserrat_font font-normal text-sm text-[#707c84]">
                    Enim imperdiet fames nisl, purus et diam aliquet
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="lg:mr-8 w-1/3">
                  <a href="#">
                    <img
                      src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-3.jpg"
                      height="96"
                      width="144"
                    />
                  </a>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <a
                    href="#"
                    className="montserrat_font font-semibold text-lg text-black"
                  >
                    Lobortis turpis turpis vehicula laoreet egestas enim ornare
                  </a>

                  <p className="montserrat_font font-normal text-sm text-[#707c84]">
                    Enim imperdiet fames nisl, purus et diam aliquet
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="lg:mr-8 w-1/3">
                  <a href="#">
                    <img
                      src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-4.jpg"
                      height="96"
                      width="144"
                    />
                  </a>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <a
                    href="#"
                    className="montserrat_font font-semibold text-lg text-black"
                  >
                    Tempus quis ac viverra condimentum sit nulla viverra
                  </a>

                  <p className="montserrat_font font-normal text-sm text-[#707c84]">
                    Enim imperdiet fames nisl, purus et diam aliquet
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="lg:mr-8 w-1/3">
                  <a href="#">
                    <img
                      src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-latest-video-5.jpg"
                      height="96"
                      width="144"
                    />
                  </a>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <a
                    href="#"
                    className="montserrat_font font-semibold text-lg text-black"
                  >
                    Quis mauris egestas enim urna dictum
                  </a>

                  <p className="montserrat_font font-normal text-sm text-[#707c84]">
                    Enim imperdiet fames nisl, purus et diam aliquet
                  </p>
                </div>
              </div>

              <div className="w-full">
                <button className="tracking-[0.15em] w-full border border-[#BE7C68] text-[#BE7C68] hover:bg-[#BE7C68] hover:text-white text-center montserrat_font font-bold text-xs  px-8 py-4">
                  VIWE ALL VIDEOS
                </button>
              </div>
            </div>
          </div>
        </div>

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

export default Home;
