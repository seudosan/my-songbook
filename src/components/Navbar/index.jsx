import { MenuSvg, SearchSvg, DoveSvg } from '../Svg'

export const Navbar = () => {
  return (
    <header className='h-14 bg-slate-700 w-full flex items-center justify-center px-4'>
      <div className='container flex justify-between fill-slate-200'>
        <DoveSvg className=' h-9' />
        <div className='flex items-center space-x-2'>
          <SearchSvg className='h-7' />
          <MenuSvg className='h-7' />
        </div>
      </div>
    </header>
  )
}
