import React from 'react';

import {Dropdown} from './styles'

export default ({visible=false, direction='left', Component = () => <></>}) => {
  return (
    <>
      {
        visible ? 
          <Dropdown direction={direction}>
            <div className="container">
              {Component}
            </div>
          </Dropdown>
        : 
          <></>
      }
    </>
  );
};
