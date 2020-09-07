import React, {useState} from "react";
import "./styles.css";
import {Timers} from "./components/timers";
import {AddTimerForm} from "./containers/addTimerForm";
import {Grid} from "./components/grid";
import {Button} from "./components/button";
import {BottomBar} from "./components/bottomBar";
import {TitleBar} from "./components/titleBar";

const debugTimers = {
    0: {
        description: 'test0',
        duration: 0
    },
    1: {
        description: 'test1',
        duration: 1
    },
    2: {
        description: 'test2',
        duration: 2
    },
    3: {
        description: 'test3',
        duration: 3
    },
    4: {
        description: 'test4',
        duration: 4
    },
    5: {
        description: 'test5',
        duration: 5
    },
    6: {
        description: 'test6',
        duration: 6
    },
    7: {
        description: 'test7',
        duration: 7
    },
    8: {
        description: 'test8',
        duration: 8
    },
    9: {
        description: 'test9',
        duration: 9
    },
}

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
