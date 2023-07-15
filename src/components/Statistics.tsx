import StatisticItem from "./StatisticItem";

const Statistics = () => {
  return (
    <div className=" flex flex-col items-center text-center py-16 bg-my-gray ">
      <h2 className="font-bold text-4xl text-my-dark-violet">
        Advanced Statistics
      </h2>
      <p className="text-my-grayish-violet mb-4">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div>
        <StatisticItem />
        <StatisticItem />
        <StatisticItem />
      </div>
    </div>
  );
};

export default Statistics;
