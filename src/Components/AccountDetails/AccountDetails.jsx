const AccountDetails = ({ active = true}) => {
  return (
    <div
      className={`flex justify-between items-center col-span-2 bg-neutral-100 p-4 rounded-md ${
        active ? "block" : "hidden"
      }  flex-col md:flex-row`}
    >
      <div className="flex justify-between items-center md:flex-row sm:flex-col">
        <img
          className="inline-block h-28 w-28 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="user_logo"
        />
        <div className="ml-8">
          <p className="text-3xl">John Smith</p>
          <p className="text-xs font-thin text-center items-center">
            <img
              className="inline-block h-3 w-3 text-center"
              src="https://static.thenounproject.com/png/327425-200.png"
              alt="navigation_pin"
            />
            Main St. Farmington, CA 123
          </p>
        </div>
      </div>

      <form className="flex flex-col md:flex-row justify-between items-center w-full max-w-sm">
        <div>
        <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/3">
              <label
                className="block text-base text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                First Name:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value="John"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/3">
              <label
                className="block text-base text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Last Name:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value="Smith"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-2 hidden md:block">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
                for="inline-password"
              >
                Email:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                placeholder="johnsmith@yahoo.com"
              />
            </div>
          </div>
        </div>
        <div>
        <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/3">
              <label
                className="block text-base text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                First Name:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value="John"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/3">
              <label
                className="block text-base text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Last Name:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value="Smith"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-2 hidden md:block">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 md:text-left mb-1 md:mb-0 pr-4"
                for="inline-password"
              >
                Email:
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                placeholder="johnsmith@yahoo.com"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="flex flex-col justify-between sm:hidden">
        <button className="inline-block mb-4 px-6 py-2.5 bg-green-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          View Button
        </button>
        <button className="inline-block mb-4  px-6 py-2.5 bg-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          View Button
        </button>
        <button className="inline-block mb-4  px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
          View Button
        </button>
      </div>
    </div>
  );
};

export default AccountDetails;
