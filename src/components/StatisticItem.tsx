interface Props {
  title: string;
  imageSrc: string;
  description: string;
}

const StatisticItem = ({ title, imageSrc, description }: Props) => {
  return (
    <div className="flex flex-col w-5/6 items-center bg-white rounded-md shadow-sm mx-6 my-8">
      <div className="absolute h-[90px]">
        <div className="relative flex bg-my-dark-violet rounded-full justify-center items-center h-20 w-20 top-[-50%]">
          <img
            src={imageSrc}
            alt="Static Logo"
            className=" max-w-full max-h-full p-2"
          />
        </div>
      </div>
      <h4 className="font-bold text-3xl text-my-dark-violet mt-16">{title}</h4>
      <p className="my-6 mx-12 text-my-grayish-violet">{description}</p>
    </div>
  );
};

export default StatisticItem;
