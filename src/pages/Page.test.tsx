import React from 'react'
import {render} from '@testing-library/react'
import Page from './Page'
import {createLocation, createMemoryHistory} from 'history'
import {match as routerMatch} from 'react-router'
import {BrowserRouter} from 'react-router-dom'

type MatchParameter<Params> = {[K in keyof Params]?: string}

const generateUrl = <Params extends MatchParameter<Params>>(
  path: string,
  params: Params,
): string => {
  let tempPath = path

  for (const param in params) {
    // eslint-disable-next-line no-prototype-builtins
    if (params.hasOwnProperty(param)) {
      const value = params[param]
      tempPath = tempPath.replace(
        `:${param}`,
        value as NonNullable<typeof value>,
      )
    }
  }

  return tempPath
}
function routerTestProps<Params extends MatchParameter<Params> = {}>(
  path: string,
  params: Params,
  extendMatch: Partial<routerMatch<any>> = {},
) {
  const match: routerMatch<Params> = Object.assign(
    {},
    {
      isExact: false,
      path,
      url: generateUrl(path, params),
      params,
    },
    extendMatch,
  )
  const history = createMemoryHistory()
  const location = createLocation(match.url)

  return {history, location, match}
}
test('renders without crashing', () => {
  const props = routerTestProps('/route/:id', {name: 'Test'})
  const {baseElement} = render(
    <BrowserRouter>
      <Page {...props} />
    </BrowserRouter>,
  )
  expect(baseElement).toBeDefined()
})
