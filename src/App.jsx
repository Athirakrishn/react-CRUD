
import './App.css'
import { MdDeleteForever } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { TbHandClick } from "react-icons/tb";


function App() {
  

  return (
   <>
   <div className="container-fluid d-flex justify-content-center align-items-center " style={{backgroundImage:`url("https://i.pinimg.com/736x/a0/55/a3/a055a3cc5391382c964c01ed0177aa8a.jpg")`,height:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
   <div className=" justify-content-center p-5 shadow" style={{width:"650px",height:"450px",backgroundColor:"rgb(248, 245, 245,0.6)",borderRadius:"50px"}}>
   <h1 className='text-center ' style={{color:"rgb(29, 2, 90)"}}>MY TODO LIST</h1>
  <div className='d-flex '> <input type="text" className='form-control mx-3'/> <button className='btn' style={{width:"100px",borderRadius:"10px",backgroundColor:"rgb(4, 2, 105)",color:"white"}}>ADD</button></div>
  <div className="div m-3 justify-content-center align-items-center" style={{width:"530px",height:"30px",backgroundColor:"rgb(164, 175, 238)",borderRadius:"10px"}}> <h4 style={{display:"flex",justifyContent:"end"}} > <TbHandClick className='text-dark'/> <MdEditSquare className='text-success'/>  <MdDeleteForever className='text-danger mx-2'/> </h4> </div>
  <div className="d-flex justify-content-center mt-3">
  <button 
    className="btn text-light justify-content-end" 
    style={{
      backgroundColor: "rgb(29, 2, 90)",
      width: "120px",
      height: "40px",
      borderRadius: "10px"}}>
    CLEAR</button>
    </div>
  
  </div>
   </div> 
   </>
  )
} 

export default App
