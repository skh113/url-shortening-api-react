import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex mobile:flex-col md:flex-row-reverse justify-center items-center md:mx-12">
      <div className="mobile:mx-4">
        <img src="images/illustration-working.svg" alt="working" />
      </div>
      <div className="mobile:text-center md:text-start mx-10">
        <h1 className="text-6xl text-my-very-dark-violet mx-0 mb-4 leading-16">
          More than just shorter links
        </h1>
        <p className="text-my-grayish-violet mx-0 mb-4">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default Hero;
