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
import {useStyleGallery} from '../hooks/useStyleGallery'
import StyleCard from './StyleCard'

function ListContainer(props: any): JSX.Element {
  const {styles} = useStyleGallery(props.name)
  return (
    <IonGrid>
      <IonRow>
        {styles.map((style, index) => (
          <IonCol size="12" key={index}>
            <StyleCard style={style} />
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  )
}

export default ListContainer
