import styled from "styled-components";
import backgroundImg from "../../assets/background.png";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    
    align-items: stretch;
    `;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: auto 13.6rem;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 4.8rem;
        font-weight: bold;
        line-height: 6.3rem;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin-bottom: 4.8rem;
        font-size: 1.4rem;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-weight: 500;
    }

    > button {
        width: 100%;
        padding: 1.6rem;
        margin-bottom: 4.2rem;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

        border-radius: 1rem;
        border: none;
    }

    > input {
        width: 100%;
        
    }

    > main {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: .8rem;
        margin-top: 4.8rem;
        margin-bottom: 1.6rem;
    }

    > footer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .8rem;

        > .return {
            color: ${({ theme }) => theme.COLORS.PINK};
            font-size: 1.6rem;
        }

        svg {
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.PINK};
        } 
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;