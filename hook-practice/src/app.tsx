import * as React from 'react'
import {Color} from './model/color'
import {MemberTableComponent, HelloComponent, NameEditComponent, ColorBrowser, ColorPicker, SidebarComponent} from './components'

export const App = () => {
  const [name, setName] = React.useState('defaultName')
  const [editingName, setEditingName] = React.useState('defaultName')
  const [color, setColor] = React.useState<Color>({red: 20, green: 40, blue: 180})
  const [isVisible, setVisible] = React.useState(false)

  const loadUsername = () => {
    setTimeout(() => {
      setName('name form async call')
      setEditingName('name from async call')
    }, 500)
  }

  React.useEffect(() => {
    loadUsername();
  }, [])

  const setUsernameState = () => {
    setName(editingName)
  }

  return (
    <>
      <SidebarComponent isVisible={isVisible}>
        <h1>coll movies</h1>
        <ul>
          <li><a href="sssss">Interstellar</a></li>
          <li><a href="sssss">Interstellar</a></li>
          <li><a href="sssss">Interstellar</a></li>
        </ul>
      </SidebarComponent>
      <MemberTableComponent></MemberTableComponent>
      <ColorBrowser color={color}></ColorBrowser>
      <ColorPicker color={color} onColorUpdated={setColor}></ColorPicker>
      <HelloComponent userName={name}></HelloComponent>
      <NameEditComponent
        initialUserName={name} 
        editingName={editingName}
        onNameUpdated={setUsernameState}
        onEditingNameUpdated={setEditingName}
        disabled={editingName === '' || editingName === name}
      />
      <div style={{float: 'right'}}>
        <button onClick={() => setVisible(!isVisible)}>toggle sidebar</button>
      </div>
    </>
  )
}