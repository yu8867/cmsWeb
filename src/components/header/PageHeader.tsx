import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";


export const PageHeader = () => {
    return (
        <SHeader>
            <a href="/">
                <SLogo src="/logo.svg" alt="logo" />
            </a>
            <SNav>
                <SNavContainer>
                    <li><SLink to="/news">ニュース</SLink></li>
                    <li><SLink to="/member">メンバー</SLink></li>
                    <li><SLink to="/contact">お問い合わせ</SLink></li>
                </SNavContainer>
            </SNav>
        </SHeader>
    );
};

const SLink = styled(Link)`
    font-weight: bold;
    color: #ffffff;
    list-style: none;
    text-decoration: none;
    font-weight: normal;
    &:hover {
        color: silver;
    }
    @media screen and (max-width: 640px){
        font-size: 0.8rem;
    }
`

const SHeader = styled.header`
    position: absolute;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    width: 96%;
`
const SLogo = styled.img`
    height: 24px;
`
const SNav = styled.nav`
    display: flex;
    color: #ffffff;
`

const SNavContainer = styled.ul`
    display: flex;
    gap: 24px;
    list-style: none;
    padding: 0;
    margin: 0;
    @media screen and (max-width: 640px){
        gap: 12px;
        padding-right: 1rem;
    }
`
const Sa = styled.a`
    font-weight: bold;
    color: #ffffff;
    list-style: none;
    text-decoration: none;
    font-weight: normal;
    &:hover {
        color: silver;
    }
`