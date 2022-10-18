import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import dummy from "../db/data.json";

export default function Day() {
    const [uri, setUri] = useState("/");
    const params = useParams();

    const wordList = dummy.words.filter((item)=>{
        return item.day === Number(params.day);
    });


    return (
        // dummy.words
        <>
            <h2>Day {params.day}</h2>
            <table>
                <tbody>
                    {wordList.map(item => (
                        <tr key={item.id}>
                            <td>{item.eng}</td>
                            <td>{item.kor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}