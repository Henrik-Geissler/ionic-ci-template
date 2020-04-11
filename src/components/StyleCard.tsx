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

function StyleCard(props: any): JSX.Element {
  return (
    <IonCard routerLink={'/style/' + props.style.css}>
      <IonCardTitle>{props.style.css}</IonCardTitle>
      <IonCardContent>
        {props.style.snippet(props.style.css, props.style.default)}
      </IonCardContent>
    </IonCard>
  )
}
export interface Style {
  css: string
  default: string
  snippet: (css: string, def: string) => JSX.Element
}

export default StyleCard
