import axios from "axios";
import { useEffect, useState } from "react";
const instance=axios.create({
    baseURL:"https://react-mini-projects-api.classbon.com"
})
const useAxios = (axiosParams)=>{
    const [response,setRespone]=useState([])
    const [error,setErro]=useState('')
    const [loding,setloding]=useState(true)

    const fetchData=async()=>{
        try {
            const result =await instance.request(axiosParams)
            setRespone(result.data)
        } catch (error) {
            setErro(error)
        } finally{
            setloding(false)
        }
    }
    useEffect(()=>{
        fetchData();
    },[axiosParams.url])

    return [response ,loding, error]
}
export default useAxios;