const familyData = [
  {
    name: "John Smith",
    imageURL:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Dianne Russell",
    imageURL:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Lisa Smith",
    imageURL:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Sean Michaletz",
    imageURL:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];
const Family = ({ active }) => {
  return (
    <div
      className={`overflow-auto flex flex-col bg-neutral-100 p-4 rounded-md ${
        active ? "block" :"hidden" 
      }`}
    >
      <div className="flex justify-between">
        <p>Family</p>
        <div className="flex justify-between items-center ">
          <img
            className="h-4 w-4 mr-2"
            src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
          />
          <button className="inline-block px-6 py-2.5 bg-green-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Add New
          </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex bg-orange-400 mb-2 items-center justify-between px-4 py-2 rounded-md">
          <div className="flex items-center justify-between ">
            <img
              className="inline-block h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="user_logo"
            />
            <p className="ml-6 text-white">John Smith</p>
          </div>
          <div className="flex items-center justify-between ">
            <button className="px-6 py-1.5 bg-white text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              Admin
            </button>
            <button className="px-1 py-0.5 ml-1 bg-white text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
              <img
                className="h-6 w-6"
                alt="user_group"
                src="https://static.vecteezy.com/system/resources/previews/008/134/814/original/user-group-network-corporate-team-group-community-member-icon-business-team-work-activity-staff-unity-icon-free-vector.jpg"
              />
            </button>
          </div>
        </div>
        {familyData.map((fam, i) => {
          return (
            <div
              key={i}
              className="flex bg-slate-300 mb-2 items-center justify-between px-4 py-2 rounded-md"
            >
              <div className="flex items-center justify-between ">
                <img
                  className="inline-block h-10 w-10 rounded-full"
                  src={fam.imageURL}
                  alt="user_logo"
                />
                <p className="ml-6 text-black">{fam.name}</p>
              </div>
              <button className="px-6 py-1.5 bg-slate-400 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                MEMBER
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Family;
