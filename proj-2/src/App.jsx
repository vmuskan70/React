import Contact from "./ContactUs";
import Greeting from "./Greetings";
import Home from "./Home";
import Welcome from "./Welcome";

function  App(){
  console.log("I am the main App of this project");
   let name="Surbhi";
   let topic="Html"
  return(
    <>
      <h2>My name is {name}</h2>
      <h1><b><u>Hiii!!!</u></b></h1>
      <h1>Welcome to {topic}</h1>
      <div>Now you will react...</div>

          <div>
    </div>
    <Home/>
    <Welcome/>
    <Contact/>
    <Greeting name="Muskan" course="b.tech" mobile={2343}/>


    </>
  );
}
export default App;