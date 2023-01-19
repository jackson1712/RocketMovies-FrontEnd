import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    width: 100%;
    height: 116px;
    position: fixed;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    justify-content: space-between;
    padding: 3rem 12.3rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_200};

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Profile = styled.div`
    display: flex;


    > img {
        width: 6.4rem;
        height: 6.4rem;
        border: none;
        border-radius: 50%;
        margin-left: 1rem;
    }


    > div {
        h2 {
           color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        button {
           color: ${({ theme }) => theme.COLORS.GRAY_300};
           font-size: 1.4rem;
           font-weight: 400;
           background-color: transparent;
           border: none;
        }
    }
`;