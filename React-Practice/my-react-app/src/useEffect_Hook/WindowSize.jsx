import React, {useState, useEffect} from "react";

function WindowSize(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

     useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event Listner Added");

        return () => {  //Cleaneup function
        window.removeEventListener("resize", handleResize);
        console.log("Event Listner Removed");
        }
     }, [])

     useEffect(() => {
        document.title = `Size: ${width} * ${height}`;
     }, [height, width]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(<>
        <p>Window Width : {width}</p>
        <p>Window Height : {height}</p>
    </>);
}
export default WindowSize;