import React from "react";
import Table from "./Table";
import "./App.css";

function App() {
  let data = [];
  for (let i = 1; i <= 50; i++) {
    let randomAge = Math.floor(Math.random() * 50) + 18; // Random age between 18 and 67
    let randomPhone =
      Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000; // Random 10-digit phone number
    let randomDate = new Date(
      +new Date() - Math.floor(Math.random() * 10000000000)
    ); // Random date within the last 10000 days
    let entry = {
      sno: i,
      customerName: `Customer ${i}`,
      age: randomAge,
      phone: randomPhone,
      location: `Location ${i}`,
      created_at: randomDate,
    };
    data.push(entry);
  }

  return (
    <div className="" id="main">
      <Table data={data} itemsPerPage={20} />
    </div>
  );
}

export default App;
