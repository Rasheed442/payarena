import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { TiArrowUnsorted } from "react-icons/ti";
import Axios from "axios";
import { AiOutlineDown, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IoFilter } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function TransactionComponent() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  const [myData, setMydata] = useState();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 7;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = myData?.slice(firstIndex, lastIndex); /// this is what you are mapping to the table
  const npage = Math?.ceil(myData?.length / recordPerPage);
  const numbers = Array.from(
    { length: npage > 0 ? npage : 1 },
    (_, i) => i + 1
  );
  // pagination state

  useEffect(() => {
    setLoading(true);
    Axios.get(`${import.meta.env.VITE_BASE_URL}transaction/list`, config).then(
      (response) => {
        setLoading(false);
        setMydata(response?.data?.Data);
      }
    );
  }, []);

  const columnHeader = [
    {
      name: "Transaction Id",
      index: "TransactionId",
    },
    {
      name: "StatusDescription",
      index: "StatusDescription",
    },
    {
      name: "Amount",
      index: "Amount",
    },
    {
      name: "Scheme",
      index: "Scheme",
    },
    {
      name: "Description",
      index: "Description",
    },
    {
      name: "Currency",
      index: "Currency",
    },
    // {
    //   name: "Order Id",
    //   index: "OrderId",
    // },
    {
      name: "Smartcard Number",
      index: "SmartcardNumber",
    },
    {
      name: "Convenience Fee",
      index: "ConvenienceFee",
    },
    {
      name: "Date",
      index: "Date",
    },
    {
      name: "Status",
      index: "status",
    },
  ];
  return (
    <TransactionTable>
      <div className="tablecontent">
        <div className="header">
          <div className="filters">
            <p style={{ fontSize: "14px", fontWeight: "900" }}>
              Transaction History
            </p>
            <p className="sideline">
              Transfer <AiOutlineDown size={10} />
            </p>
            <p
              className="sideline"
              style={{ color: "#F58220", fontWeight: "800" }}
            >
              <GoDotFill />
              All Transactions
            </p>
            {/* <p className="sideline2">
              <GoDotFill />
              Approved
            </p>
            <p className="sideline2">
              <GoDotFill />
              Failed
            </p>
            <p className="sideline2">
              <GoDotFill />
              Scheduled
            </p> */}
            <p>
              <IoFilter size={15} style={{ color: "#1C1C1C" }} />
            </p>
          </div>
          <div className="pagins">
            <p>Rows per page:</p>
            <select>
              <option>7</option>
            </select>
            <div className="arrow">
              <button onClick={prevPage}>
                <AiOutlineLeft />
              </button>
              <button>{currentPage}</button>
              <button onClick={NxtPage}>
                <AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
        {loading && <Skeleton count={5} width="" height="10vh" />}

        {loading ? (
          ""
        ) : (
          <div className="top">
            <div className="gridoutside">
              <table className="table">
                <thead>
                  <tr>
                    {columnHeader.map((p) => {
                      return <th>{p.name}</th>;
                    })}
                  </tr>
                </thead>

                <tbody>
                  {records?.map((m) => {
                    return (
                      <tr>
                        <td>{`${m["Transaction Id"]}`}</td>
                        <td>
                          {m?.StatusDescription === null
                            ? "-----"
                            : m?.StatusDescription}
                        </td>
                        <td>{m?.Amount}</td>
                        <td>{m?.Scheme}</td>
                        <td>{m?.Description}</td>
                        <td>{m?.Currency}</td>
                        {/* <td>{`${m["Order Id"]}`}</td> */}
                        <td>{`${m["Smartcard Number"]}`}</td>
                        <td>{`${m["Convenience Fee"]}`}</td>
                        <td>{m?.Date}</td>
                        <td>
                          <span
                            style={{
                              backgroundColor:
                                m?.Status === "Pending"
                                  ? "yellow"
                                  : m?.Status === "APPROVED"
                                  ? "green"
                                  : m?.Status === "Failed"
                                  ? "red"
                                  : "",
                            }}
                          ></span>
                          {m?.Status}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </TransactionTable>
  );
  function prevPage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }
  function NxtPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default TransactionComponent;

const TransactionTable = styled.div`
  .header {
    display: flex;
    padding: 40px 10px 0px 10px;
    justify-content: space-between;
  }

  .filters {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .filters p {
    display: flex;
    font-size: 12px;
    gap: 10px;
    align-items: center;
  }
  .sideline {
    padding-left: 20px;
    font-size: 10px;
    border-left: 1px solid #1c1c1c33;
  }
  .sideline2 {
    padding-right: 20px;

    border-right: 1px solid #1c1c1c33;
  }
  .top {
    overflow: hidden;
    overflow: scroll;
    background-color: white;
  }
  .pagins {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .gridoutside {
    width: 150vw;
    background-color: white;
    overflow: hidden;
    overflow: scroll;
  }
  .tablecontent {
    border-radius: 15px;
    background-color: white;
    margin-top: 30px;
  }
  .table {
    border-collapse: collapse;
    font-size: 11.5px;
    width: 100%;
  }
  /* .table td span {
    padding-left: 20px;
    height: 0.3px;
    border-radius: 50%;
    width: 0.3px;
  } */

  .table th {
    font-weight: 600;
    text-align: left;
    font-size: 11px;
    padding: 10px;
    color: #687182;
    border-bottom: 1px solid gainsboro;
    border-right: 1px solid rgba(213, 219, 229, 1);

    &:last-of-type {
      border-right: none;
    }
  }

  /* .table tr:nth-child(odd) {
    background-color: #f6f6f6;
} */

  .table td {
    padding: 18px;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 11px;
    border-top: 1px solid gainsboro;
    color: #1c1c1c;
    line-height: 20px;
    cursor: pointer;
    font-weight: 500;
  }
  .table span {
    font-size: 14px;
    font-weight: 400;
    color: #667085;
  }
  .row {
    display: flex;
    justify-content: space-between;
    padding: 25px;
  }

  .row span {
    font-size: 13px;
    color: #687182;
  }

  .pagins {
    display: flex;
    gap: 7px;
    align-items: center;
  }

  .pagins p {
    font-size: 14px;
    color: #687182;
  }

  .pagins select {
    color: #1c1c1c;
    font-size: 12px;
    line-height: 18px;
    background-color: transparent;
    border: 1px solid gainsboro;
    padding: 2px;
    border-radius: 3px;
  }

  .arrow {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .arrow button {
    color: #1c1c1c;
    font-size: 12px;
    line-height: 18px;
    padding: 4px;
    background-color: transparent;
    border: 1px solid gainsboro;
    border-radius: 3px;
  }
`;
