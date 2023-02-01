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
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

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