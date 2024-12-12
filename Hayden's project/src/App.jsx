
import './App.css'
import TodoWrapper from './component/TodoWrapper'

function MyComponent(){
  return (
  <ChildComponent/>)
}

function App() {
  // const text ="helloworld";
  // const handleClick = () =>{
    // alert('hello')
  // }
  return (
    // <>is <dev>
    <> 
    {/* <input type="text" placeholder={text} /> */}
    {/* <h1>{text}</h1>  */}
    {/* {} is javascript */}
    {/* <h1 style={{backgroundColor: 'red'}} className="h1-tag">{text}</h1> */}
    {/* <MyComponent/> */}
    {/* <MyComponent/> */}
    {/* <MyComponent/> */}
    <><TodoWrapper></TodoWrapper></>
    </>)
  
}

export default App