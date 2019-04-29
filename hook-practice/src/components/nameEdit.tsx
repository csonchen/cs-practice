import * as React from 'react'

interface Props {
  initialUserName: string;
  editingName: string;
  onEditingNameUpdated: (newEditingName: string) => any;
  onNameUpdated: () => any;
  disabled: boolean;
}

export const NameEditComponent = (props: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onEditingNameUpdated(e.target.value)
  }

  const onNameSubmit = (event: any): any => {
    props.onNameUpdated()
  }

  return (
    <>
      <label>update name:</label>
      <input value={props.editingName} onChange={onChange}></input>
      <button onClick={onNameSubmit} disabled={props.disabled}>
        change
      </button>      
    </>
  )
}