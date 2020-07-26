import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useMIDI } from "react-use-midi/lib";

const rainbow = [
  "#9400D3",
  "#4B0082",
  "#0000FF",
  "#00FF00",
  "#FFFF00",
  "#FF7F00",
  "#FF0000",
];
function App() {
  const midi = useMIDI();
  const [note, setNote] = useState();
  const [octave, setOctave] = useState();
  const [output, setOutput] = useState();
  const [input, setInput] = useState();

  useEffect(() => {
    midi.inputs &&
      midi.inputs.map((input) =>
        input.addListener("noteon", "all", (e) => {
          setNote(`${e.note.name}`);
          setOctave(e.note.octave);
        })
      );
  }, [midi]);

  return (
    <div className="App" key={midi}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Learn MIDI. Plug in a MIDI Keyboard.</h1>
        <h1
          style={{
            color: rainbow[octave + 1],
          }}
        >
          {note}
          {octave}
        </h1>
        <h2>Input</h2>
        <select value={input} onChange={(e) => setInput(e.target.value)}>
          {midi.inputs &&
            midi.inputs.map((inp) => (
              <option key={inp.id} value={inp.id}>
                {inp.name}
              </option>
            ))}
        </select>
        <h2>Output</h2>
        <select
          value={output}
          onChange={(e) => {
            setOutput(e.target.value);
          }}
        >
          {midi.outputs &&
            midi.outputs.map((out) => (
              <option key={out.id} value={out.id}>
                {out.name}
              </option>
            ))}
        </select>

        <button
          style={{
            padding: "20px",
            margin: "20px",
          }}
          onClick={() => {
            output &&
              midi.getOutputById &&
              midi.getOutputById(output).playNote("C3");
          }}
        >
          Play C3 to output
        </button>
      </header>
    </div>
  );
}

export default App;
