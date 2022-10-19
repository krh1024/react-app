import { useRef } from "react";
import axios from "axios";

import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function CreateWord () {
    const days = useFetch("http://localhost:3001/days");
    const navigate = useNavigate();

    function onSubmit(e) {
        e.preventDefault();

        axios.post("http://localhost:3001/words/", {
            eng: engRef.current.value,
            kor: korRef.current.value,
            day: dayRef.current.value,
            isDone: false
        }).then(res => {
            alert("생성이 완료되었습니다");
            navigate("/day/"+dayRef.current.value);
        });

        // 아래 useRef 로 먼저 DOM객체를 변수에 핑만 찍어놓음.
        // 그리고 우리가 부를 때 변수에 불러서 가져오는 듯 함.
        // console.dir(engRef.current);
        // console.dir(korRef.current);
        // console.dir(dayRef.current);
    }

    // DOM 에 접근가능하게 해줌.
    // 스크롤의 위치 확인, 포커스를 줄 때 등등 
    const korRef = useRef(null);
    const engRef = useRef(null);
    const dayRef = useRef(null);



    return(
        <form>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef} />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터"  ref={korRef} />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                {
                    days.map(day => {
                        return <option key={day.id} value={day.day} >{day.day}</option>
                    })
                }
                </select>
            </div>
            <button onClick={onSubmit}>저장</button>
        </form>
    )
}