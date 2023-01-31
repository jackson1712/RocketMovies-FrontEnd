import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    width: 100%;
    height: 116px;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    justify-content: space-between;
    padding: 0 12.3rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_200};

    > div {
        margin: 0 6.5rem;
        max-width: 50rem;
    }

    > main {
        display: flex;
        align-items: center;
    }
`;

export const Span = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .4rem;

    h2 {
        font-size: 1.6rem;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    button {
       color: ${({ theme }) => theme.COLORS.GRAY_300};
       font-size: 1.4rem;
       font-weight: 400;
       background-color: transparent;
       border: none;
    }

`;

export const Profile = styled(Link)`
    > img {
        width: 6.4rem;
        height: 6.4rem;
        border: none;
        border-radius: 50%;
        margin-left: 1rem;
    }
`;