import React from 'react'
import propTypes from 'prop-types'
import { DoveSvg } from '../Svg'

export const ButtonIcon = ({ children, className, svgComponent, ...restProps }) => {
  const renderChildren = React.cloneElement(
    children || svgComponent,
    { className: 'h-7 w-7 fill-slate-200 active:fill-green-500 ' + className }
  )
  return (
    <button {...restProps}>
      {renderChildren}
    </button>
  )
}

ButtonIcon.defaultProps = {
  svgComponent: <DoveSvg />
}

ButtonIcon.propTypes = {
  children: propTypes.element,
  svgComponent: propTypes.element,
  className: propTypes.string
}
