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
  IonImg,
  IonActionSheet,
} from '@ionic/react'
import React from 'react'
import {RouteComponentProps} from 'react-router'
import ExploreContainer from '../components/ExploreContainer'
import {usePhotoGallery} from '../hooks/usePhotoGallery'
import './Page.css'
function Page({match}: RouteComponentProps<{name: string}>): JSX.Element {
  const {photos, takePhoto} = usePhotoGallery()

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
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg src={photo.base64 ?? photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <ExploreContainer name={match.params.name} />
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  )
}

export default Page
