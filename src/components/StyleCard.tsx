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
import './StyleCard.css'
function StyleCard(props: any): JSX.Element {
  return (
    <IonCol size="12">
      <IonCard routerLink={'/style/' + props.style.css}>
        <IonCardTitle>{props.style.css}</IonCardTitle>
        <IonCardContent>
          <Style name={props.style.css} />
          <div className={props.style.css + ' outerWrapper'}>
            <div className={props.style.css + ' innerWrapper'}>
              <IonLabel
                className={props.style.css + ' styleTarget'}
                data-text={props.style.default}
              ></IonLabel>
              <div className={props.style.css + ' beyond1'}></div>
              <div className={props.style.css + ' beyond2'}></div>
            </div>
          </div>
        </IonCardContent>
      </IonCard>
    </IonCol>
  )
}

export default StyleCard
