import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-areas:'header' 'content';
    grid-template-rows: 11.6rem auto;
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

`;

export const Content = styled.div`
    width: 100%;
    padding: 4rem 11.5rem;
    overflow-y: auto;
    grid-area: content;

    > header {
        display: flex;
        align-items: center;
        gap: .8rem;

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    > h1 {
        margin-top: 2.4rem;
        margin-bottom: 4rem;
        font-size: 3.6rem;
        font-weight: 500;
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    width: 100%;
    
    > button {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    }
`;