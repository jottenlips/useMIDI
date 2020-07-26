import { useState } from "react";
import WebMidi from "webmidi";

export const useMIDI = () => {
  const [inputs, setInputs] = useState();
  const [outputs, setOutputs] = useState();
  const [accessError, setAccessError] = useState();

  WebMidi.enable((err) => {
    if (err) {
      setAccessError(err);
    }
    setInputs(WebMidi.inputs);
    setOutputs(WebMidi.outputs);
  });

  return {
    getOutputById: WebMidi.getOutputById,
    getInputById: WebMidi.getInputById,
    inputs,
    outputs,
    accessError,
  };
};
