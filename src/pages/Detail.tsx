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
import React from 'react'
import {RouteComponentProps} from 'react-router'
import InputContainer from '../components/InputContainer'
import Header from '../components/Header'
import './Detail.css'
function Detail({match}: RouteComponentProps<{name: string}>): JSX.Element {
  return (
    <IonPage>
      <Header name={match.params.name} />

      <IonContent>
        <InputContainer name={match.params.name} />
      </IonContent>
    </IonPage>
  )
}

export default Detail
