import React from 'react'
import {render} from '@testing-library/react'
import ExploreContainer from './ExploreContainer'

test('renders without crashing', () => {
  const str = 'Test'
  const {baseElement} = render(<ExploreContainer name={str} />)
  expect(baseElement).toBeDefined()
})
