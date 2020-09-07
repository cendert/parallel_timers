/** @jsx jsx */
import { jsx } from '@emotion/core'
import {Button} from "../components/button";

const formStyle = {
    gridArea: 'content',
    padding: 'var(--lego-padding)'
}

export const AddTimerForm = ({handleSubmit = () => {}, handleInputChange = () => {}, handleAddTimerFormClose = () => {}}) =>
    <form css={formStyle} onSubmit={handleSubmit}>
        <div>
            <label htmlFor="description">description</label>
            <input onChange={handleInputChange} type="text" id="description" />
        </div>
        <div>
            <label htmlFor="duration">duration</label>
            <input onChange={handleInputChange} type="number" id="duration" />
        </div>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleAddTimerFormClose}>Close</Button>
    </form>
