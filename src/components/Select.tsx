import { useState } from "react"
import { useHistory } from "react-router-dom"
import Result from "./Result"

const Select = () => {
    let history = useHistory()
    
    const [start,setStart] = useState("")
    const [end,setEnd] = useState("")

    const btn_press = (start: string, end: string) => {
        let dateStart = new Date(start)
        let dateEnd = new Date(end)
        // check dateStart > dateEnd
        if(start === "" || end === "" || dateStart > dateEnd)
            alert("Plese select start date and end date correctly")
        else
            history.push("result?start="+start+"&end="+end);
            <Result />
    }

    return (
        <div className='text-center space-y-3 space-x-3'>
            <p className='text-2xl font-semibold'>Select historical range</p>
            {/* first */}
            <span>From date</span>
            <input type='date' onChange={e => setStart(e.target.value)}></input>
            {/* second */}
            <span>To date</span>
            <input type='date' onChange={e => setEnd(e.target.value)}></input>
            <br />
            {/* Get Data */}
            <button onClick={() => btn_press(start,end)}>Get data</button>
        </div>
    )
}

export default Select