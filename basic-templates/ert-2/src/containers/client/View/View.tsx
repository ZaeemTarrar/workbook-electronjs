import React from 'react'

const View: React.FC = (props): JSX.Element => {
  return (
    <>
      <div className="RestScreenView">{props.children}</div>
    </>
  )
}

export default View
