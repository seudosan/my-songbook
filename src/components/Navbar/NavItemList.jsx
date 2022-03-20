import { HomeSvg, CastSvg, HistorySvg, SettingsSvg, HelpSvg, TranslateSvg, BrightnessSvg, SubjectSvg, FavoriteSvg, LogoutSvg, LoginSvg } from '@/components/Svg'
import { useAuthUser, withAuthUser } from 'next-firebase-auth'
import { ButtonItem, LinkItem } from './NavItem'

const List = () => {
  const USER = useAuthUser()

  return (
    <ul className='flex flex-col'>
      <LinkItem name='Inicio' svgIcon={<HomeSvg />} href='/' />
      <LinkItem name='Proyección' svgIcon={<CastSvg />} href='/projection' />
      <LinkItem name='Favoritos' svgIcon={<FavoriteSvg />} href='/favorites' />
      <LinkItem name='Biblioteca' svgIcon={<SubjectSvg />} href='/library' />
      <LinkItem name='Historial' svgIcon={<HistorySvg />} href='/history' />
      <ButtonItem name='Tema' svgIcon={<BrightnessSvg />} />
      <LinkItem name='Ajustes' svgIcon={<SettingsSvg />} href='/settings' />
      <ButtonItem name='Idioma' svgIcon={<TranslateSvg />} />
      <LinkItem name='Ayuda' svgIcon={<HelpSvg />} href='/help' />
      {USER.email
        ? <ButtonItem
            color='red'
            name='Salir de la Cuenta'
            onClick={() => USER.signOut()}
            svgIcon={<LogoutSvg />}
          />
        : <LinkItem
            color='sky'
            name='Ingresar Cuenta'
            svgIcon={<LoginSvg />}
            href='/login'
          />}
    </ul>
  )
}

export const NavItemList = withAuthUser()(List)
