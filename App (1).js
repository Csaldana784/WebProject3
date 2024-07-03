import React, { useState, useEffect } from "react";
import Title from "./Title";
import Entry from "./Entry";
import Message from "./Message";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  const [year, setYear] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    if (year) {
      const seasonYear = encodeURIComponent(year);
      const url = `https://ergast.com/api/f1/${seasonYear}/constructorStandings.json`;
      console.log(url);

      fetch(url)
        .then((r) => r.json())
        .then((r) => setData(r))
        .catch((e) => setData(e));
    }
  }, [year]);

  return (
    <div className="App">
      <Title text="Enter F1 Season 1950-2024" />
      <Entry action={setYear} />
      <Message year={year} data={data} text1="Year:" text2="Data:" />
      <Footer />
    </div>
  );
}
