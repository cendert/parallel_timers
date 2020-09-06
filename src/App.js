import React, {useState} from "react";
import "./styles.css";
import {Timers} from "./components/timers";
import {AddTimerForm} from "./containers/addTimerForm";
import {Grid} from "./components/grid";
import {Button} from "./components/button";
import {BottomBar} from "./components/bottomBar";

export const App = () => {
    const [timers, setTimers] = useState({})
    const [newTimer, setNewTimer] = useState({})
    const [showAddTimer, setShowAddTimer] = useState(false)

    const addTimer = () => {
        setShowAddTimer(true)
    }

    const handleInputChange = ({target: {id, value}}) => {
        setNewTimer({...newTimer, [id] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTimers({...timers, [Date.now()] : newTimer })
    }

    return (
    <div className="App">
        <Grid>
            {/*titlebar*/}

            {/*--content--*/}
            {/*list of timers*/}
            {showAddTimer && (
                <AddTimerForm handleSubmit={handleSubmit} handleInputChange={handleInputChange}/>
            )}

            {/*--bottom-bar--*/}
            {/*add timer*/}
            {/* pre-made*/}
            {/* custom*/}
            {!showAddTimer && (
                <Timers timers={timers}/>
            )}
            <BottomBar>
                <Button onClick={() => addTimer()}>add timer</Button>
            </BottomBar>
        </Grid>
    </div>
  );
}
