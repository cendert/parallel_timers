import React from "react";
import "./styles.css";
import {Timer} from "./components/timer";
import {Timers} from "./components/timers";

export default function App() {
  return (
    <div className="App">
        <Timers>
            hi
        </Timers>
        <Timer time={2000}/>
        <Timer time={4000}/>
    </div>
  );
}
