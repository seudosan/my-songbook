import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ArrowSvg, MenuSvg, SearchSvg, DoveSvg } from '../Svg'

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [inputState, setInputState] = useState(false)
  const inputRef = useRef()

  const hanldeInputState = () => setInputState(!inputState)

  useEffect(() => {
    inputState && inputRef.current.focus()
  }, [inputState])

  return (
    <header className='h-12 bg-slate-700 w-full flex items-center justify-center px-4 border-b-2 border-gray-600'>
      <div className='container flex justify-between fill-slate-200 space-x-3'>
        {inputState
          ? (
            <button onClick={hanldeInputState}>
              <ArrowSvg className='h-7 -rotate-90' />
            </button>
            )
          : (
            <Link href='/'>
              <a>
                <DoveSvg className='h-7' />
              </a>
            </Link>
            )}
        {inputState &&
          <input
            className='w-full h-9 bg-slate-900 text-slate-200 px-4 rounded-sm'
            ref={inputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />}
        <div className='flex items-center space-x-3'>
          {!inputState &&
            <button onClick={hanldeInputState}>
              <SearchSvg className='h-7' />
            </button>}
          <MenuSvg className='h-7' />
        </div>
      </div>
    </header>
  )
}
