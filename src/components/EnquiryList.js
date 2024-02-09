import React, {useEffect, useState} from 'react';
import axios from 'axios';

const EnquiryList = () => {
const [allEnquiries, setAllEnquiries] = useState([]);

    useEffect(() => {
        let fetchData = async () => {
            try {
                let response = await axios.get(process.env.REACT_APP_URL+"enquiries")
                let data  = await response.data;
                console.log(data)

                setAllEnquiries(data)

               

            }catch(err){
                console.log('error while fetching enquiries')
            }
        }
        fetchData();
    }, [])

  return (
    <div>EnquiryList
        <div
            className="table-responsive"
        >
            <table
                className="table table-primary"
            >
                <thead>
                    <tr>
                        <th scope="col">Address</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    allEnquiries.map(enquiry => {
                        return (
                            <tr key={`${enquiry.name}+${enquiry.address}`} className=''>
                                <td>{enquiry.address}</td>
                                <td>{enquiry.name}</td>
                                <td>{enquiry.email}</td>
                                <td>{enquiry.phone}</td>
                                <td>{enquiry.remarks}</td>
                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>
        </div>
        

    </div>

  )
}

export default EnquiryList
