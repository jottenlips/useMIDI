import { useState } from "react";
export const useMIDI = () => {
  const [inputs, setInputs] = useState();
  const [outputs, setOutputs] = useState;

  if (navigator.requestMIDIAccess) {
    console.log("This browser supports WebMIDI!");
  } else {
    console.log("WebMIDI is not supported in this browser.");
  }
  const onMIDISuccess = (midi) => {
    setInputs(midi.inputs);
    setOutputs(midi.outputs);
  };
  const onMIDIFailure = () => {
    console.log("Could not access your MIDI devices.");
  };

  navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
};
