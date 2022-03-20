import { useAuthUser, withAuthUser } from 'next-firebase-auth'
import Image from 'next/image'
import Link from 'next/link'
import { NavItemList } from './NavItemList'

export const Render = () => {
  const USER = useAuthUser()

  return (
    <div className='w-full bg-slate-900 h-screen py-3'>
      {USER.email &&
        <div className='border-b-slate-700 border-b-2 mb-3 pb-6 px-4'>
          <div className='flex items-center'>
            <Image
              src='/images/profile.jfif'
              width={36}
              height={36}
              className='rounded-full'
            />
            <div className='flex flex-col ml-3'>
              <span className='text-slate-50'>{USER.displayName || 'Username'}</span>
              <Link href='/'>
                <a className='text-sm text-sky-500'>Ajustes de cuenta</a>
              </Link>
            </div>
          </div>
        </div>}
      <NavItemList />
    </div>
  )
}

export const NavMenu = withAuthUser()(Render)
