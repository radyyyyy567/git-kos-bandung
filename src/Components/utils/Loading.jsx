import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Loading = () => {
  return (
    <div className="h-screen bg-white fixed top-0 left-0 flex items-center w-full font-bold text-xl justify-center space-x-2">
        <div><FontAwesomeIcon icon={faSpinner} className='animate-spin text-indigo-400 text-2xl' /></div>
        <div className='text-indigo-400'>Processing</div>
    </div>
  )
}

export default Loading