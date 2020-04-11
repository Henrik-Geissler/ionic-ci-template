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

function StyleInput(props: any): JSX.Element {
  return <div>{props.style.snippet(props.style.css, props.style.default)}</div>
}
export interface Style {
  css: string
  default: string
  snippet: (css: string, def: string) => JSX.Element
}

export default StyleInput
