const familyData = [
  {
    name: "John Smith",
    text: "have invited you to become his family member.",
    imageURL:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Dianne Russell",
    text: "have invited you to become his family member.",
    imageURL:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Lisa Smith",
    text: "have invited you to become his family member.",
    imageURL:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Sean Michaletz",
    text: "have invited you to become his family member.",
    imageURL:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Sean Michaletz",
    text: "have invited you to become his family member.",
    imageURL:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const Invitations = ({active}) => {
  return (
    <div className={`overflow-auto mt-4 flex flex-col md:bg-neutral-100 bg-white px-4 pt-4 rounded-md ${
      active ? "block" : "hidden"
    }`}>
      <div className="flex justify-between">
        <p>Invitations</p>
        <div className="flex justify-between items-center ">
          <button className="inline-block px-6 py-2.5 bg-green-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            Add New
          </button>
        </div>
      </div>
      <div className="mt-4">
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
                <p className="text-sm ml-2">
                  <span className="text-orange-500"> {fam.name}</span>
                  {fam.text}
                </p>
              </div>
              <div className="flex">
                <div className="bg-red-500 p-2">
                  <img
                    className="h-4 w-4"
                    src="https://png.pngitem.com/pimgs/s/111-1116807_check-mark-symbol-white-hd-png-download.png"
                    alt="text"
                  />
                </div>
                <div className="bg-green-400 p-2 ml-1">
                  <img
                    className="h-4 w-4"
                    src="https://png.pngitem.com/pimgs/s/214-2148677_black-box-white-x-hd-png-download.png"
                    alt="text"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Invitations;
