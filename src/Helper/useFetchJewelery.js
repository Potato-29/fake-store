import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetchJewelery(url) {
  
    const [jewelery, setJewelery] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(url)
            .then((res) => {
                console.log(res.data)
                setJewelery(res.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
            
    }, [url])
    
    return {jewelery, isLoading, error}
}


export default useFetchJewelery;