import { Box, Stack } from '@mui/material';
import React from 'react'
import { Loader,VideoCard } from '.'

const Videos = ({ videos,direction }) => {
  if (!videos?.length) return <Loader />;
  
  return (
    <Stack direction = {direction || 'row'} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={ video} />}
         </Box>
       ))}
    </Stack>
  )
}

export default Videos
