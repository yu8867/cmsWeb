import React from 'react';
import styled from 'styled-components';
import { News } from '../type/NewsListType';
import { NewsCategory } from '../category/NewsCategory';
import { NewsDate } from '../date/NewsDate';


export default function NewsList(props: {news: News[]}) {
    const { news } = props;
    console.log(news);
    
    return (
        <>
        <SUl>
          {news.map((content) => (
            <SNewsList key={content.id} >
              <SNewsItem>
                <SNewsImg src="/no-image.png" alt="" />
                <SNewsContent>
                  <SNewsItemTitle>{content.title}</SNewsItemTitle>
                  <SNewsMeta>
                    <NewsCategory category={content.category.name} />
                    <NewsDate pubulishedAt={content.pubulishedAt}/>
                  </SNewsMeta>
                </SNewsContent>
              </SNewsItem>
            </SNewsList>
          ))}
        </SUl>
        </>
    )
}

const SUl = styled.ul`
  @media screen and (max-width: 640px){
    padding: 0 1.2rem 0 1.2rem;
  }
`

const SNewsList = styled.li`
  border-bottom: 2px solid #f3f3f3;
  list-style:none;
  &:last-child {
    border-bottom: none;
  }
`

const SNewsItem = styled.div`
  display: flex;
  gap: 40px;
  padding: 24px 0;
`

const SNewsImg = styled.img`
  width: 180px;
  height: auto;
  border-radius: 10px;
  border: 1px solid rgba(60, 60, 60, 0.4);
  @media screen and (max-width: 640px){
    display: none;
  }
`

const SNewsItemTitle = styled.dt`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`

const SNewsMeta = styled.dd`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 0;
`

const SNewsContent = styled.div`
  text-align: left;
`