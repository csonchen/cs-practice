import * as React from 'react'

interface Props {
  userName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const NameEditComponent = (props: Props) => (
  <>
    <label>upldate name: </label>
    <input value={props.userName} onChange={props.onChange}></input>
  </>
)