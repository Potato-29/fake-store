import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetchElec(url) {
  
    const [electronics, setElectronics] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()


    const getId = () => {
        
    }

    useEffect(() => {
        setLoading(true)
        axios
            .get(url)
            .then((res) => {
                console.log(res.data)
                setElectronics(res.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
            
    }, [url])
    
    return {electronics, loading, error}
}


export default useFetchElec;