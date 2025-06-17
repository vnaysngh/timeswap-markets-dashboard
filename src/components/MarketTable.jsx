import React from "react";
import "../styles/MarketTable.css";

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
            <td data-label="Token Pair">
              <span className="token-icons">
                {pool.baseTokenIcon}
                {pool.quoteTokenIcon}
              </span>
              <span className="token-pair">{pool.tokenPair}</span>
            </td>
            <td data-label="Total Liquidity">{pool.totalLiquidity}</td>
            <td data-label="Total Borrowed">{pool.totalBorrowed}</td>
            <td data-label="Lending APY">{pool.lendingAPY}</td>
            <td data-label="Borrowing APY">{pool.borrowingAPY}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default MarketTable;
