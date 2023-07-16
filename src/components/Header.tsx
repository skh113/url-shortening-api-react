import Button from "./Button";

import { useState } from "react";

const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  return (
    <nav className="flex flex-row mx-16 my-6 items-center mobile:justify-between">
      <a href="#" className="mx-5">
        <img src="images/logo.svg" alt="Logo" />
      </a>
      <div className="flex lg:hidden cursor-pointer">
        <img
          src="/images/bars.svg"
          alt="Menu"
          onClick={() => setBurgerMenu(!burgerMenu)}
        />
      </div>
      <div className="flex flex-row items-center justify-between w-full mobile:hidden lg:flex">
        <div className="">
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
      </div>
    </nav>
  );
};

export default Header;
