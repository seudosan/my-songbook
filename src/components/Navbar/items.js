import { CastSvg, HistorySvg, SettingsSvg, HelpSvg, TranslateSvg, BrightnessSvg, SubjectSvg, FavoriteSvg, HomeSvg } from '@/components/Svg'

export const ITEMS = [{
  name: 'Inicio',
  icon: HomeSvg,
  href: '/'
}, {
  name: 'Proyección',
  icon: CastSvg,
  href: '/projection'
}, {
  name: 'Favoritos',
  icon: FavoriteSvg,
  href: '/favorites'
}, {
  name: 'Biblioteca',
  icon: SubjectSvg,
  href: '/library'
}, {
  name: 'Historial',
  icon: HistorySvg,
  href: '/history'
}, {
  name: 'Tema',
  icon: BrightnessSvg
}, {
  name: 'Ajustes',
  icon: SettingsSvg,
  hreg: '/settings'
}, {
  name: 'Idioma',
  icon: TranslateSvg
}, {
  name: 'Ayuda',
  icon: HelpSvg,
  href: '/help'
}]
