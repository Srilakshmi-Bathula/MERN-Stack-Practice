import './Lists.css';

function Lists(props){
    // const fruits = ["Apple", "Banana", "Orange", "Mango", "coconut"];
    // const listItems = fruits.map(fruit => <li>{fruit}</li>);
    // return(<ul>{listItems}</ul>);

//---------------------------------------------------------------------------------------
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL OREDR
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE-ALPHABETICAL OREDR
    // fruits.sort((a, b) => a.cal - b.cal); //NUMERICAL ORDER
    // fruits.sort((a, b) => b.cal - a.cal); //REVERSE -NUMERICAL ORDER
//----------------------------------------------------------------------------------------------
    //const lowCalFruits = fruits.filter(fruit => fruit.cal < 100);
    // const highCalFruits = fruits.filter(fruit => fruit.cal >= 100);
    
    // const listItems = lowCalFruits.map(lowCalFruit => <li key = {lowCalFruit.id}>
    //                                                 {lowCalFruit.name}: &nbsp;
    //                                                 <b>{lowCalFruit.cal}</b> </li>);

    // const listItems = highCalFruits.map(highCalFruit => <li key = {highCalFruit.id}>
    //                                                 {highCalFruit.name}: &nbsp;
    //                                                 <b>{highCalFruit.cal}</b> </li>);
//---------------------------------------------------------------------------------------------------

 const category = props.category;
 const itemList = props.items;
 
 const listItems = itemList.map(item => <li key = {item.id}>
                                                 {item.name}: &nbsp;
                                              <b>{item.cal}</b> </li>);
    

    return(
        <>
            <h2 className="list-category">{category}</h2>
            <ul className="list-items">{listItems}</ul>
        </>
    );
}
export default Lists;