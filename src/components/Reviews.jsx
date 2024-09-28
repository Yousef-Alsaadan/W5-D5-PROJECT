function Reviews(props) {
  return (
    <div>
      <div className="flex flex-col gap-4 mt-16">
        <img height="248" width="368" src={props.reviewImg} />

        <h1 className="fraunces_font font-semibold text-3xl text-black">
          {props.reviewTitle}
        </h1>

        <p className="montserrat_font font-normal text-base text-[#707c84] w-11/12">
          {props.reviewText}
        </p>

        <a
          href="#"
          className="flex items-center gap-2 text-[#BE7C68] montserrat_font font-bold text-xs tracking-[0.15em] mt-4 hover:text-black"
        >
          READ MORE
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Reviews;
