import CardDetails from "./CardDetails";

const BankAccount = ({ active }) => {
  return (
    <div
      className={`mt-6 pb-24 flex flex-col justify-between bg-neutral-100 py-2 px-6 rounded-md ${
        active ? "block" : "hidden"
      }`}
    >
      <p className="text-xl">Bank Account</p>
      <div className="flex md:flex-row flex-col mt-4">
        <CardDetails />
        <CardDetails />
      </div>
    </div>
  );
};

export default BankAccount;
