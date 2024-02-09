import { useParams } from 'react-router-dom'
import House from './House';


const SearchedHouse = (props) => {
    // const {id} = useParams();
 
    // console.log("useParams", id)

    //**Note param is a string not a number */
    let paramObj = useParams();
    console.log("paramObj", paramObj)
    let searched = props.allhouses.find(house => {
        return paramObj.id === house._id
    })

      if(!props.allhouses){
        return <h1>....loading</h1>
    }
     
    return ( 
       <>
        <House houseInfo={searched}/>
       
       </>
     );
}
 
export default SearchedHouse;