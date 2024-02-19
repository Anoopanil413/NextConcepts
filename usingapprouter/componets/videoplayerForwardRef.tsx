"use client"


import { forwardRef } from 'react';

const VideoPlayer = forwardRef <HTMLVideoElement, { src: string, type: string, width: string }>(function VideoPlayer({ src, type, width }, ref) {
  return (
    <video width={width} ref={ref}>
      <source
        src={src}
        type={type}
      />
    </video>
  );
});

export default VideoPlayer;
