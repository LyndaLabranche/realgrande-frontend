import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    let navigate = useNavigate();

    let loginHandler= () =>{
        navigate('/login');
    }

    let logoutHandler = () => {
        sessionStorage.clear();
        navigate('/');
    }

    let signupHandler = () => {
        navigate('/signup');
    }

    let user = sessionStorage.getItem('name')

    return ( 
        <div className='navbar row header bg-warning align-items-center'>
            <div className='col-3'>
                <Link to="/"> <img className="logo" src="/images/logo.png" alt="/logo"></img></Link>
            </div>
            <div className='col-6 text-center'><h4>Your Real Estate Destination</h4></div>
            <div className='d-flex col-3 justify-content-end'>
                {
                    (sessionStorage.getItem('name'))
                    ?
                    <>
                    <h5 className='mt-2 me-3'><i>Welcome, {user}!</i></h5>
                    <button onClick={logoutHandler} className="btn btn-success mx-1">Log out</button>
                    </>
                    :
                    <div>
                    <Link to='/login'><button onClick={loginHandler} className="full-view btn btn-success mx-1">Log in</button></Link>

                    <Link to='/signup'><button onClick={signupHandler} className="full-view btn btn-info mx-1">Sign Up</button></Link>

                    <div className="responsive col-sm-5">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbardropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="nav navbar-nav">
                            <li className="nav-item"><Link to='/login' className="nav-link">Log in</Link></li>
                            <li className="nav-item"><Link to='/signup' className="nav-link">Sign-up</Link></li>
                        </ul>
                        </div>
                    </div>                  
                    </div>
                }
            </div>
        </div>
    );
}

 
export default Header;


