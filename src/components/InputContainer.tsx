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
import {useSingleStyle} from '../hooks/useStyleGallery'
import StyleInput from './StyleInput'

function InputContainer(props: any): JSX.Element {
  const style = useSingleStyle(props.name)
  return <StyleInput style={style} />
}

export default InputContainer
