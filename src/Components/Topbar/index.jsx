const Topbar = () => {
  return <div className="flex justify-between">
    <p className="text-2xl">My Account</p>
    <p className="bg-emerald-200 p-2 rounded font-extralight px-28 hidden md:block">
      Success Message Here
    </p>
    <button className="hidden md:block inline-block px-6 py-2.5 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View Button</button>
  </div>
};

export default Topbar;
