import React, { PropsWithChildren } from 'react'
import { SIZE } from '../constants'

export const Placeholder: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className='bg-stone-200'
      style={{ width: SIZE, height: SIZE }}
      children={children}
    />
  )
}
