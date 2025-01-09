
import React from 'react'
import { loading } from '../../img'


const Loading = () => {
  return (
    <div className="h-screen bg-white fixed top-0 left-0 flex items-center w-full font-bold text-xl justify-center space-x-2">
        <video
        src={loading}
        autoPlay
        loop
        muted
      />
    </div>
  )
}

export default Loading