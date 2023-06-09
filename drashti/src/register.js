import React from "react";
import './register.css'

function Register(props){
  console.log(props)
  const [name,setName]=React.useState()
  const [mail,setMail]=React.useState()
  const [pas,setPas]=React.useState()
  const [number,setNumber]=React.useState()
  const click =() =>{
    localStorage.setItem('email',mail)
    localStorage.setItem('pass' , pas)
  }
    const fname=(e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }
    const email= (e) =>{
        console.log(e.target.value)
        setMail(e.target.value)
    }
    const pass= (e) =>{
        console.log(e.target.value)
        setPas(e.target.value)
    }
    const num= (e) =>{
      console.log(e.target.value)
      setNumber(e.target.value)
    }
    const handleLoginClick=()=>{
      props.isLogin()
    }
    
    return(
        <>
        <div>
        <div  className="back">
         <div className="container">
            <div className="row justify-content-center" >
                <div className="col-md-7 d-flex align-items-center">
                   
                </div>
                <div className="col-md-5">
                    <div style={{backgroundColor: 'whitesmoke', borderRadius: '30px', border: '2px solid brown'}} className="px-5 py-3">
                        <form>
                            <h2 className="text-center mb-4 " style={{textDecoration: 'underline brown'}}>Register now!!</h2>
                            
                              <div className="input-group mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 20 20">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                  </svg>
                                <input style={{borderRadius: '10px'}} type="text"  className="form-control" name="name" placeholder="enter your full name" onChange={(e)=> fname(e)}></input>
                                </div>
                            <div className="input-group mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 20 20">
                                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                                  </svg>
                                
                                    <input type="text" style={{borderRadius: '10px 0px 0px 10px'}} className="form-control mb-2 " placeholder="Your Email" onChange={(e)=> email(e)}></input>
                                    <span className="input-group-text mb-2" style={{borderRadius:'0px 10px 10px 0px'}} >@example.com</span>
                                  </div>
                            
                              
                              <div className="row mb-3">
                                <div className="col-md-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-buildings-fill" viewBox="0 0 20 20">
                                <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V.5ZM2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-1 2v1H2v-1h1Zm1 0h1v1H4v-1Zm9-10v1h-1V3h1ZM8 5h1v1H8V5Zm1 2v1H8V7h1ZM8 9h1v1H8V9Zm2 0h1v1h-1V9Zm-1 2v1H8v-1h1Zm1 0h1v1h-1v-1Zm3-2v1h-1V9h1Zm-1 2h1v1h-1v-1Zm-2-4h1v1h-1V7Zm3 0v1h-1V7h1Zm-2-2v1h-1V5h1Zm1 0h1v1h-1V5Z"/>
                              </svg></div>
                              <div className="col-md-11">
                              <select  style={{borderRadius: '10px'}} className="form-select" aria-label="Default select example">
                                <option selected>resident</option>
                                <option value="1">ahmedabad</option>
                                <option value="2">jamnagar</option>
                                <option value="3">surat</option>
                              </select> </div>
                              </div>

                              <div className="input-group mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                  </svg>
                                <input style={{borderRadius: '10px'}} type="number" className="form-control" name="contect-num" placeholder="enter valid contect number" onChange={(e)=> num(e)}></input>
                              </div>
                              <div className="input-group mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 20 20">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                                  </svg>
                                <input style={{borderRadius: '10px'}} type="password" className="form-control" name="password" placeholder="Password" onChange={(e)=> pass(e)}></input>
                              </div>
                            <div className="text-center mb-3">
                                <input type="checkbox" name=""></input>
                                <label><small style={{textAlign: 'center'}}>by signing up , i agree to <a href="##" style={{color: 'brown'}}><b>Term and Conditions</b></a></small></label>
                            </div>
                            <button type="button" className="btn btn-secondary form-control mb-3" style={{borderRadius: '10px' , backgroundBcolor: 'brown'}} onClick={(e)=>click(e)}>register</button>
                            <button type="button" className="btn btn-secondary form-control mb-3" style={{borderRadius: '10px' , backgroundBcolor: 'brown'}}  onClick={()=>handleLoginClick()}>login</button>
                            
                        </form>
                    </div>
                </div>
            </div>
         </div>
    </div>
        </div>
        </>
    )
}
export default Register

