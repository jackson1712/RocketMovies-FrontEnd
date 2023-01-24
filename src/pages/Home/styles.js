import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: grid;
    grid-template-areas: 'header' 'content';
    grid-template-rows: 11.6rem auto;
`;

export const Content = styled.div`
    padding: 5rem 12.3rem 0;
    overflow-y: auto;
    grid-area: content;

    > header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 4rem;

        > h1 {
            font-size: 3.2rem;
            font-weight: 400;
        }
    }

    
`;

export const NewMovie = styled(Link)`
    padding: 1.3rem 3.2rem;
    display: flex;
    align-items: center;
    gap: .8rem;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: .8rem;

    > svg {
        font-size: 2rem;
    }
`;