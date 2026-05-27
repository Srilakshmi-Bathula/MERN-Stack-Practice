function ProfilePic(){
    const imgUrl = './src/assets/img3.jpg';
    const handleClick = () => console.log("WOW Sri !");
    return(<img onClick = {handleClick} src= {imgUrl}></img>);

    //const handleClick = (e) => e.target.style.display = "none";
    // return(<img onClick = {(e) => handleClick(e)} src= {imgUrl}></img>);
}
export default ProfilePic;