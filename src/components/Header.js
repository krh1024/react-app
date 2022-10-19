import { Link } from "react-router-dom";

import useFetch from "../hooks/useFetch";

export default function Header() {

    const days = useFetch("http://localhost:3001/days");

    return (
        <article>
            <div className="header">
                <h1>
                    <Link to="/">토익 영단어(고급)</Link>
                </h1>
                <div className="menu">
                    <Link to="/create_word" className="link">
                        단어추가
                    </Link>
                    <Link to="/create_day" className="link">
                        Day 추가
                    </Link>
                </div>
            </div>
        </article>
    )
}