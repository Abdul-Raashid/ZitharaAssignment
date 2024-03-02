import React, { useState } from "react";
import { FaSort } from "react-icons/fa";

function Table(props) {
  const { data, itemsPerPage } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [isDateAsc, setIsDateAsc] = useState(false);
  const [isTimeAsc, setIsTimeAsc] = useState(false);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handleFilter = (searchTerm) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredItems = props.data.filter(
      (item) =>
        item.customerName.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.location.toLowerCase().includes(lowerCaseSearchTerm)
    );
    setFilteredData(filteredItems);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSort = (type) => {
    const newData = [...filteredData];
    let isAscending = true;
    if (type === "date") {
      isAscending = isDateAsc;
      newData.sort((a, b) => new Date(a.created_at) - new Date(b.created_at)); // Sort by date
    } else if (type === "time") {
      isAscending = isTimeAsc;
      newData.sort((a, b) => {
        const timeA = a.created_at.getHours() * 60 + a.created_at.getMinutes();
        const timeB = b.created_at.getHours() * 60 + b.created_at.getMinutes();
        return timeA - timeB;
      });
    }
    if (!isAscending) {
      newData.reverse();
    }

    if (type === "date") {
      setIsDateAsc(!isDateAsc);
    } else if (type === "time") {
      setIsTimeAsc(!isTimeAsc);
    }
    setFilteredData(newData);
  };

  return (
    <div className="">
      <div className="max-w-md mx-auto border rounded-lg my-5">
        <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            onChange={(e) => handleFilter(e.target.value)}
            placeholder="Search something.."
          />
        </div>
      </div>
      {currentData !== 0 && (
        <table className="w-4/5 mx-auto border-2 border-white  ">
          <thead>
            <tr className="bg-white text-black">
              <th>sno</th>
              <th>customerName</th>
              <th>age</th>
              <th>phone</th>
              <th>location</th>
              <th
                className="p-2 hover:cursor-pointer"
                onClick={() => handleSort("date")}
              >
                <div className="flex justify-center items-center gap-2">
                  date <FaSort />
                </div>
              </th>
              <th
                className="p-2 hover:cursor-pointer"
                onClick={() => handleSort("time")}
              >
                <div className="flex justify-center items-center gap-2">
                  time <FaSort />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className=" ">
            {currentData.map((row, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 1 && props.isLight ? "bg-green-200" : "border-2"
                }
              >
                <td className="p-2 text-center">{row.sno}</td>
                <td className="p-2 text-center">{row.customerName}</td>
                <td className="p-2 text-center">{row.age}</td>
                <td className="p-2 text-center">{row.phone}</td>
                <td className="p-2 text-center">{row.location}</td>
                <td className="p-2 text-center">
                  {String(row.created_at.getDate()) +
                    "/" +
                    String(row.created_at.getMonth()) +
                    "/" +
                    String(row.created_at.getFullYear())}
                </td>
                <td className="p-2 text-center">
                  {String(row.created_at.getHours()) +
                    ":" +
                    String(row.created_at.getMinutes())}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="flex w-full justify-center gap-2 my-4">
        <button
          className="bg-green-400 font-semibold p-2 rounded"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="p-2">
          {currentPage} / {totalPages}
        </span>
        <button
          className="bg-green-400 font-semibold p-2 rounded"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Table;
