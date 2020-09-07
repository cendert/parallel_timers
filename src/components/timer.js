/** @jsx jsx */
import { jsx } from '@emotion/core'
import {Button} from "./button";

const timerStyle = {
    backgroundColor: 'lightgray',
    margin: 'var(--lego-margin) 0',
    padding: 'var(--lego-padding)'
}

export const Timer = ({description = 'timer', keyProp, duration = 1000, handleDelete = () => {}}) =>
    <div css={timerStyle}>
        <div>
            {description}
        </div>
        <div>
            {duration}
        </div>
        <Button onClick={() => handleDelete(keyProp)}>Delete</Button>
    </div>;
