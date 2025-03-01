import React, { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      <h1>Only for auth routes</h1>
      {children}
    </div>
  )
}

export default layout
