import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: "header" "content";

    > header {

        input {
        height: 5.6rem;
        max-width: 50rem;
        flex: 1;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        padding-left: 2rem;
        border-radius: 1rem;
        margin: 0 1rem;

            &::placeholder {  
                color: ${({ theme }) => theme.COLORS.GRAY_300};
            }
        }
    }

    > main {
        width: 100%;
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

        svg {
            font-size: 3rem;
        }
    }

    > div {
        padding-bottom: 4rem;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        line-height: 2.1rem;
        text-align: justify;
        overflow-wrap: break-word;
        box-shadow: 0rem 0rem 2.5rem -2rem pink;
        border-radius: 1rem;
        padding: 1rem;
        overflow: scroll;
        max-height: 25rem;
    }

    > p:hover {
        transition: .4s;
        scale: 1.1;
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

    > span {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.COLORS.PINK};
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