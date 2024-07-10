import styled from "styled-components"
import { Category } from "../type/NewsListType";


export const NewsCategory = (props: Category) => {
    const { category } = props;
    return (
        <SNewsTag>{category}</SNewsTag>
    );
};

const SNewsTag = styled.span`
  background-color: silver;
  padding: 4px 12px;
  border-radius: 6px;
`