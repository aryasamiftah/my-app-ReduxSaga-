import React, {useState} from "react"
import KirimNamaChild from "./kirimdatanamachild";

const KirimNama = (props) => {
    const [firstName, setFirstName]=useState('Keanu')

    // const[data,setFirsname] = useState({
    //     firstName : 'Keanu',
    //     lastName : 'Reeves'
    // })

    // setFirstName("Keanu")
    
    return (
        <div>
            <KirimNamaChild nama={firstName}/>
        </div>
    )
};

export default KirimNama;