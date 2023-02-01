import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-areas:'header' 'main';
    grid-template-rows: 11.6rem auto;

    > main {
        overflow-y: auto;
        grid-area: main;
        padding: 4rem 11.5rem;
        width: 100%;
        max-width: 128rem;
        margin: 0 auto;

        h1 {
        margin-top: 2.4rem;
        margin-bottom: 4rem;
    }

    ::-webkit-scrollbar{
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        width: .8rem;
    }
    
    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: .8rem;
    }
    }
`;

export const Form = styled.form`
    > div {
        display: flex;
        align-items: center;
        gap: 4rem;
        margin-bottom: 4rem;

        input {
            width: 100%;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
            color: ${({ theme }) => theme.COLORS.WHITE};

            padding: 1.6rem 1.8rem;
            border: none;
            border-radius: 1rem;
        }
    }
    
    > textarea {
        width: 100%;
        padding: 1.9rem 1.6rem;
        margin-bottom: 4rem;
        
        border: none;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};

        resize: none;

    ::-webkit-scrollbar{
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        height: 9rem;
        width: .8rem;
    }
    
    ::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: .8rem;
    }
    }

    > footer {
        display: flex;
        gap: 4rem;

        button:nth-child(1){
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;