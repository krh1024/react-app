import axios from "axios";
import { useNavigate } from "react-router-dom";

import useFetch from "../hooks/useFetch";

export default function CreateDay() {

    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();
    function addDay() {
        axios.post("http://localhost:3001/days/", {
            day: days.length+1,
        }).then(res => {
            alert("생성이 완료되었습니다");
            navigate("/");
        });
    }


    return (
        <div>
            <h3>현재 일수 : {days.length}일</h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    );
}