import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    > header {
        display: flex;
        align-items: center;
        padding-left: 14rem;
        margin-top: 0;
        height: 14.4rem;
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.PINK_LIGHT};
        gap: .8rem;


        button {
            position: fixed;
            left: 10rem;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 34rem;
    margin: 0 auto;
    gap: .8rem;


    > .inputs{
        width: 100%;
        div {
            margin-bottom: .8rem;
        }
        
        div:nth-child(3){
            margin-top: 1.6rem;
        }

        svg {
            margin-left: 2rem;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    .loading{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Avatar = styled.div`
    position: relative;
    top: -9rem;
    right: -1.5rem;

    > img {
        border-radius: 50%;
        width: 18rem;
        height: 18rem;
        margin-left: 2rem;
    }

    > label {
        position: relative;
        top: -3rem;
        left: -5rem;
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;
        padding: 1.4rem;
        margin-bottom: 6.4rem;

        cursor: pointer;

        input {
            display: none;
        }

        > svg {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
            font-size: 2rem;
            position: relative;
            top: .2rem;
        }
    }
`;