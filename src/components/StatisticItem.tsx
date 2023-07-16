interface Props {
  title: string;
  imageSrc: string;
  description: string;
  // cyanBar?: boolean;
}

const StatisticItem = ({ title, imageSrc, description }: Props) => {
  return (
    <>
      {/* TODO: make the cyanBar */}
      {/* <div className="absolute mobile:h-4/5 mobile:w-3 md:w-3/5 md:h-3 bg-my-cyan m-0 p-0 z-0 md:left-[20%] mobile:left-[49%]" /> */}
      <div className="flex flex-col w-5/6 items-center bg-white rounded-md shadow-sm mx-6 my-8 z-10">
        <div className="absolute h-[90px]">
          <div className="relative flex bg-my-dark-violet rounded-full justify-center items-center h-20 w-20 top-[-50%]">
            <img
              src={imageSrc}
              alt="Static Logo"
              className=" max-w-full max-h-full p-2"
            />
          </div>
        </div>
        <h4 className="font-bold text-3xl text-my-dark-violet mt-16">
          {title}
        </h4>
        <p className="my-6 mx-12 text-my-grayish-violet">{description}</p>
      </div>
    </>
  );
};

export default StatisticItem;
