import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [invalid, setInvalid] = useState(false)

    const navigate = useNavigate()

    let emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }
    
    let passChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    let submitHandler = async (e) => {
        e.preventDefault();
        console.log(email, password);
         try{
            //note header not required here due to use of json parser on backend server
            let response = await axios.post(process.env.REACT_APP_URL+'login', {email: email, password: password})
                 console.log("log in info submitted " + response.data)

                if(response.data.length > 0){
                    sessionStorage.setItem('name', response.data[0].name)
                    sessionStorage.setItem('email', response.data[0].email)
                    sessionStorage.setItem("role",response.data[0].role);
                    
                    (response.data[0].role === "realtor") ? navigate('/enquiries') : navigate('/')
               
                }else{
                    setInvalid(true)
                }
        }catch(err){
            console.log("Error with login attempt" + err)
        }
    }

    return ( 
        <div className='d-flex justify-content-center mt-5'>
            <form className='w-50'>
                {invalid && <h4 className="text-danger">Incorrect Log in credentials. Please try again.</h4>}
                <h1>Log In</h1>
                <div className="mb-3">
                <label htmlFor="" className="form-label">Email</label>
                <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                aria-describedby="emailHelpId"
                placeholder="abc@mail.com"
                onChange={emailChangeHandler}
                />

                <label htmlFor="" className="form-label">Password</label>
                <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                onChange={passChangeHandler}
             />
            </div>
            <button className="btn btn-primary" type='submit' onClick={submitHandler}>Submit</button>
        </form>   
    </div>    
    );
}
 
export default Login;