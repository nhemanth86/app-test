import { useEffect, useState } from "react";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import AccountDetails from "../AccountDetails/AccountDetails";
import Activities from "../Activities";
import BankAccount from "../BankAccount";
import BillingDetails from "../BillingDetails";
import Family from "../Family";
import Invitations from "../Invitations";
import Navbar from "../Navbar/Navbar";
import Topbar from "../Topbar";

const Home = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [toggle, setToggle] = useState(false);

  const handleTabChange = (item) => {
    setActiveItem(item);
  };

  const { height, width } = useWindowDimensions();

  console.log(height, width)

  useEffect(()=>{
    if(width > 650){
      setToggle(true)
    }
  })
  
  
  return (
    <>
      <Navbar />
      <div className="px-8 py-6">
        <Topbar />
        <div className="sm:block flex md:hidden justify-between items-center">
          <p
            className={`${
              activeItem === "profile" ? "text-red-500" : ""
            }`}
            onClick={() => handleTabChange("profile")}
          >
            Profile
          </p>
          <p  className={`${
              activeItem === "wallet" ? "text-red-500" : ""
            }`} onClick={() => handleTabChange("wallet")}>Wallet</p>
          <p  className={`${
              activeItem === "activities" ? "text-red-500" : ""
            }`} onClick={() => handleTabChange("activities")}>Activities</p>
          <p  className={`${
              activeItem === "invitations" ? "text-red-500" : ""
            }`} onClick={() => handleTabChange("invitations")}>Invitations</p>
        </div>
        <div className="md:grid grid-cols-3 gap-4 mt-6 sm:flex">
          <div className="grid col-span-2">
            <AccountDetails active={activeItem === "profile" || activeItem === "home"} />
            <div>
              <BankAccount active={activeItem === "wallet" || activeItem === "home"} />
              <BillingDetails active={activeItem === "wallet" || activeItem === "home"} />
            </div>
            <Activities active={activeItem === "activities" || activeItem === "home"} />
          </div>
          <div className="grid">
            <Family active={activeItem === "profile" || activeItem === "home"} />
            <Invitations active={activeItem === "invitations" || activeItem === "home"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
