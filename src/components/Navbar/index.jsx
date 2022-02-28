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
    <header className='h-12 bg-slate-700 w-full flex items-center justify-center border-b-2 border-gray-600'>
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
            : <ButtonIcon svgComponent={<MenuSvg />} />}
        </div>
      </div>
    </header>
  )
}
