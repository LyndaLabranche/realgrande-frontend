import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [formObj, setFormObj] = useState({name: "", email:"", password:"", confirm:"", phone:""});
    const [signedUp, setSignedUp] = useState(false);
    const [errorWithSignUp, setErrorWithSignUp] = useState(false);
    

    let changeHandler = (e) => {
        setFormObj({...formObj, [e.target.name] : e.target.value});
    }
   
    let submitHandler = async(e) => {
        e.preventDefault();
        console.log(formObj)

        try{
            //note header not required here due to use of json parser on backend server
            let response = await axios.post(process.env.REACT_APP_URL+'signup', {...formObj, [e.target.name]:e.target.value})
            console.log(response)
    
            if(response.data) setSignedUp(true)
        }catch(err){
            console.log("Error with signup form submission")
            setErrorWithSignUp(true)
        }
    }

    return ( 
        (signedUp)
        ?
        <div><h3 className='bg-success mt-3'>Congratulations! Sign Up was successful! Please log in.</h3></div>
        :
         <div className='d-flex justify-content-center mt-3'>
            <form className='w-50'>
            {errorWithSignUp && <h4 className="text-danger mt-3">Error with sign up. Please try again.</h4>}
            <h1>Sign Up</h1>
                <div className="mb-3">
            <label htmlFor="" className="form-label">Name</label>
            <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                onChange={changeHandler}
                required
            />
            <label htmlFor="" className="form-label">Email</label>
            <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                aria-describedby="emailHelpId"
                placeholder="abc@mail.com"
                onChange={changeHandler}
                required
            />
            
             <label htmlFor="" className="form-label">Phone</label>
            <input
                type="text"
                className="form-control"
                name="phone"
                id="phone"
                onChange={changeHandler}
                required
            />

            <label htmlFor="" className="form-label">Password</label>
            <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                onChange={changeHandler}
                required
            />
            <label htmlFor="" className="form-label">Confirm Password</label>
            <input
                type="password"
                className="form-control"
                name="cpassword"
                id="cpassword"
                onChange={changeHandler}
                required
            />
            </div>
            <button className="btn btn-primary" type='submit' onClick={submitHandler}>Submit</button>
        </form>    
    </div>
       
    );
}
 
export default SignUp;