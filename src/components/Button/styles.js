import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;
    padding: 0 auto;
    font-size: 1.6rem;
    font-weight: 500;
    align-items: center;
    border-radius: 1rem;

    border: none;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    &:disabled{
    opacity: .5;
    }
`;