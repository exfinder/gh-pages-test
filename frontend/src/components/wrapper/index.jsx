import React from 'react';

export function Wrapper({ children }) {
    return <div className="container mx-auto flex flex-col items-center">{ children }</div>;
  }
  