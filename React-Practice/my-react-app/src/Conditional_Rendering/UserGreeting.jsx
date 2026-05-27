// conditional rendering  = allows you to controle what gets rendered in your application based on certain conditions.
//                         (show, hide, or change components)

import './UserGreeting.css';
import PropTypes from 'prop-types';

function UserGreeting(props){
    //------------------Using if else stmt -------------------
    //  if(props.isLoggedIn){
    //      return <h2 className="welcome-msg">Welcome {props.username}</h2>
    //  }else{
    //      return <h2 className="login-prompt">Please log in to continue!</h2>
    //  }

    // --------------Using ternary OPERATOR-------------
    //return(props.isLoggedIn ? <h2 className="welcome-msg">Welcome {props.username}</h2> : <h2 className="login-prompt">Please log in to continue!</h2> );
    // [OR]
    const welcomeMsg = <h2 className="welcome-msg">Welcome {props.username}</h2>;
    const loggedInPropmt = <h2 className="login-prompt">Please log in to continue!</h2>;

    return(props.isLoggedIn ? welcomeMsg : loggedInPropmt);

}  
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,

};
UserGreeting.defaultProps = {
    isLoggedIn : false,
    username : "Guest",
};
    
export default UserGreeting;