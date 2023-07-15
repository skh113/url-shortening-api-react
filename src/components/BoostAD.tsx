import Button from "./Button";

interface Props {
  title: string;
}

const BoostAD = ({ title }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-40 mobile:bg-boost-mobile md:bg-boost-desktop bg-center bg-cover bg-my-dark-violet">
      <h2 className="text-white font-bold text-4xl mb-6">{title}</h2>
      <Button>Get Started</Button>
    </div>
  );
};

export default BoostAD;
