import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Header from "./components/Header";
import DayList from "./components/DayList";
import Day from "./components/Day";
import EmptyPage from './components/EmptyPage';
import CreateWord from './components/CreateWord';
import CreateDay from './components/CreateDay';

export default function App() {
    return (
     <BrowserRouter>
        <div className="App">
            <Header />
            <DayList />
            <Routes>
                <Route exact path="/" element={ <></> }/>
                <Route exact path="/day/:day" element={ <Day /> } />
                <Route exact path="/create_word" element={ <CreateWord /> } />
                <Route exact path="/create_day" element={ <CreateDay /> } />
                {/* 반드시 [*]별 라우팅은 없는 페이지 또는 에러페이지로 맨 아래에 위치해야 한다.
                    맨 위에 두면 전부 EmptyPage 컴포넌트로 이동되어버린다. */}
                <Route exact path="*" element={ <EmptyPage /> } />
            </Routes>
        </div>
    </BrowserRouter>
    );
}