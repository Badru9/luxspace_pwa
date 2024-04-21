import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Browse from "./components/Browse";
import Arrived from "./components/Arrived";
import Client from "./components/Client";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

const App = () => {
  const [items, setItems] = useState([]);

  console.log(items);

  const fetchItems = async () => {
    const response = await fetch(process.env.REACT_APP_APIKEY);
    const { nodes } = await response.json();
    setItems(nodes);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Client />
      <Aside />
      <Footer />
    </>
  );
};

export default App;
