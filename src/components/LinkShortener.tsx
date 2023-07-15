import Button from "./Button";

const LinkShortener = () => {
  return (
    <div className="flex mt-16 items-center justify-center">
      <div className="flex items-center justify-center w-11/12 mobile:bg-shorten-mobile md:bg-shorten-desktop mobile:flex-col md:flex-row bg-cover py-8 bg-my-dark-violet rounded-lg md:px-10">
        <input
          type="text"
          placeholder="Enter a link here to shorten..."
          className="border-none active:border-none mobile:w-11/12 md:w-4/5 rounded-lg h-10 mobile:mb-4 md:mb-0 py-3 text-center md:mr-4"
        />
        <Button className="mobile:w-11/12 md:w-auto rounded-lg">
          Shorten It!
        </Button>
      </div>
    </div>
  );
};

export default LinkShortener;
