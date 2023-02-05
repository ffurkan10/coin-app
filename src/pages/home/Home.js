import React, { useEffect, useState } from "react";
import CoinList from "../../components/CoinList/CoinList";
import Favorites from "../../components/favorites/Favorites";
import Input from "../../components/input/Input";

const Home = ({ coin, setCoin }) => {
  const favList = [
    //Favorilere eklenecek olan coin'in bilgilerinin tutulduğu bir dizi.
    {
      id: 7,
      details: "Price",
    },
  ];

  const [filteredList, setFilteredList] = useState([]); //Kullanıcının arama yaptığı zaman filtrelenen coin verilerinin tutulduğu state.
  const [search, setSearch] = useState(""); // Kullanıcının input'a yazdığı değerin tutulduğu state.
  const [favorites, setFavorites] = useState([]); //Kullanıcının favori ettiği coin'lerin verilerinin tutulduğu state.

  useEffect(() => {
    setFilteredList(coin); //filteredList state'ine başlangıçta tüm coin verileri atanır.
  }, [coin]);

  const filterCoins = (e) => {
    //Kullanıcının input'a yazdığı değer kullanılarak coin verileri filtrelenir ve filtrelenen veriler filteredList state'ine atanır.
    const coinData = coin?.filter(
      // değerin tüm karakterlerinin küçük harf halini verir.
      (obj) => obj.name?.toLowerCase().indexOf(e.toLowerCase()) > -1 // aranılan değerin bulunup bulunmadığını kontrol eder, bulunmazsa -1 verir
    );
    setFilteredList(coinData);
    setSearch(e);
  };

  const handleFavorites = (id) => {
    const newFavorite = coin.find((coin) => coin.id === id);
    const already = favorites.find((favorite) => favorite.id === id); // verilen "id" ile eşleşen bir para birimi aranır.
    if (already) {
      // "true" değerini içeriyorsa
      setFavorites(favorites.filter((favorites) => favorites.id !== id)); // "favorites.filter" methodu ile filtrelenir ve silinir.
    } else {
      setFavorites([...favorites, newFavorite]); // eklenmemişse "favorites" listesine eklenir.
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
