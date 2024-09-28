function Best(props) {
  return (
    <div>
      <div className="flex flex-col gap-4 mt-16">
        <img height="248" width="368" src={props.bestImg} />

        <h1 className="fraunces_font font-semibold text-3xl text-black w-11/12">
          {props.bestTitle}
        </h1>

        <p className="montserrat_font font-normal text-base text-[#707c84] w-11/12">
          {props.bestText}
        </p>
      </div>
    </div>
  );
}

export default Best;
