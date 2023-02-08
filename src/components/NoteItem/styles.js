import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 1.6rem;
    gap: .5rem;
    
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    border-radius: 1rem;

    > button {
        border: none;
        background: none;
        color: ${({ theme }) =>  theme.COLORS.PINK};
    }

    > input {
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: none;
    }
`;