import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: "header" "content";

    > main {
        grid-area: content;
        padding: 2rem 11.5rem;
        overflow-y: auto;
        max-width: 128rem;
        margin: 0 auto;

        ::-webkit-scrollbar{
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            width: .8rem;
        }
        
        ::-webkit-scrollbar-thumb{
            background-color: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 1rem;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    > header {
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-top: 2.4rem;
        margin-bottom: 2.4rem;
    }

    > div {
        padding-bottom: 4rem;
    }

    > span {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        line-height: 2.1rem;
        text-align: justify;
        overflow-wrap: break-word;
        box-shadow: 0rem 0rem 2.5rem -2rem pink;
        border-radius: 1rem;
        padding: 1rem;
    }

    > button:first-child{
        background: none;
        width: 8rem;
    }

    > button:last-child {
        margin: 7rem auto 0;
        background: none;
        font-weight: 500;
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