import { useParams } from 'react-router-dom';
import SearchedRow from './SearchedRow';

const SearchResults = (props) => {
    const paramObj = useParams();
    console.log(paramObj)
    console.log(props.allhouses)
    const filteredArr = props.allhouses.filter(house => (
    paramObj.county === house.county
    ));

    if(!props.allhouses){
        return <h1>....loading</h1>
    }
     
    return ( 
    <div>
          <h5>Search Results:</h5>
        <div
            className="table-responsive"
        >
            <table
                className="table table-primary"
            >
                <thead>
                    <tr>
                        <th scope="col">Address</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredArr.map(item => {
                            return (
                                <SearchedRow key={item._id} filteredhouse={item} />
                            )
                            })
                    }
                </tbody>
            </table>
        </div>
        
    </div> );
}
 
export default SearchResults;

