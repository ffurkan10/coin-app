import React, { useEffect, useState } from "react";
import CoinList from "../../components/CoinList/CoinList";
import Favorites from "../../components/favorites/Favorites";
import Input from "../../components/input/Input";

const Home = ({ coin, setCoin }) => {
  const favList = [
    {
      id: 7,
      details: "Price",
    },
  ];

  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFilteredList(coin);
  }, [coin]);

  const filterCoins = (e) => {
    const coinData = coin?.filter(
      (obj) => obj.name?.toLowerCase().indexOf(e.toLowerCase()) > -1
    );
    setFilteredList(coinData);
    setSearch(e);
  };

  const handleFavorites = (id) => {
    const newFavorite = coin.find((coin) => coin.id === id);
    const already = favorites.find((favorite) => favorite.id === id);
    if (already) {
      setFavorites(favorites.filter((favorites) => favorites.id !== id));
    } else {
      setFavorites([...favorites, newFavorite]);
    }
  };
  return (
    <div>
      <Input onChange={(e) => filterCoins(e.target.value)} value={search} />
      <Favorites
        handleFavorites={handleFavorites}
        favList={favList}
        favorites={favorites}
      />
      <CoinList
        coin={coin}
        setcoin={setCoin}
        filteredList={filteredList}
        handleFavorites={handleFavorites}
      />
    </div>
  );
};

export default Home;
