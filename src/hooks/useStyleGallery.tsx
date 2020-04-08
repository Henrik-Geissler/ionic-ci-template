import React from 'react'
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonImg,
  IonActionSheet,
  IonTextarea,
} from '@ionic/react'

export function useStyleGallery() {
  function Neon(css: string, def: string): JSX.Element {
    return (
      <div className="text-effect">
        <h1 className={css} data-text={def}>
          {def}
        </h1>
        <div className="gradient"></div>
        <div className="spotlight"></div>
      </div>
    )
  }
  function Glitch(css: string, def: string): JSX.Element {
    return (
      <IonLabel className={css} data-text={def}>
        {def}
      </IonLabel>
    )
  }

  function Attention(css: string, def: string): JSX.Element {
    return <IonLabel className={css}>⚠ {def} ⚠</IonLabel>
  }
  function Shimmer(css: string, def: string): JSX.Element {
    return <IonLabel className={css}>{def}</IonLabel>
  }
  function Frozen(css: string, def: string): JSX.Element {
    return (
      <IonLabel className={css} data-heading={def}>
        {def}
      </IonLabel>
    )
  }

  function Focus(css: string, def: string): JSX.Element {
    return (
      <div className={css}>
        <div className="focus--mask">
          <div className="focus--mask-inner">{def}</div>
        </div>
      </div>
    )
  }

  const styles: Array<Style> = [
    {css: 'glitch', default: 'GLITCH', snippet: Glitch},
    {css: 'neon', default: 'NEON', snippet: Neon},
    {css: 'glitch', default: 'NEON', snippet: Glitch},
    {css: 'neon', default: 'GLITCH', snippet: Neon},
    {css: 'attention', default: 'Attention', snippet: Attention},
    {css: 'frozen', default: 'Frozen', snippet: Frozen},
    {css: 'focus', default: 'FOCUS', snippet: Focus},
  ]

  return {
    styles,
  }
}
export function useSingleStyle(styleName: string) {
  const style: Style = {css: 'glitch', default: 'GLITCH', snippet: Glitch}
  const [content, setContent] = React.useState(style.default)

  //function setContent(str: string): void {}
  function Glitch(css: string, def: string): JSX.Element {
    return (
      <IonTextarea
        className={css}
        data-text={content}
        value={content}
        onIonChange={e => setContent(e.detail.value!)}
        autofocus={true}
      ></IonTextarea>
    )
  }

  return {
    style,
  }
}

export interface Style {
  css: string
  default: string
  snippet: (css: string, def: string) => JSX.Element
}
