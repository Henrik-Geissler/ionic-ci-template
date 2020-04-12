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
function StyleInput(props: any): JSX.Element {
  const [content, setContent] = React.useState(props.style.default)
  return (
    <div>
      <Style name={props.style.css} />
      <div className="styleWrapper1">
        <div className="styleWrapper2">
          <textarea className="dummy"></textarea>
          <IonTextarea
            className={props.style.css}
            data-text={content}
            value={content}
            onIonChange={e => setContent(e.detail.value!)}
            autofocus={true}
          ></IonTextarea>
          <div className="beyond1"></div>
          <div className="beyond2"></div>
        </div>
      </div>
    </div>
  )
}
export default StyleInput
