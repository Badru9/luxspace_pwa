import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Browse from "./components/Browse";
import Arrived from "./components/Arrived";
import Client from "./components/Client";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Client />
      <Aside />
      <Footer />
    </>
  );
};

export default App;
