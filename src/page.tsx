import React from 'react';
import styled from 'styled-components';
import { NewsButton } from './components/button/NewsButton';
import NewsList from './components/newslist/NewsList';
import { News } from './components/type/NewsListType';
import { PageHeader } from './components/header/PageHeader';
import { PageFooter } from './components/footer/PageFooter';


const data: {contents: News[]} = {
  contents: [
    {
      id: '1',
      title: '渋谷オフィスに移転しました',
      category: {
        name: '更新情報'
      },
      pubulishedAt: '2023/05/19',
      createdAt: '2023/05/19'
    },
    {
      id: '2',
      title: '当社CTOが業界リーダーTOP30に選出されました',
      category: {
        name: '更新情報'
      },
      pubulishedAt: '2023/05/19',
      createdAt: '2023/05/19'
    },
    {
      id: '3',
      title: 'テストの記事です',
      category: {
        name: '更新情報'
      },
      pubulishedAt: '2023/03/10',
      createdAt: '2023/03/10'
    },
  ]
};


export default function Page() {
  // const { news } = props;
  const news = data.contents.slice(0, 2);

  if (news.length === 0) {
    <p>記事がありません</p>
  }

  return (
    <>
      <PageHeader />
      <SSection>
        <div>
          <Stitle>テクノロジーの力で世界を変える</Stitle>
          <Sdescription>私たち市場をリードしているグロバルテックカンパニーです．</Sdescription>
        </div>
        <Simg src="/img-mv.jpg" alt="" />
      </SSection>

      <SNewsSection>
        <SNewsTitle>News</SNewsTitle>
        <NewsList news={news} />
        <NewsAddLink><NewsButton href="/news">もっと見る</NewsButton></NewsAddLink>
      </SNewsSection>
      <PageFooter />
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
`

const Stitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`

const Sdescription = styled.p`
  font-size: 1rem;
  text-align: center;
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
`


const SNewsSection = styled.section`
  position: relative;
  background-color: #ffffff;
  width: 840px;
  margin: -80px auto 30px;
  padding-bottom: 100px;
  border-radius: 10px;
`

const SNewsTitle = styled.h2`
  padding: 30px 40px 0;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`

const NewsAddLink = styled.div`
  position: absolute;
  left: 30%;
  margin: 10px;
`