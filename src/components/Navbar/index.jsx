import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ButtonIcon } from '@/components/ButtonIcon'
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
      <div className='container flex justify-between space-x-3'>
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
                <ButtonIcon svgComponent={<DoveSvg />} />
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
        <div className='flex items-center space-x-3'>
          {!inputState &&
            <ButtonIcon
              onClick={hanldeInputState}
              svgComponent={<SearchSvg />}
            />}
          <ButtonIcon svgComponent={<MenuSvg />} />
        </div>
      </div>
    </header>
  )
}
