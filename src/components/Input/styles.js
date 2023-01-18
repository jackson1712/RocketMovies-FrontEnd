import styled from "styled-components";

export const Container = styled.input`
    border: none;
    padding: 1.9rem 2.4rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 0 6.5rem;
    flex: 1px;
`;