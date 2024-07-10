import styled from "styled-components";
import { PublishedDate } from "../type/NewsListType";


export const NewsDate = (props: PublishedDate) => {
    const { pubulishedAt } = props;
    return (
        <SnewsTagContainer>
            <img src="/clock.svg" alt=""/>
            {pubulishedAt}
        </SnewsTagContainer>
    );
};


const SnewsTagContainer = styled.div`
    display: flex;
    gap: 8px;
`