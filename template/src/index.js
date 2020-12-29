import { h } from "preact";

export default function App(props) {
  return (
    <div>
      <h1 style={{ color: props.color }}>Hello, World!</h1>
    </div>
  );
}
