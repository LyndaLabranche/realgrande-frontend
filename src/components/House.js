import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Enquiry from './Enquiry';

const House = (props) => {
    const paramObj = useParams();
    const [ showEnquiry, setShowEnquiry ] = useState(false)
    console.log(props.houseInfo)

    useEffect(()=> {
        if(paramObj.id !== undefined && sessionStorage.getItem('role') === 'customer') setShowEnquiry(true)
    }, [paramObj])

    if(!props.houseInfo){
        return <h1>....loading</h1>
    }


    console.log("Props", props)
    return ( 
    <div>
        <div className='row'>
            <div className='col-sm-7 mt-2 w-50'>
           {props.houseInfo.address}
            </div>
           <div className='col-sm-5 m-0 p-0 mt-2 w-50'>
                 <span><b>Price: USD {props.houseInfo.price}</b></span>
            </div>
        </div> 
        
        <div className='row align-self-bottom w-100'>
            <img className="col-sm-7 img-thumbnail img-fluid w-50" src={"/images/"+ props.houseInfo.photo}
            alt='house'></img>
            <div className='col-sm-5 my-3 w-50'>
                <span>{props.houseInfo.description}</span>
                {showEnquiry && <Enquiry address={props.houseInfo.address}/>}
            </div>
        </div>
    </div>
    );
}
 
export default House;