import { useState , useEffect } from "react"
import { getAll } from "./services/porosite"
const Porosite = ()=> {
    const [porosite, setPorosite] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        getAll().then(res => {
            setPorosite(res.data)
        }).catch(err => {
            setError(err.message)
        })
    },[])   

    const createPorosite = (porosite) => {
        return (
            
            <tr>
                <td>{porosite.fullName}</td>
                <td>{porosite.product}</td>
            </tr>                 
        )
    }
    return(
        <div>
            <div>
            <br></br>
                <a href="/porosite/shto" className="btn btn-success">
                    Regjistro porosi
                </a>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Emri mbiemri  </th>
                                                <th>  Produkti</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    porosite.map(createPorosite)
                    }
                    
                </tbody>
            </table>           
        </div>
    )
}
export default Porosite