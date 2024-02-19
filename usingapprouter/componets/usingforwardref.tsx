"use client"

import { useRef } from "react";
import VideoPlayer from "./videoplayerForwardRef";


export default function VideoApp() {
    const ref = useRef<HTMLVideoElement | null>(null);
    return (
      <>
        <button onClick={() => ref.current?.play()}>
          Play
        </button>
        <button onClick={() => ref?.current?.pause()}>
          Pause
        </button>
        <br />
        <VideoPlayer
          ref={ref}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
          width="250"
        />
      </>
    );
  }
  