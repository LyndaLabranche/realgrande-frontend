import {useNavigate} from 'react-router-dom';

const Search = (props) => {
    const navigate = useNavigate();

    if(!props.allhouses){
        return <h1>....loading</h1>
    } 

    let arrOfCounties = props.allhouses.map(elem => {
        return elem.county
    })

    const uniqueCounties = [...new Set(arrOfCounties)]

    const changeHandler = (e) => {
        console.log("handler", e.target.value)
        e.target.value !== "select" ? navigate('/searchResults/'+ e.target.value) : navigate('/')
    }
    return ( 
        <div className="row d-flex justify-content-center my-4">
            <div className="select col-sm-5 text-center">
                 <select onChange={changeHandler}>
                    <option value="select"> Select County</option>
                {uniqueCounties.map(countyName => {
                    return <option key={countyName} value={countyName}>
                        {countyName}
                    </option>
                })}
            </select>
            </div>
        </div>
    );
}
 
export default Search;