import {camera, trash, close} from 'ionicons/icons'
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
import {useSingleStyle} from '../hooks/useStyleGallery'
function Detail({match}: RouteComponentProps<{name: string}>): JSX.Element {
  const {style} = useSingleStyle(match.params.name)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{match.params.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{match.params.name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        {style.snippet(style.css, style.default)}
      </IonContent>
    </IonPage>
  )
}

export default Detail
