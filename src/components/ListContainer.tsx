import React from 'react'
import {IonGrid, IonRow} from '@ionic/react'
import {useStyleGallery} from '../hooks/useStyleGallery'
import StyleCard from './StyleCard'

function ListContainer(props: any): JSX.Element {
  const styles = useStyleGallery(props.name)
  const styleCards = styles.map((styleOfTheCard, index) => (
    <StyleCard key={index} style={styleOfTheCard} />
  ))
  return (
    <IonGrid>
      <IonRow>{styleCards}</IonRow>
    </IonGrid>
  )
}

export default ListContainer
