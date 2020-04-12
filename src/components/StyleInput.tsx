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
  IonButton,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonTextarea,
} from '@ionic/react'
import Style from './Style'
import './StyleInput.css'
function StyleInput(props: any): JSX.Element {
  const [content, setContent] = React.useState(props.style.default)
  const [height, setHeight] = React.useState(400)
  const [sheight, setsHeight] = React.useState(400)

  function calcHeight(scrollHeight: number): number {
    const min = 10,
      max = 400
    let size = height
    if (height * 2 < scrollHeight) size *= 0.9
    return Math.min(Math.max(size, min), max)
  }
  function handleContentChange(value: string): void {
    setContent(value!)
    setHeight(400)
  }
  function refCallback(e: any): void {
    if (e) {
      setHeight(e.scrollHeight!)
      setHeight(calcHeight(e.scrollHeight!))
    }
  }
  return (
    <section>
      <p>
        {height} : {sheight}
      </p>
      <Style name={props.style.css} />
      <div
        className={props.style.css + ' outerWrapper'}
        style={{fontSize: height + 'px'}}
      >
        <div className={props.style.css + ' innerWrapper'}>
          <textarea
            className="dummy"
            value={content}
            ref={e => refCallback(e!)}
          />
          <IonTextarea
            className={props.style.css + ' styleTarget'}
            data-text={content}
            value={content}
            onIonChange={e => handleContentChange(e.detail.value!)}
            autofocus={true}
          ></IonTextarea>
          <div className={props.style.css + ' beyond1'}></div>
          <div className={props.style.css + ' beyond2'}></div>
        </div>
      </div>
    </section>
  )
}
export default StyleInput
