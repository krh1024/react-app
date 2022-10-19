import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch( url ) {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(res => {
            return res.data;
        }).then(data => {
            setData(data);
        });
    }, [url]);

    return data;
}