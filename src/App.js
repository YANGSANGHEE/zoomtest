import React, { useRef, useCallback } from 'react';
import {
  PinchZoom,
  applyCssProperties,
  getTransform3DValue,
  getTransform2DValue,
} from 'react-fast-pinch-zoom';
import './App.css';

function App() {
  const ref = useRef(null);
  const onTransform = useCallback(({ x, y, scale }) => {
    // Use CSS Custom Properties (Variables)
    applyCssProperties(ref.current, { x, y, scale });

    // Or use literal transform value
    // ref.current.style.setProperty('transform',getTransform3DValue({x,y,scale}));
    // ref.current.style.setProperty('transform',getTransform2DValue({x,y,scale}));
  }, []);

  return (
    <PinchZoom onTransform={onTransform}>
      <img
        ref={ref}
        alt='two black cats look at you'
        src='https://t1.kakaocdn.net/thumb/R1920x0.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fnews%2Fbe7674ae018600001.jpeg'
      />
    </PinchZoom>
  );
}

export default App;
