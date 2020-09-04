/** @jsx jsx */
import { jsx } from '@emotion/core'
import {useState} from "react";
import {Timer} from "./timer";

export const Timers = () => {
    const [timers, setTimers] = useState({})
    const [showAddTimer, setShowAddTimer] = useState(false)
    const [newTimer, setNewTimer] = useState({})

    const handleInputChange = ({target: {id, value}}) => {
        setNewTimer({...newTimer, [id] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTimers({...timers, [Date.now()] : newTimer })
    }

    const addTimer = () => {
        setShowAddTimer(true)
    }

    return (
        <div
            css={{
                backgroundColor: 'green',
                color: 'white',
                fontSize: '2rem'
            }}
        >
            <button onClick={() => addTimer()}>add timer</button>
            {showAddTimer && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="description">description</label>
                        <input onChange={handleInputChange} type="text" id="description" />
                    </div>
                    <div>
                        <label htmlFor="duration">duration</label>
                        <input onChange={handleInputChange} type="number" id="duration" />
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            )}
            {timers && Object.values(timers).map((timer, index) => <Timer key={Object.keys(timers)[index]} description={timer.description} time={timer.duration}/>)}
        </div>
    )
}
