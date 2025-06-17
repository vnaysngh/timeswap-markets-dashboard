import React, { useState } from "react";
import poolsData from "../poolsData";
import MarketTable from "./MarketTable";
import "./Dashboard.css";

const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const filteredPools = poolsData.filter((pool) =>
    pool.tokenPair.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <div className="filter-box">
        <input
          type="text"
          placeholder="Filter by token pair..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <MarketTable pools={filteredPools} />
    </div>
  );
};

export default Dashboard;
