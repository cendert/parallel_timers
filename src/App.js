import React, {useState} from "react";
import "./styles.css";
import {Timers} from "./components/timers";
import {AddTimerForm} from "./containers/addTimerForm";
import {Grid} from "./components/grid";
import {Button} from "./components/button";
import {BottomBar} from "./components/bottomBar";
import {TitleBar} from "./components/titleBar";

import {debugTimers} from "./debug/debug_timers";


export const App = () => {
    // const [timers, setTimers] = useState({})
    const [timers, setTimers] = useState(debugTimers)
    const [newTimer, setNewTimer] = useState({})
    const [showAddTimer, setShowAddTimer] = useState(false)

    const addTimer = () => {
        setShowAddTimer(true)
    }

    const playPause = () => {

    }

    const handleInputChange = ({target: {id, value}}) => {
        setNewTimer({...newTimer, [id] : value})
    }

    const handleDelete = key => {
        console.log(key)
        console.log(timers)
        let tempTimers = {...timers}
        delete tempTimers[key]
        setTimers(tempTimers)
    }

    const resetAddTimerForm = () => {
        setShowAddTimer(false)
        setNewTimer({})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTimers({...timers, [Date.now()] : newTimer })
        resetAddTimerForm()
    }

    const handleAddTimerFormClose = () => {
        resetAddTimerForm()
    };

    return (
    <div className="App">
        <Grid>
            <div style={{backgroundColor: 'lightgrey', gridArea: 'center'}}/>
            <TitleBar>
                <h1>Grand Theft Timer</h1>
            </TitleBar>

            {/*--content--*/}
            {/*list of timers*/}
            {showAddTimer && (
                <AddTimerForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} handleAddTimerFormClose={handleAddTimerFormClose}/>
            )}

            {/*--bottom-bar--*/}
            {/*add timer*/}
            {/* pre-made*/}
            {/* custom*/}
            {!showAddTimer && (
                <Timers timers={timers} handleDelete={handleDelete}/>
            )}
            <BottomBar>
                <Button onClick={() => addTimer()}>add timer</Button>
                <Button onClick={() => playPause()}>play/pause</Button>
            </BottomBar>
        </Grid>
    </div>
  );
}
