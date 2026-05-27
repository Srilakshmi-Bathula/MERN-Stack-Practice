import './styles.css';
import ComponentC from './ComponentC';
import React, {useState} from 'react';
function ComponentB(){
    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC />
        </div>
    );
}

export default ComponentB;