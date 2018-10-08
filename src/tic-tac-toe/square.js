import React from 'react';
// import ReactDOM from 'react-dom';
import '../index.css';
function Square(props) {
    return React.createElement('button', { className: "square", onClick: props.onClick }, props.value );
}
export default Square;