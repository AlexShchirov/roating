import styled from "styled-components";

export const NavWrapper = styled.div`
margin-left: 10px;
font-size: 20px;

& > a {
    text-decoration: none;
    color: #1e3786;
}

& > a.active {
    text-decoration: none;
    color: #03eaff;
}

& > a:hover {
    color: steelblue; /* Цвет ссылки */
}
`;

export const Header = styled.header`
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`

export const Body = styled.body`
    display: flex;
`

export const Nav = styled.nav`
    background-color: white;
    min-height: 400px;
    width: 30%;
    color:#282c34;
    font-size: 30px;

`

export const Content = styled.div`
    background-color:#282c34;
    min-height: 400px;
    width: 70%;
    color: white;
    font-size: 30px;
`

export const Footer = styled.footer`
    background-color: #000000;
    width: 100%;
    height: 120px;
    text-align: center;
    color: white;
`
