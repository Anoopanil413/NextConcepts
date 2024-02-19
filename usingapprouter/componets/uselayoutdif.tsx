"use client"


import React, { useRef, useEffect, useLayoutEffect } from 'react';

const MylayoutApp = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
      if(inputRef.current)inputRef.current.value = "another user";
      
  }, []);

  useLayoutEffect(() => {
    if(inputRef.current)console.log(inputRef.current.value);
  }, []);

  return (
    <div>
      <input type="text" value="EmmanuelTheCoder" ref={inputRef} />
    </div>
  );
};

export default MylayoutApp;
