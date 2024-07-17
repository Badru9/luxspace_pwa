import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Browse from "./components/Browse";
import Arrived from "./components/Arrived";
import Client from "./components/Client";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Offline from "./components/Offline";
import Splash from "./pages/Splash";

const App = () => {
  const [items, setItems] = useState([]);
  const [isOnline, setIsOnline] = useState(!navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);

  function handleOfflineStatus() {
    setIsOnline(!navigator.onLine);
  }

  const fetchItems = async () => {
    const response = await fetch("https://bwacharity.fly.dev/items", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const { nodes } = await response.json();

    setItems(nodes);
  };

  useEffect(() => {
    fetchItems();

    if (!document.querySelector('script[src="/carousel.js"]')) {
      const script = document.createElement("script");

      script.src = "/carousel.js";

      script.async = false;

      document.body.appendChild(script);
    }

    handleOfflineStatus();

    window.addEventListener("online", handleOfflineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return function () {
      window.removeEventListener("online", handleOfflineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, [isOnline]);

  return (
    <>
      {isLoading ? (
        <Splash />
      ) : (
        <>
          {isOnline && <Offline />}
          <Header />
          <Hero />
          <Browse />
          <Arrived items={items} />
          <Client />
          <Aside />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
