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
import ListContainer from '../components/ListContainer'
import Header from '../components/Header'
import './Page.css'
function Page({match}: RouteComponentProps<{name: string}>): JSX.Element {
  return (
    <IonPage>
      <Header name={match.params.name} />

      <IonContent>
        <ListContainer name={match.params.name} />
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
