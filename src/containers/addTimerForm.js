/** @jsx jsx */
import { jsx } from '@emotion/core'

const formStyle = {
    gridArea: 'content'
}

export const AddTimerForm = ({handleSubmit = () => {}, handleInputChange = () => {}}) =>
    <form css={formStyle} onSubmit={handleSubmit}>
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
