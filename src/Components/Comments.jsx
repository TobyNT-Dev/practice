import React, { useEffect, useState } from 'react'
import Appservice from "./Appservices/Appservice"

export const Comments = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        try {
            Appservice.GetDetail("comments").then(data => setData(data))
            console.log(data)
        } catch (err) { return err}
    },[])
  return (
    <ul>
        {data.map(item => (
            <li key={item.id}>{item.title}</li>
        ))}
    </ul>
  )
}
