import React, { useState } from "react";
import styles from "./components/Site.module.css";
import { PageOne } from "./components/pages/PageOne";
import { PageTwo } from "./components/pages/PageTwo";
import { PageThree } from "./components/pages/PageThree";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";
import { Error404 } from "./components/pages/Error404";
import styled from "styled-components";
import { Body, Content, Footer, Header, Nav, NavWrapper } from "./components/pages/_styles";

const PATH ={
    PAGE1:"/page1",
    PAGE2:"/page2",
    PAGE3:"/page3",
    ERROR:"/page/error"
} as const


function App() {
    return (
        <div>
            <Header >
                <h1>HEADER</h1>
            </Header>
            <Body>
                <Nav>
                    <NavWrapper>
                        <NavLink to={PATH.PAGE1}>Page1</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.PAGE2}>Page2</NavLink>
                    </NavWrapper>
                    <NavWrapper>
                        <NavLink to={PATH.PAGE3}>Page3</NavLink>
                    </NavWrapper>
                </Nav>
                <Content >
                    <Routes>
                        <Route path="/" element={<Navigate to={"/page1"} />} />

                        <Route path={PATH.PAGE1} element={<PageOne />} />
                        <Route path={PATH.PAGE2} element={<PageTwo />} />
                        <Route path={PATH.PAGE3} element={<PageThree />} />

                        <Route path='/*' element={<Error404 />}/>
                        {/* <Route path={PATH.ERROR} element={<Error404 />} />
                        <Route path="/*" element={<Navigate to={PATH.ERROR} />} /> */}
                    </Routes>
                </Content>
            </Body>
            <Footer >abibas 2023</Footer>
        </div>
    );
}



export default App;

