import React, {useState} from 'react';
import axios from 'axios';

const Enquiry = (props) => {
    let [enquiryObj, setEnquiryObj] = useState({
        email: "",
        name: "",
        phone:"",
        remarks: ""
    })
    let [enquirySubmitted, setEnquirySubmitted] = useState(false);
    const [errorWithEnquiry, setErrorWithEnquiry] = useState(false)


    let onChangeHandler = (e) => {
        setEnquiryObj({...enquiryObj, [e.target.name]:e.target.value})
    }

    let onClickHandler = async(e) => {
        console.log("Enquiry submitted")
        //before posting to database add the address field, user does not do this, the address is attached to enquiry automatically
         enquiryObj = {...enquiryObj, address: props.address};
        try{
            let response = await axios.post(process.env.REACT_APP_URL+'enquiry', {...enquiryObj, [e.target.name]:e.target.value})

            console.log(response)
            setEnquirySubmitted(true)
        }catch(err){
            console.log("Error with submitting enquiry")
            setErrorWithEnquiry(true)
        }
    }
  return (
    (enquirySubmitted)
    ?
    <div><h4 className='bg-info mt-5'>Thank you for contacting us, a realtor will get in touch with you soon!</h4></div>
    :
    <div className='w-75'>
         {errorWithEnquiry && <h4 className="text-danger mt-3">Error with enquiry form. Please try again.</h4>}
        <div className="mb-2">
             <h5 className="text-info my-3">Request a Tour:</h5>
            <label htmlFor="" className="form-label">Email</label>
            <input
                type="email"
                className="form-control"
                name="email"
                id=""
                aria-describedby="emailHelpId"
                onChange={onChangeHandler}
            />
        </div>
      {/* Name */}
       <div className="mb-2">
        <label htmlFor="" className="form-label">Name</label>
        <input
            type="text"
            className="form-control"
            name="name"
            id=""
            aria-describedby="helpId"
            placeholder=""
            onChange={onChangeHandler}
        />
       </div>
       {/* Phone */}
       <div className="mb-3">
        <label htmlFor="" className="form-label">Phone</label>
        <input
            type="text"
            className="form-control"
            name="phone"
            id=""
            aria-describedby="helpId"
            placeholder=""
            onChange={onChangeHandler}
        />
       </div>
       {/* Remarks */}
       <div className="mb-2">
        <label htmlFor="" className="form-label">Remarks: </label>
        <textarea className="form-control" name="remarks" id="" rows="2" onChange={onChangeHandler}></textarea>
       </div>

       <button
        type="submit"
        className="btn btn-primary"
        onClick={onClickHandler}
       >
        Submit
       </button>
       
       
    </div>
  )
}

export default Enquiry