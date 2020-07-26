import { useState } from "react";
import * as WebMidi from "webmidi";
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
    ...WebMidi,
    getOutputById: WebMidi.getOutputById,
    inputs,
    outputs,
    accessError,
  };
};
