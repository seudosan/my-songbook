import { ITEMS } from './items'
import { NavItem } from './NavItem'

export const NavItemList = () => {
  return (
    <ul className='flex flex-col'>
      {ITEMS.map(({ name, href, icon }) => <NavItem key={name} name={name} href={href} icon={icon} />)}
    </ul>
  )
}
