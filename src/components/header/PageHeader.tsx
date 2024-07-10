import styled from "styled-components";


export const PageHeader = () => {
    return (
        <SHeader>
            <a href="/">
                <SLogo src="/logo.svg" alt="logo" />
            </a>
        </SHeader>
    );
};


const SHeader = styled.header`
    position: absolute;
    padding: 24px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    width: 100%;
`
const SLogo = styled.img`
    height: 24px;
`
