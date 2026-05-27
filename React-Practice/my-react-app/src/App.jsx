//React is all about re using components
//A component is a small section of code that can include javascript and html.
//Function return a code that reusable




// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'

// function App() {
//   return(
//   <>
//    <Header/>
//    <Food/>
//    <Footer/>
//   </>
//   );
// }

// ----------------------------------CARD COMPONENT--------------------
// import Card from './Card';

// function App(){

//   return(
//     <>
//     <Card/>
//     <Card/>
//     <Card/>
//     <Card/>
    
//     </>
//   );
// }

// export default App

//-------------------------------------ADDING STYLES TO REACT COMPONENTS-----------------
// import Button from './Button/Button.jsx';
// function App(){
//   return(
//     <Button/>
//   );

// }
// export default App;


//-----------------------------------PROPS : TYPES & DEFAULTS ----------------------------------
// import Student from './Props/Student.jsx';

// function App(){
//   return(
//     <>
//     <Student name = "Sri" age = {19} isStudent = {true}/>
//     <Student name = "Lucky" age = {20} isStudent = {false}/>
//     <Student name = "Sahithi" age = {21} isStudent = {true}/>
//     <Student />
//     </>
//   );
// }
// export default App;

//----------------------------------Conditional Rendering-------------------

// import UserGreeting from "./Conditional_Rendering/UserGreeting";
// function App(){
//   return(
//     <UserGreeting isLoggedIn = {true} username = "Sri"/>
//   );
// }
// export default App;

//----------------------------------Render Lists-------------------
// import Lists from "./Render_Lists/Lists";
// function App(){

//   const fruits = [{id : 1, name: "Apple", cal : 90}, 
//                     {id : 2, name: "Banana", cal : 120}, 
//                     {id : 3, name: "Orange", cal : 60}, 
//                     {id : 4, name: "Mango", cal : 40}, 
//                     {id : 5, name: "Coconut", cal : 190}];

//   const vegetables = [{id : 1, name: "Cucumber", cal : 20}, 
//                     {id : 2, name: "Brinjal", cal : 170}, 
//                     {id : 3, name: "Carrot", cal : 160}, 
//                     {id : 4, name: "Tomoto", cal : 20}, 
//                     {id : 5, name: "Lady's Finger", cal : 100}];

//   return(
//     <>
//       {fruits.length > 0 && <Lists items = {fruits} category = "Fruits" />}
//       {vegetables.length > 0 && <Lists items = {vegetables} category = "Vegetables" />}
//     </>
//   );
// }
// export default App;

//----------------------------------Click Events-------------------
// import Buton from "./Click_Events/Buton";
// import ProfilePic from "./Click_Events/ProfilePic";
// function App(){
//   return(
//     <>
//       <ProfilePic/>
//       <Buton/>
//     </>
//   );
// }
// export default App;

//----------------------------------useState() - React hook-------------------
// import EmpDet from "./React_Hooks/EmpDet";
// import Counter from "./React_Hooks/Counter";
// function App(){
//   return(
//   <>
//     {/* <EmpDet/> */}
//     <Counter/>
//   </>
//   );
// }
// export default App;

//----------------------------------onChange Event-------------------
// import OcEvent from "./onChange_Event/OcEvent";
// function App(){
//   return(
//     <OcEvent/>
//   );
// }
// export default App;

//----------------------------------Color_Picker App-------------------
// import ColorPicker from "./Color_Picker/ColorPicker";
// function App(){
//   return(<ColorPicker/>)
// }
// export default App;

//----------------------------------updater function -------------------
// import UpadaterFunction from "./Updater_Function/UpdaterFunction";
// function App(){
//   return(<UpadaterFunction/>);
// }
// export default App;

//----------------------------------Update OBJECT in state -------------------
// import Update_Obj from "./Update_OBJ_State/Update_Obj";
// function App(){
//   return(<Update_Obj/>);
// }
// export default App;

//----------------------------------Update OBJECT in state -------------------
// import Update_Array from "./Update_Array_State/Update_Array";
// function App(){
//   return(<Update_Array/>);
// }
// export default App;

//----------------------------------Update Array Of Objects -------------------
// import Array_Objs from "./Update_Array_Objs/Array_Objs";
// function App(){
//   return(
//     <Array_Objs/>
//   );
// }
// export default App;

//----------------------------------ToDo_List App -------------------
// import ToDo_List from "./To_Do_List/ToDo_List";
// function App(){
//   return(<ToDo_List/>);
// }
// export default App;

//----------------------------------UseEffect Hook -------------------
//import UseEffect from "./useEffect_Hook/UseEffect";
// import WindowSize from "./useEffect_Hook/WindowSize";
// function App(){
//   return(<>
//     {/* <UseEffect/> */}
//     <WindowSize/>
//   </>);
// }
// export default App;

//----------------------------------Digital Clock App -------------------
// import DigitalClock from "./React_Hooks/Digital_Clock/DigitalClock";
// function App(){
//   return(<DigitalClock/>)
// }
// export default App;

//----------------------------------useContext() Hook-------------------
// import ComponentA from "./useContext_Hook/ComponentA";
// function App(){
//   return(<ComponentA/>)
// }
// export default App;

//----------------------------------useRef() Hook-------------------
// import UseRef from "./useRef_Hook/UseRef";
// function App(){
//   return(
//   <>
//   <UseRef/>
//   </>
//   );
// }
// export default App;

//----------------------------------StopWatch Component-------------------
import StopWatch from "./Stop_Watch/StopWatch";
function App(){
  return(
    <div>
      <StopWatch />
    </div>
  );
}
export default App;