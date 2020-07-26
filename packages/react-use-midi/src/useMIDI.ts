import { useState } from "react";
import * as WebMidi from "webmidi";

export const useMIDI = () => {
  const [inputs, setInputs] = useState();
  const [outputs, setOutputs] = useState();
  const [accessError, setAccessError] = useState();

  // @ts-ignore
  WebMidi.enable((err) => {
    if (err) {
      setAccessError(err);
    }
    // @ts-ignore
    setInputs(WebMidi.inputs);
    // @ts-ignore
    setOutputs(WebMidi.outputs);
  });

  return {
    // @ts-ignore
    getOutputById: WebMidi.getOutputById,
    // @ts-ignore
    getInputById: WebMidi.getInputById,
    inputs,
    outputs,
    accessError,
  };
};
