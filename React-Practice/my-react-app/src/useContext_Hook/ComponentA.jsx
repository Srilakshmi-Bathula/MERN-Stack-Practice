// import './styles.css';
// import ComponentB from './ComponentB';
// import React, {useState} from 'react';
// function ComponentA(){
//     const[user, setUser] = useState("Sri");
//     return(
//         <div className="box">
//             <h1>ComponentA</h1>
//             <h2>{`Hello ${user}`}</h2>
//             <ComponentB user = {user} />
//         </div>
//     );
// }

// export default ComponentA;
//-----------------------------------------------------------------------------
//Producer Component
import './styles.css';
import ComponentB from './ComponentB';
import React, {useState, createContext} from 'react';

export const UserContext = createContext();

function ComponentA(){
    const[user, setUser] = useState("Sri");
    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value = {user}>
                <ComponentB user = {user} />
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA;