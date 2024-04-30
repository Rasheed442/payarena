import React, { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import NairaIcon from "../../assets/icons/dashboardIIcons/nairaIcon";
import NairaIcon2 from "../../assets/icons/dashboardIIcons/nairaIcon2";
import Card from "../../assets/images/card.png";
import MainSection from "../../components/MainSection";
import DataVendingModal from "../../modals/DataVendingModal";
import AirtimeVendingModal from "../../modals/AirtimeVendingModal";
import SendMoneyModal from "../../modals/SendMoneyModal";
import ScheduleTransferModal from "../../modals/ScheduleTransferModal";
import styled from "styled-components";
import TransactionComponent from "../../components/TransactionComponent";
export default function TransactionsPage() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const transactionList = [
    {
      name: "Total Transactions",
      amount: "0",
      rate: "5.27%",
    },
    {
      name: "Failed Transactions",
      amount: "0",
      rate: "1.78%",
    },
    {
      name: "Approved Transactions",
      amount: "0",
      rate: "1.78%",
    },
    {
      name: "Scheduled Transactions",
      amount: "0",
      rate: "0.78%",
    },
  ];
  return (
    <TransactionStyle>
      <div>
        <DashboardHeader
          title="Transaction History"
          desc="Realtime Insight on various transactions"
        />

        <SendMoneyModal
          modal={modal}
          closeModal={() => {
            setModal(false);
          }}
        />
        <ScheduleTransferModal
          modal={modal2}
          closeModal={() => {
            setModal2(false);
          }}
        />
        <AirtimeVendingModal
          modal={modal3}
          closeModal={() => {
            setModal3(false);
          }}
        />

        <DataVendingModal
          modal={modal4}
          closeModal={() => {
            setModal4(false);
          }}
        />

        {/* <MainSection
        action1={setModal}
        actionTitle1="Bills Payments"
        action2={setModal2}
        actionTitle2="Schedule Payments"
        action3={setModal3}
        actionTitle3="Airtime Vending"
        action4={setModal4}
        actionTitle4="Data Vending"
      /> */}
        <div className="top">
          {transactionList.map((t) => {
            return (
              <div
                className="main"
                style={{
                  backgroundColor:
                    t.name === "Failed Transactions"
                      ? "white"
                      : t?.name === "Approved Transactions"
                      ? "#2B86C7"
                      : t?.name === "Scheduled Transactions"
                      ? "white"
                      : "",
                }}
              >
                <div className="total">
                  <p
                    style={{
                      color:
                        t.name === "Failed Transactions"
                          ? "black"
                          : t?.name === "Approved Transactions"
                          ? "white"
                          : t?.name === "Scheduled Transactions"
                          ? "black"
                          : "",
                    }}
                  >
                    {t?.name}
                  </p>
                  <div>
                    <svg
                      width="19"
                      height="4"
                      viewBox="0 0 19 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.1002 0.75C3.0805 0.75 3.8752 1.30964 3.8752 2C3.8752 2.69036 3.0805 3.25 2.1002 3.25C1.11989 3.25 0.325195 2.69036 0.325195 2C0.325195 1.30964 1.11989 0.75 2.1002 0.75Z"
                        fill="#1C1C1C"
                      />
                      <path
                        d="M9.2002 0.75C10.1805 0.75 10.9752 1.30964 10.9752 2C10.9752 2.69036 10.1805 3.25 9.2002 3.25C8.21989 3.25 7.4252 2.69036 7.4252 2C7.4252 1.30964 8.21989 0.75 9.2002 0.75Z"
                        fill="#1C1C1C"
                      />
                      <path
                        d="M18.0752 2C18.0752 1.30964 17.2805 0.75 16.3002 0.75C15.3199 0.75 14.5252 1.30964 14.5252 2C14.5252 2.69036 15.3199 3.25 16.3002 3.25C17.2805 3.25 18.0752 2.69036 18.0752 2Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </div>
                </div>
                <div className="amount">
                  <h3
                    style={{
                      color:
                        t.name === "Failed Transactions"
                          ? "#464255"
                          : t?.name === "Approved Transactions"
                          ? "white"
                          : t?.name === "Scheduled Transactions"
                          ? "#464255"
                          : "",
                    }}
                  >
                    {t.amount}
                  </h3>
                  <span
                    style={{
                      color:
                        t.name === "Failed Transactions"
                          ? "#464255"
                          : t?.name === "Approved Transactions"
                          ? "white"
                          : t?.name === "Scheduled Transactions"
                          ? "#464255"
                          : "",
                    }}
                  >
                    {t.rate}{" "}
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z"
                        fill="#1C1C1C"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <TransactionComponent />
    </TransactionStyle>
  );
}

const TransactionStyle = styled.div`
  .top {
    display: grid;
    padding-top: 20px;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .main {
    background-color: #f58220;
    padding: 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
  }
  .total {
    display: flex;
    justify-content: space-between;
  }
  .total p {
    color: white;
    line-height: 20px;
    font-size: 18px;
    font-weight: 500;
  }
  .amount {
    display: flex;
    justify-content: space-between;
  }
  .amount h3 {
    font-size: 27px;
    line-height: 36px;
    color: white;
    font-weight: 900;
  }
  .amount span {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 7px;
    line-height: 18px;
    color: white;
  }
`;
