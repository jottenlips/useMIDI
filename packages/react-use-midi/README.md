# `react-use-midi`

> MIDI hook for react 🎹↩

## Usage

```
import { useMIDI } from 'react-use-midi';

const MyMIDIComponent = props => {
  const midi = useMIDI();

  useEffect(() => {
    midi.inputs.map((input) =>
      input.addListener("noteon", "all", (e) => {
        console.log(`${e.note.name}`);
      })
    );
  }, [midi])

  return <div>{midi.inputs.map(inp => <p key={inp.name}>inp.name<p>)}</div>
}
```

## Demo app

[useMIDI](https://jottenlips.github.io/useMIDI/index)

https://github.com/jottenlips/useMIDI/tree/main/packages/demo-react-use-midi
