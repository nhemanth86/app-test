import ActivityCard from "./ActivityCard";

const Activities = ({ active }) => {
  return (
    <div
      className={`my-6 ml-2 flex flex-col md:bg-neutral-100 bg-white p-4 rounded-md ${
        active ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-row justify-between">
        <p>Activities</p>
        <div className="flex justify-between items-center ">
          <button className="inline-block px-6 py-2.5 bg-green-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            View All
          </button>
        </div>
      </div>
      <div className="md:mt-8">
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
      </div>
    </div>
  );
};

export default Activities;
