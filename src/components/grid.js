/** @jsx jsx */
import { jsx } from '@emotion/core'

const gridStyle = {
    bottom: 0,
    display: 'grid',
    gridTemplate: `
      "title-bar" auto
      "content" 1fr
      "bottom-bar" auto
      / 1fr
    `,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
}
export const Grid = ({children}) => <div css={gridStyle}>{children}</div>

