import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Word ( props ) {
    const [item, setItem] = useState(props.item);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(props.item.isDone);

    function toggleShow() {
        setIsShow(isShow ? false : true);
    }
    function toggleDone() {
        axios.put("http://localhost:3001/words/"+props.item.id, {
            ...props.item,
            isDone: !isDone,
        }).then(res => {
            if(res.ok) {
                setIsDone(!isDone);
            }
        });
    }

    function del() {
        if(window.confirm('정말로 삭제하시겠습니까?')) {
            axios.delete("http://localhost:3001/words/"+props.item.id)
            .then(res => {
                if(res.statusText === "OK") {
                    setItem({id:0});
                }
            });
        }
    }
    if(item.id === 0) {
        return null;
    }

    return (
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" checked={isDone} onChange={toggleDone} />
            </td>
            <td>{item.eng}</td>
            <td>{isShow && item.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? '감추기':"보기"}</button>
                <button  onClick={del} className='btn_del'>삭제</button>
            </td>
        </tr>
    );
}