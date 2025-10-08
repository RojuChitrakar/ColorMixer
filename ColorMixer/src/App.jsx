import { useState } from 'react'
import './App.css'

function App() {
  const colors = JSON.parse(localStorage.getItem('color'));
  const [red, setRed] = useState(colors && colors.red ? colors.red : 0);
  const [green, setGreen] = useState(colors && colors.green ? colors.green : 0);
  const [blue, setBlue] = useState(colors && colors.blue ? colors.blue : 0);

  const save = () => {
    localStorage.setItem("color", JSON.stringify({ red, green, blue }));
  };

  return (
    <div className="color-mixer-container">
      <h1>🎨 Color Mixer</h1>

      <div
        className="color-preview"
        style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      ></div>

      <div className="slider-group">
        <label>Red: {red}</label>
        <input
          type="range"
          min={0}
          max={255}
          onChange={(e) => setRed(e.target.value)}
          value={red}
          className="slider red"
        />

        <label>Green: {green}</label>
        <input
          type="range"
          min={0}
          max={255}
          onChange={(e) => setGreen(e.target.value)}
          value={green}
          className="slider green"
        />

        <label>Blue: {blue}</label>
        <input
          type="range"
          min={0}
          max={255}
          onChange={(e) => setBlue(e.target.value)}
          value={blue}
          className="slider blue"
        />
      </div>

      <button className="save-btn" onClick={save}>💾 Save Color</button>
    </div>
  );
}

export default App;
