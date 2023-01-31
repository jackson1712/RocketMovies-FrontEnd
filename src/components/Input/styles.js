import styled from "styled-components";

export const Container = styled.div`
    border: none;
    display: flex;
    align-items: center;

    border-radius: 1rem;
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};


    > input {
        height: 5.6rem;
        width: 100%;
        flex: 1;
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        padding-left: 1rem;
        
        &::placeholder {  
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;