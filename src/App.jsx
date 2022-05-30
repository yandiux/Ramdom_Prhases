import { useState } from "react";
import "./App.css";
import Buttom from "./components/Buttom";
import QuoteBox from "./components/QuoteBox";
import quotes from "./json/quotes.json";

const arrayColor = [
  "#4AC4D0",
  "#9E0F17",
  "#CF507A",
  "#618DC2",
  "#BBEE2E",
  "#222273",
  "#5E07A5",
  "#F71632",
  "#087956",
  "#943A98",
  "#89FA78",
  "#46129E",
  "#CF0608",
  "#BDA31A",
];

function App() {
  const generateRandom = (array) => {
    return Math.floor(Math.random() * array.length);
  };

  const getElementRandom = (array) => {
    const i = generateRandom(array);
    return array[i];
  };

  const [quotesRandom, setQuotesRandom] = useState(getElementRandom(quotes));
  const [colorRandom, setColorRandom] = useState(getElementRandom(arrayColor));

  const clickButton = () => {
    setQuotesRandom(getElementRandom(quotes));
    setColorRandom(getElementRandom(arrayColor));
  };

  const appStyle = {
    backgroundColor: colorRandom,
  };

  return (
    <div style={appStyle} className="App">
      <QuoteBox quotesRandom={quotesRandom} colorRandom={colorRandom} />
      <Buttom clickButton={clickButton} colorRandom={colorRandom} />
    </div>
  );
}

export default App;
