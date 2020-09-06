/** @jsx jsx */
import { jsx } from '@emotion/core'

const bottomBarStyle = {
    gridArea: 'bottom-bar'
}

export const BottomBar = ({children}) =>
    <div css={bottomBarStyle}>{children}</div>
