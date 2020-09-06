/** @jsx jsx */
import { jsx } from '@emotion/core'
import {Timer} from "./timer";

export const Timers = ({timers = {}}) =>
    <div css={{
            backgroundColor: 'green',
            color: 'white',
            fontSize: '2rem',
            gridArea: 'content'
        }} >
        {timers && Object.values(timers).map((timer, index) => <Timer key={Object.keys(timers)[index]} description={timer.description} time={timer.duration}/>)}
    </div>
