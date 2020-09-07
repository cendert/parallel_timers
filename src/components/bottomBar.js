/** @jsx jsx */
import { jsx } from '@emotion/core'

const bottomBarStyle = {
    display: 'flex',
    gridArea: 'bottom-bar',
    justifyContent: 'space-between',
    padding: 'var(--lego-padding)'
}

export const BottomBar = ({children}) =>
    <div css={bottomBarStyle}>{children}</div>
