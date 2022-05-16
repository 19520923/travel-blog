import React from 'react'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Loading