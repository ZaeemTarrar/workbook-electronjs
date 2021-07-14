import React from 'react'
import TopMenuBar from './../../../components/function/TopMenuBar/TopMenuBar'
import View from './../View/View'

const Window: React.FC = (props): JSX.Element => {
  return (
    <>
      <>
        <TopMenuBar />
      </>
      <>
        <View>{props.children}</View>
      </>
    </>
  )
}

export default Window
