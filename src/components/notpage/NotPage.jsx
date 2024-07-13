import styled from 'styled-components';


export const NotPage = () =>  {
  return (
    <>   
      <SNewsSection>
        <SNewsTitle>ページが見つかりません</SNewsTitle>
        <SP>あなたがアクセスしようとしたページは存在しません。</SP>
        <SP>URLを再度ご確認ください。</SP>
      </SNewsSection>
    </>
  );
};

const SNewsSection = styled.section`
  position: relative;
  width: 840px;
  margin: 0 auto 30px;
  padding-bottom: 60px;
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 40px;
`

const SNewsTitle = styled.h2`
  padding: 30px 40px 0;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 4rem;
`

const SP = styled.p`
    text-align: center;
`