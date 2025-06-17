import React from "react";
import "../styles/PoolCard.css";

const PoolCard = ({ pool }) => (
  <div className="pool-card">
    <div className="pool-card-header">
      <span className="token-icons">
        {pool.baseTokenIcon}
        {pool.quoteTokenIcon}
      </span>
      <span className="token-pair">{pool.tokenPair}</span>
    </div>
    <div className="pool-card-body">
      <div>
        <strong>Total Liquidity:</strong> {pool.totalLiquidity}
      </div>
      <div>
        <strong>Total Borrowed:</strong> {pool.totalBorrowed}
      </div>
      <div>
        <strong>Lending APY:</strong> {pool.lendingAPY}
      </div>
      <div>
        <strong>Borrowing APY:</strong> {pool.borrowingAPY}
      </div>
    </div>
  </div>
);

export default PoolCard;
