import styled from 'styled-components';

type Props = {
    title: string;
    description: string;
};

export const Hero = (props:Props) => {
    const { title, description } = props;
    return (
      <>
            <SSection>
            <div>
                <Stitle>{title}</Stitle>
                <Sdescription>{description}</Sdescription>
            </div>
            <Simg src="/img-mv.jpg" alt="" />
            </SSection>

        </>
    );
};

const SSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  overflow: hidden;
  padding: 180px 0;
  @media screen and (max-width: 640px){
    padding: 150px 0;
    width: 100%;
  }
`

const Stitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 640px){
    font-size: 1.5rem;
    padding: 0.5rem;
  }
`

const Sdescription = styled.p`
  font-size: 1rem;
  text-align: center;
  @media screen and (max-width: 640px){
    font-size: 0.8rem;
    padding: 0 2rem 0 2rem;
  }
`

const Simg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: right;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -9999;
  @media screen and (max-width: 640px){
    width: auto;
  }
`