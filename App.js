function Test()
{
    let age=18;
    let name="kiran";
    let setStatus=false;
    let userDefault=undefined;
    let responseValue=null;
    console.log(age,name,setStatus,userDefault,responseValue);
    let oldage=age;
    age=25;
    let status=setStatus;
    setStatus=true;
    console.log(age,setStatus);
    const ECE=()=>{alert("Check the console output!")}
    return(
        <div><button onClick={ECE}>Primitive Data Types</button></div>
    )
}

ReactDOM.render(<Test/>,document.getElementById("mydiv"));