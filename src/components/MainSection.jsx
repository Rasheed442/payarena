import Card from "../assets/images/card.png";
import NairaIcon from "../assets/icons/dashboardIIcons/nairaIcon.jsx";
import NairaIcon2 from "../assets/icons/dashboardIIcons/nairaIcon2.jsx";
import React, { useEffect, useState } from "react";
import MainSectionCard from "./MainSectionCard.jsx";
import Axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function MainSection({
  action1,
  action2,
  action3,
  action4,
  actionTitle1,
  actionTitle2,
  actionTitle3,
  actionTitle4,
}) {
  const [MyData, setMydata] = useState();
  const [loading, setLoading] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    setLoading(true);
    Axios.get(`${import.meta.env.VITE_BASE_URL}wallet/balance`, config).then(
      (response) => {
        setMydata(response?.data?.Data);
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="p-[1.4vw] bg-white grid grid-cols-10 rounded-lg w-full my-4">
      <div className="col-span-4 pr-[1.2vw] border-r border-[#E8E8E8]">
        <img src={Card} alt="" />
      </div>
      <div className="col-span-2 grid place-items-center mr-[1.2vw] border-r border-[#E8E8E8]">
        <div className="">
          <div className="font-bold flex align-center gap-1">
            ₦
            {loading ? (
              <Skeleton count={1} width="20px" height="20px" />
            ) : (
              MyData?.balance
            )}
          </div>
          <div className="text-sm">Wallet balance</div>
        </div>
      </div>
      <MainSectionCard
        actionTitle1={actionTitle1}
        action1={action1}
        actionTitle2={actionTitle2}
        action2={action2}
      />
      <MainSectionCard
        actionTitle1={actionTitle3}
        actionTitle2={actionTitle4}
        action1={action3}
        action2={action4}
      />
    </div>
  );
}
