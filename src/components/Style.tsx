import React from 'react'
import './Style.css'
function Style(props: any): JSX.Element {
  return (
    <link
      rel="stylesheet"
      type="text/css"
      href={'assets/styles/' + props.name + '.css'}
    ></link>
  )
}

export default Style
