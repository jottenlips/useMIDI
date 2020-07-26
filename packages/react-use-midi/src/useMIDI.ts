import { useState } from "react";
import * as WebMidi from "webmidi";

export const useMIDI = () => {
  const [inputs, setInputs] = useState();
  const [outputs, setOutputs] = useState();
  const [getOutputById, setGetOutputById] = useState({ getter: undefined });
  const [getInputById, setGetInputById] = useState({ getter: undefined });

  const [accessError, setAccessError] = useState();
  // @ts-ignore
  WebMidi.enable((err) => {
    if (err) {
      setAccessError(err);
      console.log(err);
    }
    // @ts-ignore
    setInputs(WebMidi.inputs);
    // @ts-ignore
    setOutputs(WebMidi.outputs);
    // @ts-ignore
    setGetOutputById({ getter: (id) => WebMidi.getOutputById(id) });
    // @ts-ignore
    setGetInputById({ getter: (id) => WebMidi.getInputById(id) });
  });

  return {
    getOutputById: getOutputById.getter,
    getInputById: getInputById.getter,
    inputs,
    outputs,
    accessError,
  };
};
