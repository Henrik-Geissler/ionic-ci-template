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
} from '@ionic/react'
import React from 'react'
import {RouteComponentProps} from 'react-router'
import ExploreContainer from '../components/ExploreContainer'
import {useStyleGallery} from '../hooks/useStyleGallery'
import './Page.scss'
function Page({match}: RouteComponentProps<{name: string}>): JSX.Element {
  const {styles} = useStyleGallery()

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
            {styles.map((style, index) => (
              <IonCol size="12" key={index}>
                <IonCard routerLink={'/style/' + style.css}>
                  <IonCardTitle>{style.css}</IonCardTitle>
                  <IonCardContent>
                    {style.snippet(style.css, style.default)}
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <ExploreContainer name={match.params.name} />
        {/*         <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab> */}
      </IonContent>
    </IonPage>
  )
}

export default Page
