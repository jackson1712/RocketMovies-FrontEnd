import styled from "styled-components";

export const Container = styled.span`
    border: none;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.2rem;
    font-family: 'Roboto', 'serif';
    padding: .8rem 1.6rem;
    border-radius: .8rem;
    margin-right: 2.4rem;
`;