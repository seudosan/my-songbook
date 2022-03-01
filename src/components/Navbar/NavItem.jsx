import Link from 'next/link'
import React from 'react'

export const NavItem = ({ name, href, icon: Icon }) => {
  const Item = () => (
    <div className='w-full flex items-center text-slate-50 fill-slate-50 text-base tracking-wider font-quicksand px-4 h-9'>
      <Icon className='h-5 w-5 mr-4' />
      {name}
    </div>
  )

  if (typeof href === 'undefined') {
    return (
      <button>
        <Item />
      </button>
    )
  }

  return (
    <Link href={href}>
      <a>
        <Item />
      </a>
    </Link>
  )
}
