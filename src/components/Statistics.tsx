import StatisticItem from "./StatisticItem";

const Statistics = () => {
  return (
    <div className=" flex flex-col items-center text-center py-16 bg-my-gray ">
      <h2 className="font-bold text-4xl text-my-dark-violet">
        Advanced Statistics
      </h2>
      <p className="text-my-grayish-violet my-4">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className="flex mobile:flex-col items-center lg:flex-row mx-10">
        <StatisticItem
          title="Brand Recognition"
          description="Boost your brand recognition with
            each click. Generic links don't
            mean a thing. Branded links help
            instil confidence in your content."
          imageSrc="/images/icon-brand-recognition.svg"
        />

        <StatisticItem
          title="Detailed Records"
          description="Gain insights into who is clicking your
            links. Knowing when and where
            people engage with your content
            helps inform better decisions."
          imageSrc="/images/icon-detailed-records.svg"
        />

        <StatisticItem
          title="Fully Customizable"
          description="Improve brand awareness and
          content discoverability through
          customizable links. supercharging
          audience engagement."
          imageSrc="/images/icon-fully-customizable.svg"
        />
      </div>
    </div>
  );
};

export default Statistics;
