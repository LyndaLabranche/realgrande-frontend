import { useNavigate } from "react-router-dom";

const SearchedRow = ({filteredhouse}) => {
    console.log('searchedrow',filteredhouse)
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/searchedhouse/' + filteredhouse._id);
    }
    return ( 
        <tr key={filteredhouse._id} onClick={clickHandler}>
            <td>{filteredhouse.address}</td>
            <td>{filteredhouse.price}</td>
        </tr>
     );
}
 
export default SearchedRow;