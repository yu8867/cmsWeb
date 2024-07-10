import styled from "styled-components";


export const PageFooter = () => {
    return (
        <SFooter>
            <Sul>
                <li>
                    <Sa href="/news">ニュース</Sa>
                </li>
                <li>
                    <Sa href="/member">メンバー</Sa>
                </li>
                <li>
                    <Sa href="/contact">お問い合わせ</Sa>
                </li>
            </Sul>
            <SCopy>&copy; SIMPLE. All Rights Reserved 2024</SCopy>
        </SFooter>
    );
};


const SFooter = styled.footer`
    padding: 16px 24px;
    text-align: center;
    margin-top: 40px;
`

const Sul = styled.ul`
    display: flex;
    justify-content: center;
    gap: 50px;
    list-style: none;
` 

const Sa = styled.a`
    color: #333;
    text-decoration: none;
    &:hover {
        opacity: 0.8;
    }
`

const SCopy = styled.p`
    margin-top: 2rem;
    font-size: 0.8rem;
`