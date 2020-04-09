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
  function Normal(css: string, def: string): JSX.Element {
    return <IonLabel className={css}>{def}</IonLabel>
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
    {css: 'normal', default: 'normal', snippet: Normal},
    {css: 'glitch', default: 'GLITCH', snippet: Glitch},
    {css: 'neon', default: 'NEON', snippet: Neon},
    {css: 'attention', default: 'Attention', snippet: Attention},
    {css: 'glitch', default: 'NEON', snippet: Glitch},
    {css: 'neon', default: 'GLITCH', snippet: Neon},
    {css: 'frozen', default: 'Frozen', snippet: Frozen},
    {css: 'focus', default: 'FOCUS', snippet: Focus},
  ]

  return {
    styles,
  }
}
export function useSingleStyle(styleName: string) {
  let style: Style
  if (styleName == 'glitch') {
    style = {css: 'glitch', default: 'GLITCH', snippet: Glitch}
  } else if (styleName == 'neon') {
    style = {css: 'neon', default: 'NEON', snippet: Neon}
  } else if (styleName == 'attention') {
    style = {css: 'attention', default: '⚠ Attention ⚠', snippet: Attention}
  } else {
    style = {css: 'normal', default: 'Normal Text', snippet: Normal}
  }
  const [content, setContent] = React.useState(style.default)

  /* function getHeight() {
    return $('#dummy').prop('scrollHeight')
  }

  $('#textarea').keyup(function (event) {
    while (getHeight() > $(this).height()) {
      $(this).css('font-size', '-=1')
      $('#dummy').css('font-size', '-=1')
    }
    if (event.keyCode == 8 || event.keyCode == 46) {
      while (
        getHeight() <= $(this).height() &&
        $(this).css('font-size') <= '25px'
      ) {
        $(this).css('font-size', '+=1')
        $('#dummy').css('font-size', '+=1')
      }
      $(this).css('font-size', '-=1')
      $('#dummy').css('font-size', '-=1')
    }
  }) */

  //function setContent(str: string): void {}
  function Normal(css: string, def: string): JSX.Element {
    return (
      <IonTextarea
        className={css}
        data-text={content}
        value={content}
        onIonChange={e => setContent(e.detail.value!)}
        autofocus={true}
      >
        <textarea className="dummy">
          <div></div>
        </textarea>
      </IonTextarea>
    )
  }

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

  //function setContent(str: string): void {}
  function Attention(css: string, def: string): JSX.Element {
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

  function Neon(css: string, def: string): JSX.Element {
    return (
      <div className="text-effect">
        <IonTextarea
          className={css}
          data-text={content}
          value={content}
          onIonChange={e => setContent(e.detail.value!)}
          autofocus={true}
        ></IonTextarea>
        <div className="gradient"></div>
        <div className="spotlight"></div>
      </div>
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
