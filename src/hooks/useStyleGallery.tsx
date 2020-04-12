export function useStyleGallery(filter: string): Array<Style> {
  const styles: Array<Style> = [
    {css: 'normal', default: 'normal'},
    {css: 'glitch', default: 'GLITCH'},
    {css: 'neon', default: 'NEON'},
    {css: 'attention', default: 'Attention'},
    {css: 'glitch', default: 'NEON'},
    {css: 'neon', default: 'GLITCH'},
    {css: 'frozen', default: 'Frozen'},
    {css: 'focus', default: 'FOCUS'},
  ]
  return styles
}

export function useSingleStyle(styleName: string): Style {
  let style: Style
  if (styleName == 'glitch') {
    style = {css: 'glitch', default: 'GLITCH'}
  } else if (styleName == 'neon') {
    style = {css: 'neon', default: 'NEON'}
  } else if (styleName == 'attention') {
    style = {css: 'attention', default: '⚠ Attention ⚠'}
  } else {
    style = {css: 'normal', default: 'Normal Text'}
  }
  return style
}

export interface Style {
  css: string
  default: string
  snippet?: (css: string, def: string) => JSX.Element
}
