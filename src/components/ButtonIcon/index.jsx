import React from 'react'
import propTypes from 'prop-types'
import clsx from 'clsx'
import { DoveSvg } from '../Svg'

export const ButtonIcon = ({ children, className, svgComponent, rounded, ...restProps }) => {
  const renderChildren = React.cloneElement(
    children || svgComponent,
    { className: 'h-6 w-6 ' + className }
  )

  return (
    <button
      className={clsx(
        'outline-none fill-slate-200 active:fill-green-500',
        'focus:bg-slate-50 focus:bg-opacity-10',
        rounded ? 'rounded-full p-2 m-1' : 'p-3'
      )}
      {...restProps}
    >
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
  className: propTypes.string,
  rounded: propTypes.bool
}
