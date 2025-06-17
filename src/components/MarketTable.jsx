import React from "react";
import "./MarketTable.css";

const MarketTable = ({ pools }) => (
  <div className="market-table-container">
    <table className="market-table">
      <thead>
        <tr>
          <th>Token Pair</th>
          <th>Total Liquidity</th>
          <th>Total Borrowed</th>
          <th>Lending APY</th>
          <th>Borrowing APY</th>
        </tr>
      </thead>
      <tbody>
        {pools.map((pool) => (
          <tr key={pool.id}>
            <td>
              <span className="token-icons">
                {pool.baseTokenIcon}
                {pool.quoteTokenIcon}
              </span>
              <span className="token-pair">{pool.tokenPair}</span>
            </td>
            <td>{pool.totalLiquidity}</td>
            <td>{pool.totalBorrowed}</td>
            <td>{pool.lendingAPY}</td>
            <td>{pool.borrowingAPY}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default MarketTable;
