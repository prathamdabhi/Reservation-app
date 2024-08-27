import axios from "axios";
import { useEffect, useState } from "react"

const useFatch = (url)=>{
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async ()=>{
            setLoading(true);
            try {
                const res = await axios.get(url);
                setDatas(res.data);
            } catch (error) {
                setError(error);
            }
            setLoading(false)
        };
        fetchData()
    }, [url]);
    const reFetch = async ()=>{
        setLoading(true);
        try {
            const res = await axios.get(url);
            setDatas(res.data);
        } catch (error) {
            setError(error);
        }
        setLoading(false)
    }
    return {datas,loading,error,reFetch}
};

export default useFatch
