import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Contact() {
  return (
    <div>
      <div className="bg-[rgb(245,245,245)]">
        <Nav />

        <div
          className="xl:h-[150vh] bg-no-repeat bg-contain p-8 flex flex-col justify-evenly gap-12 xl:justify-evenly lg:justify-around"
          style={{
            backgroundImage:
              "url(https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-hero-bg-grad.svg)",
            backgroundPosition: "60vw 0",
          }}
        >
        </div>

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

export default Contact;
