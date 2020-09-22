import React, { useState } from "react";
import "./styles.css";
import { presetTimers } from "./types/presetTimers";
import { Timers } from "./components/timers";
import { AddCustomTimerForm } from "./containers/addCustomTimerForm";
import { Grid } from "./components/grid";
import { Button } from "./components/button";
import { BottomBar } from "./components/bottomBar";
import { TitleBar } from "./components/titleBar";
import { AddTimerTypeChoice } from "./containers/addTimerTypeChoice";
import { AddPresetTimer } from "./containers/addPresetTimer";

// import { debugTimers } from "./debug/debug_timers";

export const App = () => {
  const [timers, setTimers] = useState({});
  // const [timers, setTimers] = useState(debugTimers)
  const [newTimer, setNewTimer] = useState({});
  const [showAddTimerTypeChoice, setShowAddTimerTypeChoice] = useState(false);
  const [showAddCustomTimer, setShowAddCustomTimer] = useState(false);
  const [showAddPresetTimer, setShowAddPresetTimer] = useState(false);
  const [showTimers, setShowTimers] = useState(true);

  const addTimer = () => {
    setShowTimers(false);
    setShowAddPresetTimer(false);
    setShowAddCustomTimer(false);
    setShowAddTimerTypeChoice(true);
  };

  const addCustomTimer = () => {
    setShowAddTimerTypeChoice(false);
    setShowAddCustomTimer(true);
  };

  const addPresetTimer = () => {
    setShowAddTimerTypeChoice(false);
    setShowAddPresetTimer(true);
  };

  const playPause = () => {};

  const handleInputChange = ({ target: { id, value } }) => {
    setNewTimer({ ...newTimer, [id]: value });
  };

  const handleDelete = (key) => {
    console.log(key);
    console.log(timers);
    let tempTimers = { ...timers };
    delete tempTimers[key];
    setTimers(tempTimers);
  };

  const resetAddCustomTimerForm = () => {
    setShowAddCustomTimer(false);
    setNewTimer({});
  };

  const handleAddPresetTimer = (key) => {
    setTimers({ ...timers, [Date.now()]: presetTimers[key] });
    setShowAddPresetTimer(false);
    setShowTimers(true);
  };

  const handleAddTimerFormClose = () => {
    resetAddCustomTimerForm();
    setShowTimers(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimers({ ...timers, [Date.now()]: newTimer });
    resetAddCustomTimerForm();
    setShowTimers(true);
  };

  return (
    <div className="App">
      <Grid>
        <div style={{ backgroundColor: "lightgrey", gridArea: "center" }} />
        <TitleBar>
          <h1>Grand Theft Timer</h1>
        </TitleBar>

        {/*--content--*/}
        {/*list of timers*/}
        {showAddTimerTypeChoice && (
          <AddTimerTypeChoice>
            <Button onClick={() => addPresetTimer()}>Add Preset Timer</Button>
            <Button onClick={() => addCustomTimer()}>Add Custom Timer</Button>
          </AddTimerTypeChoice>
        )}
        {showAddCustomTimer && (
          <AddCustomTimerForm
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            handleAddTimerFormClose={handleAddTimerFormClose}
          />
        )}
        {showAddPresetTimer && (
          <AddPresetTimer
            handleAddPresetTimer={handleAddPresetTimer}
            presetTimers={presetTimers}
          />
        )}

        {/*--bottom-bar--*/}
        {/*add timer*/}
        {/* pre-made*/}
        {/* custom*/}
        {showTimers && <Timers timers={timers} handleDelete={handleDelete} />}
        <BottomBar>
          <Button onClick={() => addTimer()}>add timer</Button>
          <Button onClick={() => playPause()}>play/pause</Button>
        </BottomBar>
      </Grid>
    </div>
  );
};
