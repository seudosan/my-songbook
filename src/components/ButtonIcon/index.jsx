import React from 'react'
import propTypes from 'prop-types'
import clsx from 'clsx'
import { DoveSvg } from '../Svg'

const SIZE = ['sm', 'base']

export const ButtonIcon = ({ children, className, svgComponent, size, rounded, ...restProps }) => {
  const Svg = props => React.cloneElement(children || svgComponent, { ...props })

  return (
    <button
      className={clsx(
        'outline-none fill-slate-200 active:fill-green-500 h-full',
        'focus:bg-slate-50 focus:bg-opacity-10',
        rounded && 'rounded-full p-2 m-1',
        size === SIZE[0] && 'p-2',
        size === SIZE[1] && 'p-4',
        className
      )}
      {...restProps}
    >
      <Svg className={clsx(
        size === SIZE[0] && 'w-5 h-5',
        size === SIZE[1] && 'w-6 h-6'
      )}
      />
    </button>
  )
}

ButtonIcon.defaultProps = {
  svgComponent: <DoveSvg />,
  size: SIZE[1]
}

ButtonIcon.propTypes = {
  children: propTypes.element,
  svgComponent: propTypes.element,
  className: propTypes.string,
  size: propTypes.oneOf(SIZE),
  rounded: propTypes.bool
}
