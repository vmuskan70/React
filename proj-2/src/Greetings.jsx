function Greeting(props){
console.log(props)
    return(
        <>
        <h1>Hello {props.name} ,How are you?</h1>
        <h1>you are in {props.course}</h1>
        <h1>contact no is {props.mobile}</h1>
        </>
    );
}
export default Greeting;