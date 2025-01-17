import React from 'react'
import { TailSpin } from 'react-loader-spinner'

type Props = {}

function Loader({}: Props) {
  return (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="#000"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  )
}

export default Loader
