import Button from "./Button";

const Header = () => {
  return (
    <header className="flex flex-row mx-16 my-6 items-center">
      <a href="#" className="mx-5">
        <img src="images/logo.svg" alt="Logo" />
      </a>
      <div className="flex flex-row items-center justify-between w-full">
        <div className="mx-4">
          <Button className="text-my-grayish-violet bg-white px-0 mx-4">
            Features
          </Button>
          <Button className="text-my-grayish-violet bg-white px-0 mx-4">
            Resources
          </Button>
          <Button className="text-my-grayish-violet bg-white px-0 mx-4">
            Company
          </Button>
        </div>
        <div className="">
          <Button className="text-my-grayish-violet bg-white px-0 mx-4">
            Login
          </Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
