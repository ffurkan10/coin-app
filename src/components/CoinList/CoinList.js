import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

const CoinList = ({ filteredList, handleFavorites, item }) => {
  return (
    <div className="coin">
      <div className="coin__stats">
        <div className="coin__stats__names">
          <span>#</span>
          <p>Coin</p>
        </div>
        <div className="coin__stats__values">
          <p>Price</p>
          <p>24h</p>
          <p>Total Volume</p>
          <p>Mkt Cap</p>
        </div>
      </div>

      <div className="coin__container">
        {filteredList?.map((money) => (
          <div className="coin__container__list" key={money.id}>
            <div className="coin__container__list__name">
              <div className="coin__container__list__name__rank">
                <button
                  onClick={() => {
                    handleFavorites(money?.id);
                  }}
                >
                  <AiOutlineStar />
                </button>
                <span>{money.market_cap_rank}</span>
              </div>

              <Link
                state={{
                  detail: filteredList.filter((item) => item.id === money.id),
                }}
                to={`/coins/${money.id}`}
              >
                <div className="coin__container__list__name__symbol">
                  <img src={money.image} alt="" />
                  <p>{money.name}</p>
                  <p>{money.symbol}</p>
                </div>
              </Link>
            </div>

            <ul className="coin__container__list__value">
              <li>
                {money?.current_price?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </li>
              <li
                className={
                  money?.price_change_percentage_24h < 0
                    ? `coin__container__list__value--down`
                    : `coin__container__list__value--up`
                }
              >
                {money?.price_change_percentage_24h?.toFixed(2)}%
              </li>
              <li>
                {money?.total_volume?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </li>
              <li>
                {money?.market_cap?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoinList;
