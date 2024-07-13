import styled from "styled-components";

export const Content = (props:any) => {
    const { children } = props;
    return (
      <>
            <SNewsSection>{children}</SNewsSection>
        </>
    );
};

export const SNewsSection = styled.section`
  position: relative;
  background-color: #ffffff;
  width: 840px;
  margin: -80px auto 30px;
  padding-bottom: 100px;
  border-radius: 10px;
  @media screen and (max-width: 640px){
    width: 100%;
  }
`