import Link from 'next/link'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { ButtonIcon } from '@/components/ButtonIcon'
import { ArrowSvg, MenuSvg, SearchSvg, DoveSvg, CloseSvg } from '../Svg'
import { useRouter } from 'next/router'
import { NavMenu } from './NavMenu'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [inputState, setInputState] = useState(false)
  const inputRef = useRef()
  const router = useRouter()

  const pushSearchQuery = () => {
    searchQuery.length && router.push({
      pathname: '/search',
      query: { query: searchQuery }
    })
  }

  const handleSubmit = (e) => {
    if ((e.key === 'Enter')) {
      e.preventDefault()
      e.target.blur()
      pushSearchQuery()
    }
  }

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
    <header className='h-12 bg-slate-700 w-full flex items-center justify-center border-b-2 border-gray-600 relative'>
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
          <div className='w-full relative'>
            <input
              className='w-full h-9 bg-slate-900 text-slate-200 px-4 rounded-sm focus:border-0'
              ref={inputRef}
              value={searchQuery}
              autoComplete='off'
              placeholder='Buscar...'
              title='Buscador'
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => handleSubmit(e)}
            />
            <ButtonIcon
              className={clsx(
                'absolute right-0 fill-slate-400 transition-all duration-300',
                searchQuery.length ? 'scale-100' : 'scale-0 invisible'
              )}
              size='sm'
              svgComponent={<CloseSvg />}
              onClick={() => setSearchQuery('')}
            />
          </div>}
        <div className='flex items-center'>
          {!inputState &&
            <ButtonIcon
              onClick={hanldeInputState}
              svgComponent={<SearchSvg />}
            />}
          {inputState
            ? <ButtonIcon
                svgComponent={<SearchSvg />}
                onClick={pushSearchQuery}
              />
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
          <NavMenu />
          <div className={clsx(
            'bg-slate-900 rounded-full m-2 transition-all',
            showMenu ? 'scale-100 delay-300' : 'scale-0 delay-75'
          )}
          >
            <ButtonIcon
              svgComponent={<CloseSvg />}
              rounded
              onClick={hideMenu}
            />
          </div>
        </div>
      </>
    </header>
  )
}
