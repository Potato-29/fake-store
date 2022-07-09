import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetchCloth(url) {
  
    const [menClothes, setMenClothes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(url)
            .then((res) => {
                console.log(res.data)
                setMenClothes(res.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
            
    }, [url])
    
    return {menClothes, isLoading, error}
}


export default useFetchCloth;