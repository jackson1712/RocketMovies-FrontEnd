import styled from "styled-components";

export const Container = styled.input`
    border: none;
    padding: 1.9rem 2.4rem;
    border-radius: 1rem;
    max-width: 70rem;
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;