import React, { useState } from 'react';
import { Sketch, Circle } from '@uiw/react-color'

function Component1() {
  const [hex, setHex] = useState("#fff");
  return (
    <div style={{ background: `${hex}` }} className='min-h-screen w-full flex flex-col gap-10 items-center justify-center'>
      <Sketch
        style={{ marginLeft: 20 }}
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
        }}
      />
      <Circle
        colors={[ '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00' ]}
        color={hex}
        onChange={(color) => {
          setHex(color.hex);
        }}
      />
    </div>
  );
}

export default Component1;