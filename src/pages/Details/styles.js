import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 'header' 'content';
    `;

export const Content = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 4rem 12.5rem;
    overflow-y: auto;

    > h1 {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2.4rem;

        > svg {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    > header {
        display: flex;
        align-items: center;
        margin-bottom: 2.4rem;

        > svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            margin-right: 1rem;
        }
    }

    > div {
        padding-bottom: 4rem;
    }

    > span {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        line-height: 2.1rem;
        text-align: justify;
    }
`;


export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

        img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
    }
        span {
        font-size: 1.6rem;
        font-family: 'Roboto', 'serif';
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        > svg {
            margin-right: .8rem;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;