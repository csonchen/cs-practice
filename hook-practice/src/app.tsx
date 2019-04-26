import * as React from 'react'
import { HelloComponent } from './hello';
import { NameEditComponent } from './nameEdit';

export const App = () => {
  const [name, setName] = React.useState('defaultName')

  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  return (
    <>
      <HelloComponent userName={name}></HelloComponent>
      <NameEditComponent userName={name} onChange={setUsernameState}/>
    </>
  )
}