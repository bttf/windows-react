import React from 'react';
import './Window.scss';

export default (props) => {
  const className = `window window-${props.index}`;
  const style = {
    zIndex: -props.index,
  };
  return (
    <div className={className} {...props} style={style}>
    </div>
  );
}
