import React from 'react'
import { Loader } from '.'

const Videos = ({ videos,direction }) => {
  console.log(videos)
  if (!videos?.length) return <Loader />;
  
  return (
    <div>
      videos
    </div>
  )
}

export default Videos
