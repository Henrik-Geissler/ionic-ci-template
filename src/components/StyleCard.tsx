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
function StyleCard(props: any): JSX.Element {
  return (
    <IonCol size="12">
      <IonCard routerLink={'/style/' + props.style.css}>
        <IonCardTitle>{props.style.css}</IonCardTitle>
        <IonCardContent>
          <Style name={props.style.css} />
          <div className="styleWrapper1">
            <div className="styleWrapper2">
              <IonLabel
                className={props.style.css}
                data-text={props.style.default}
              ></IonLabel>
              <div className="beyond1"></div>
              <div className="beyond2"></div>
            </div>
          </div>
        </IonCardContent>
      </IonCard>
    </IonCol>
  )
}

export default StyleCard
