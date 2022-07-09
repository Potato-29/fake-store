import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetchWomens(url) {
  
    const [womenClothes, setWomenClothes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(url)
            .then((res) => {
                console.log(res.data)
                setWomenClothes(res.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
            
    }, [url])
    
    return {womenClothes, isLoading, error}
}


export default useFetchWomens;