const ActivityCard = () => {
  return (
    <div className="flex items-center mt-4">
      <div className="p-2 bg-slate-400 rounded-full">
        <img
          className="h-4 w-4 divide-x divide-gray-400"
          src="https://img.freepik.com/free-icon/group-profile-users_318-41953.jpg?w=2000"
          alt="logo_user"
        />
      </div>
      <div className="flex ml-8 flex-col justify-between">
        <p className="text-sm">
          Leslie Alexander updated here
          <span className="text-orange-500"> Account Type</span>
        </p>
        <p className="text-xs text-gray-400">
        5 October 11:46 AM
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
