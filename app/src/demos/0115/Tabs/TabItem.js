import React from 'react';

const TabItem = (props) => {
  const {active, onClick} = props;
  const className = active ? 'is-active' : ''
  return (
    <li className={className} onClick={onClick}>
      <a>{props.children}</a>
    </li>
  );
}

export default TabItem
