import React from 'react';
import styled from 'styled-components';

import NewsList from './components/newslist/NewsList';
import { NewsButton } from './components/button/NewsButton';
import { News } from './components/type/NewsListType';
import { Hero } from './components/layout/Hero';
import { Content } from './components/layout/Content';


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


export const Home = () => {
  const news = data.contents.slice(0, 2);

  if (news.length === 0) {
    <p>記事がありません</p>
  }

  return (
    <>
      <Hero 
        title="テクノロジーの力で世界を変える" 
        description="私たちは市場をリードしているグローバルテックカンパニーです．"
      />

      <Content>
          <SNewsTitle>News</SNewsTitle>
          <NewsList news={news} />
          <NewsAddLink>
              <NewsButton href="/news">もっと見る</NewsButton>
          </NewsAddLink>
      </Content>
    </>
  );
};

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
  @media screen and (max-width: 640px){
    margin: 0;
    left: 15%;
  }
`