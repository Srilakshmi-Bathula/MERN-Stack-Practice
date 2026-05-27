// HOW TO STYLE REACT COMPONENTS WITH CSS   
//--------------------------------------------
// (not including external frameworks or preprocessors)

// 1. EXTERNAL
// 2. MODULES
// 3. INLINE
import styles from './Button.module.css';
function Button(){
    // Inline
    const styles = {
  backgroundColor: "rgb(26, 26, 241)",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer"
}
    return(
        // <button className={styles.button}>Click me</button>  // Modules
        <button style={styles}>Click me</button> //Inline
    );
}
export default Button;