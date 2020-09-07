/** @jsx jsx */
import { jsx } from '@emotion/core'

const gridStyle = {
    bottom: 0,
    display: 'grid',
    gridTemplateRows: "[center-start title-bar-start] auto [title-bar-end content-start] 1fr [content-end bottom-bar-start] auto [center-end bottom-bar-end]",
    gridTemplateColumns: "auto [center-start title-bar-start content-start bottom-bar-start] minmax(auto, 48rem) [center-end title-bar-end content-end bottom-bar-end] auto",
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
}
export const Grid = ({children}) => <div css={gridStyle}>{children}</div>

