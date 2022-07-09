import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetchSingle(url) {
  
    const [singleProduct, setSingleProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()



    useEffect(() => {
        setLoading(true)
        axios
            .get(url)
            .then(res => {
                // console.log(res.data)
                setSingleProduct(res.data)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
            
    }, [url])
    
    return {singleProduct, loading, error}
}


export default useFetchSingle;