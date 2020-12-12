import React from 'react';
import './Container.css';

const Container = ({children}) => (
  <div className="ContainerWrapper">
    {children}
  </div>
);



export default Container;
