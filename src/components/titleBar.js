/** @jsx jsx */
import { jsx } from '@emotion/core'

const titleBarStyle = {
    backgroundColor: 'white',
    gridArea: 'title-bar',
    padding: 'var(--lego-padding)'
}

export const TitleBar = ({children}) =>
    <div css={titleBarStyle}>{children}</div>
