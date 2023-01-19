import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    line-height: 1px;
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    border-radius: 1rem;

    > button {
        border: none;
        background: none;
        color: ${({ theme }) =>  theme.COLORS.PINK};
        padding: 1.6rem;
    }

    > input {
        padding: 1.6rem;
        width: 100%;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;
    }
`;