import React from 'react'
import { Button } from './styled'
 
export const Input = ({value, onclick}) => {
  
  return (
    <>
    <Button type="button" value = {value} onClick={onclick} />
    </>
  )
}
