import React from 'react';

function Controls() {
  return (
    <>
    <label>
        Top Text: 
      <input type="text" name="topText"/>
    </label>
    <label>
        Bottom Text: 
      <input type="text" name="bottomText"/>
    </label>
    </>
  );
}

export default Controls;
