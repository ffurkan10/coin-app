import React from "react";

const Favorites = ({ favorites, favList }) => {
  console.log(favorites);
  return (
    <section className="favorite__list">
      {favorites?.length > 0 ? (
        <div className="favorite__list__title">
          <div className="favorite__list__title__left">
            <span>#</span>
            <p>Coin</p>
          </div>
          <ul className="favorite__list__title__list">
            {favList?.map((list) => (
              <li key={list.id} className="favorite__list__title__item">
                {list.details}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h3>Your favorite list is empty</h3>
      )}
      {favorites?.map((item) => {
        return (
          <div className="favorite__list__fav">
            <div className="favorite__list__fav__name">
              <img src={item.image} alt="" />
              <span>
                {" "}
                <strong> {item.name}</strong>
              </span>
              <span>{item.symbol}</span>
            </div>
            <div className="favorite__list__fav__value">
              <span>
                {item?.current_price?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Favorites;
