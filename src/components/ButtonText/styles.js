import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    font-size: 1.6rem;

    gap: .8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    border: none;
    background: none;
    
    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2rem;
    }
`;