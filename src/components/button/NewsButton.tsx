import styled from "styled-components";

type propsType = {
    href: string;
    children: string;
}

export const NewsButton = (props:propsType) => {
    const { href, children } = props;
    return (
        <>
            <SConteiner href={href}>{children}</SConteiner>
        </>
    );
};

const SConteiner = styled.a`
    color: #ffffff;
    display: block;
    font-size: 1.2rem;
    padding: 20px 40px 20px;
    width: 200px;
    border-radius: 4px;
    text-decoration: none;
    background: url("/arrow-right.svg") no-repeat right 20px center black;
    &:hover {
        opacity: 0.9;
    }
`