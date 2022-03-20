import Link from 'next/link'
import React from 'react'
import propTypes from 'prop-types'
import clsx from 'clsx'

const COLOR = ['white', 'sky', 'red']

const Item = ({ name, svgIcon, color }) => (
  <span
    className={clsx(
      'flex items-center text-base tracking-wider font-quicksand px-4 py-2 font-medium',
      'hover:bg-slate-800 active:text-green-500 active:fill-green-500',
      color === COLOR[0] && 'text-slate-50 fill-slate-50',
      color === COLOR[1] && 'text-sky-500 fill-sky-500',
      color === COLOR[2] && 'text-red-500 fill-red-500'
    )}
  >
    {React.cloneElement(svgIcon, { className: 'h-5 w-5 mr-4' })}
    {name}
  </span>
)

Item.defaultProps = {
  color: COLOR[0]
}

Item.propTypes = {
  name: propTypes.string.isRequired,
  svgIcon: propTypes.element.isRequired,
  color: propTypes.oneOf(COLOR)
}

export const LinkItem = ({ name, svgIcon, color, ...restProps }) => (
  <li>
    <Link {...restProps}>
      <a>
        <Item name={name} svgIcon={svgIcon} color={color} />
      </a>
    </Link>
  </li>
)

export const ButtonItem = ({ name, svgIcon, color, ...restProps }) => {
  return (
    <li>
      <button className='block w-full' {...restProps}>
        <Item name={name} svgIcon={svgIcon} color={color} />
      </button>
    </li>
  )
}
