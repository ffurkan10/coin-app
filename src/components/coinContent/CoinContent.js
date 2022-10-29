import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Chart from "../charts/Chart";

const CoinContent = () => {
  const { id } = useParams();
  const [content, setContent] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=true&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
      )
      .then((res) => {
        setContent(res.data);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/search/trending`)
      .then((res) => {
        setSearch(res.data.coins);
      });
  }, []);

  return (
    <div className="coinContent">
      <div className="coinContent__container">
        <div className="coinContent__container__title">
          <div className="coinContent__container__title__rank">
            <p>Rank #{content.market_cap_rank}</p>
          </div>
          <div className="coinContent__container__title__coin">
            <img src={content?.image?.thumb} alt="" />
            <h2>{content?.name}</h2>
            <h3>({content?.symbol})</h3>
          </div>
          <div className="coinContent__container__title__price">
            <h1>
              {content?.market_data?.current_price?.usd.toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                }
              )}
            </h1>
          </div>
        </div>
        <div className="coinContent__container__explanation">
          <div className="coinContent__container__explanation__left">
            <div className="coinContent__container__explanation__left__info">
              <h2>{content.symbol} Price Statistics</h2>
              <div>
                <p>{content.name} Price Today</p>
              </div>
              <div>
                <p>{content.name} Price</p>
                <span>
                  {content?.market_data?.current_price?.usd.toLocaleString(
                    "en-US",
                    {
                      style: "currency",
                      currency: "USD",
                    }
                  )}
                </span>
              </div>
              <div>
                <p>24h low / 24h high</p>
                <span>
                  {content?.market_data?.low_24h?.usd.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}{" "}
                  /
                  {content?.market_data?.high_24h?.usd.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
              <div>
                <p>Market Cap Rank</p>
                <span>Rank #{content.market_cap_rank}</span>
              </div>
              <div>
                <p>Market Cap</p>
                <span>
                  {content?.market_data?.market_cap?.usd.toLocaleString(
                    "en-US",
                    {
                      style: "currency",
                      currency: "USD",
                    }
                  )}
                </span>
              </div>
              <div>
                <p>All-Time High</p>
                <span>
                  {content?.market_data?.ath?.usd.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}{" "}
                  /{" "}
                  {content?.market_data?.ath_change_percentage?.usd.toFixed(2)}%
                </span>
              </div>
              <div>
                <p>All-Time Low</p>
                <span>
                  {content?.market_data?.atl?.usd.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}{" "}
                  /{" "}
                  {content?.market_data?.atl_change_percentage?.usd.toFixed(2)}%
                </span>
              </div>
              <div>
                <p>Volume / Market Cap</p>
                <span>
                  {(
                    content?.market_data?.total_volume?.usd /
                    content?.market_data?.market_cap?.usd
                  ).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
            </div>
          </div>
          <div className="coinContent__container__explanation__right">
            <div className="coinContent__container__explanation__right__headers">
              <h3>{content.symbol} Price Today</h3>
              <p>
                <strong>{content.name} price</strong> today is {""}
                {content?.market_data?.current_price?.usd.toLocaleString(
                  "en-US",
                  {
                    style: "currency",
                    currency: "USD",
                  }
                )}{" "}
                with a 24-hour trading volume of {""}
                {content?.market_data?.current_price?.usd.toLocaleString(
                  "en-US",
                  {
                    style: "currency",
                    currency: "USD",
                  }
                )}
                . {content.symbol} price is up {""}
                {content?.market_data?.price_change_percentage_24h_in_currency?.usd.toLocaleString(
                  "en-US",
                  {
                    style: "currency",
                    currency: "USD",
                  }
                )}{" "}
                in the last 24 hours. It has circulating supply of{" "}
                {content?.market_data?.circulating_supply.toLocaleString(
                  "en-US",
                  {
                    style: "currency",
                    currency: "USD",
                  }
                )}
                . <strong>{content.symbol}</strong> coins and a total supply of{" "}
                {content?.market_data?.total_supply.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
                .{" "}
              </p>
            </div>
            <div className="coinContent__container__explanation__right__headers">
              <h3>What was the highest price for {content.name}?</h3>
              <p>
                <strong>{content.name}</strong> hit an all time high of {""}
                {content?.market_data?.ath?.usd.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}{" "}
                on{" "}
                {content?.market_data?.ath_date?.usd.toLocaleString("en-US", {
                  timeZone: "UTC",
                })}
                .
              </p>
            </div>
            <div className="coinContent__container__explanation__right__headers">
              <h3>What was the lowest price for {content.name}?</h3>
              <p>
                <strong>{content.name}</strong> hit an all time low of {""}
                {content?.market_data?.atl?.usd.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}{" "}
                on{" "}
                {content?.market_data?.atl_date?.usd.toLocaleString("en-US", {
                  timeZone: "UTC",
                })}
                .
              </p>
            </div>
            <div className="coinContent__container__explanation__right__headers">
              <h3>What was the 24 hour trading volume of {content.name}?</h3>
              <p>
                The 24 hour trading volume of {content.name} is {""}
                {content?.market_data?.current_price?.usd.toLocaleString(
                  "en-US",
                  {
                    style: "currency",
                    currency: "USD",
                  }
                )}
                .
              </p>
            </div>
          </div>
        </div>
        <div className="coinContent__container__chart">
          <Chart />
        </div>
        <h2>Treding Coins</h2>
        <div className="coinContent__container__trend">
          {search.map((popular) => (
            <div
              className="coinContent__container__trend__card"
              key={popular?.item?.id}
            >
              <div className="coinContent__container__trend__card__img">
                <img src={popular?.item?.small} alt="" />
              </div>
              <div className="coinContent__container__trend__card__detail">
                <p>
                  <strong>
                    {popular?.item?.name} ({popular?.item?.symbol})
                  </strong>
                </p>
                <p> {popular?.item?.price_btc.toFixed(10)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinContent;
