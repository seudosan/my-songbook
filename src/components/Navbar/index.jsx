import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ButtonIcon } from '@/components/ButtonIcon'
import clsx from 'clsx'
import { ArrowSvg, MenuSvg, SearchSvg, DoveSvg, CloseSvg } from '../Svg'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [inputState, setInputState] = useState(false)
  const inputRef = useRef()

  const hanldeInputState = () => setInputState(!inputState)

  const hideMenu = () => setShowMenu(false)

  useEffect(() => {
    showMenu && window.addEventListener('click', hideMenu)

    return () => window.removeEventListener('click', hideMenu)
  }, [showMenu])

  useEffect(() => {
    inputState && inputRef.current.focus()
  }, [inputState])

  return (
    <header className='h-12 bg-slate-700 w-full items-center justify-center border-b-2 border-gray-600 relative'>
      <div className='container flex justify-between items-center h-full space-x-1'>
        {inputState
          ? (
            <ButtonIcon
              className='-rotate-90'
              onClick={hanldeInputState}
              svgComponent={<ArrowSvg />}
            />
            )
          : (
            <Link href='/'>
              <a>
                <DoveSvg className='h-12 w-12 p-3 fill-slate-200' />
              </a>
            </Link>
            )}
        {inputState &&
          <input
            className='w-full h-9 bg-slate-900 text-slate-200 px-4 rounded-sm focus:border-0'
            ref={inputRef}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />}
        <div className='flex items-center'>
          {!inputState &&
            <ButtonIcon
              onClick={hanldeInputState}
              svgComponent={<SearchSvg />}
            />}
          {inputState
            ? <ButtonIcon svgComponent={<SearchSvg />} />
            : <ButtonIcon
                svgComponent={<MenuSvg />}
                onClick={() => { setShowMenu(true) }}
              />}
        </div>
      </div>
      <>
        {showMenu && <div className='w-full bg-gray-500 bg-opacity-50 h-screen absolute top-0' />}
        <div className={clsx(
          'w-full h-screen absolute top-0 flex items-start transition-all duration-300',
          showMenu ? 'left-0' : '-left-full'
        )}
        >

          <div className='w-full bg-slate-900 h-screen'>
            <p>asd</p>
          </div>
          <div className={clsx(
            'bg-slate-900 rounded-full m-2 transition-all',
            showMenu ? 'scale-100 delay-300' : 'scale-0 delay-75'
          )}
          >
            <ButtonIcon
              svgComponent={<CloseSvg />}
              onClick={hideMenu}
            />
          </div>
        </div>
      </>
    </header>
  )
}
