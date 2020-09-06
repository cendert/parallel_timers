/** @jsx jsx */
import { jsx } from '@emotion/core'

const baseStyle = {

}

const primaryButtonStyle= {

}

const secondaryButtonStyle = {

}

const buttonStyle = isPrimary => isPrimary ? primaryButtonStyle : secondaryButtonStyle

export const Button = ({children, isPrimary = false, onClick, tabIndex = -1}) =>
    <button css={{...baseStyle, ...buttonStyle(isPrimary)}} onClick={onClick} tabIndex={tabIndex}>{children}</button>
