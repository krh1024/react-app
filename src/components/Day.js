import { useParams } from 'react-router-dom';

import Word from './Word';
import useFetch from '../hooks/useFetch';

export default function Day() {
    const params = useParams();
    const words = useFetch("http://localhost:3001/words?day="+params.day);

    return (
        // dummy.words
        <>
            <h2>Day {params.day}</h2>
            <table>
                <tbody>
                    {words.map(item => (
                        <Word item={item} key={item.id} />
                    ))}
                </tbody>
            </table>
        </>
    );
}