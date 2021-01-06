import { h } from 'preact';

import "./style.css";

export default function App(props) {
  return (
    <div>
      <h1 style={{ color: props.color }}>Hello, World!</h1>
    </div>
  );
}
