const CardDetails = () => {
  return (
    <div className="flex justify-between items-center bg-white py-2 mt-4 md:mt-0 px-4 mr-4 rounded-md">
        <img
          className="h-16 w-16"
          src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png"
          alt="card_icon"
        />
      <div className="flex ml-4 justify-between flex-col">
        <p>**** **** **** 5967</p>
        <p>Expires 09/27</p>
      </div>
    </div>
  );
};

export default CardDetails;
