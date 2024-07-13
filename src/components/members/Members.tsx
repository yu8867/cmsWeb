import React, { useEffect, useState } from 'react';
import styled from "styled-components";

import { Hero } from "../layout/Hero";
import { Content } from "../layout/Content";
import { Member, getMembersList } from "../../libs/MicroCMS";
import { MICROCMS_SERVICE_DOMAIN } from "../../ENV";

const data = {
    contents : [
        {
            id: '1',
            image: {
                url: "/img-member1.jpg",
                width: 240,
                height: 240,
            },
            name: "デイビット・チャン",
            position: "CEO",
            profile: "グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。自身の経験と洞察力により、業界のトレンドを見極めて戦略的な方針を策定し、会社の成長を牽引している。"
        },
        {
            id: '2',
            image: {
                url: "/img-member2.jpg",
                width: 240,
                height: 240,
            },
            name: "デイビット・チャン",
            position: "COO",
            profile: "グローバル企業での運営管理と組織改革の経験豊富なエグゼクティブ。以前は製造業界でCOOとして勤務し、生産効率の向上や品質管理の最適化に成功。戦略的なマインドセットと組織の能力強化に対する専門知識は、会社の成長と効率化に大きく貢献している。"
        },
        {
            id: '3',
            image: {
                url: "/img-member3.jpg",
                width: 240,
                height: 240,
            },
            name: "デイビット・チャン",
            position: "CTO",
            profile: "先進技術の研究開発と製品イノベーションの分野で優れた経歴を持つテクノロジーエキスパート。以前は、大手テクノロジー企業の研究開発部門で主任エンジニアとして勤務し、革新的な製品の開発に携わった。最新の技術トレンドに精通し、当社の製品ポートフォリオを革新的かつ競争力のあるものにするためにリサーチと開発をリードしている。"
        },
    ]
};

export const Members = ()  => {
  const datas = getMembersList();
  datas.then((data) => {
    console.log(data.contents);
  });

  return (
    <>
      <Hero 
        title="Members" 
        description="- メンバー紹介 -"
      />
      
      <Content>
          {data.contents.length === 0 ? (<p>メンバーが登録されていません</p>) : (
              <SMemberUl>
                {
                    data.contents.map((member) => (
                        <SMemberList key={member.id}>
                            <SMemberImg src={member.image.url} alt="" />
                            <dl>
                                <Sname>{member.name}</Sname>
                                <SPosition>{member.position}</SPosition>
                                <SProfile>{member.profile}</SProfile>
                            </dl>
                        </SMemberList>
                    ))
                }
              </SMemberUl>
          )}
      </Content>
    </>
  );
};

                  // data.contents.map((member) => (
                  //     <SMemberList key={member.id}>
                  //         <SMemberImg src={member.image.url} alt="" />
                  //         <dl>
                  //             <Sname>{member.name}</Sname>
                  //             <SPosition>{member.position}</SPosition>
                  //             <SProfile>{member.profile}</SProfile>
                  //         </dl>
                  //     </SMemberList>
                    // ))


const SMemberList = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin: 60px 0 60px 0;
  padding: 0 1rem 0 1rem;
  &:nth-child(even){
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 640px){
    flex-direction: column;
    gap: 20px;
    &:nth-child(even) {
      flex-direction: column;
    }
  }
`

const SMemberImg = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 10px;
  border: 1px solid rgba(60, 60, 60, 0.4);
  @media screen and (max-width: 640px){
    margin: auto;
  }
`

const Sname = styled.dt`
  font-size: 1.2rem;
  font-weight: bold;
`

const SPosition = styled.dt`
  padding: 0.5rem 0 2rem;
`

const SProfile = styled.dt`
  font-size: 0.8rem;
`
const SMemberUl = styled.ul`
  padding: 1rem;
  @media screen and (max-width: 640px){
    text-align: center;
  }
`