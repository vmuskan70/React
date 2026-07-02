import Home from "./Home";
import Welcome from "./Welcome";

function  App(){
  console.log("I am the main App of this project");
   let name="Muskan";
   let topic="React"
  return(
    <>
      <h2>My name is {name}</h2>
      <h1><b><u>Hiii!!!</u></b></h1>
      <h1>Welcome to {topic}</h1>
      <div>Now you will react...</div>

          <div>
      <h2>good morning</h2>
      <h1><b><u>Heyy!!!</u></b></h1>
      <h1>Welcome</h1>
      <div>Now you will react...</div>
    </div>
    <Home/>
    <Welcome/>


    </>
  );
}
export default App;