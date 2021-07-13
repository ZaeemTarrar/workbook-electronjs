import React from 'react'
import TopMenuBar from './../../../components/function/TopMenuBar/TopMenuBar'

const Window: React.FC = (props): JSX.Element => {
  return (
    <>
      <>
        <TopMenuBar />
      </>
      <>{props.children}</>
    </>
  )
}

export default Window
