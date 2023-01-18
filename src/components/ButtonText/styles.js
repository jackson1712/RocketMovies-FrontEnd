import styled from "styled-components";

export const Container = styled.button`
    color: ${({ theme }) => theme.COLORS.PINK};
    border: none;
    background: none;
    font-family: 'Roboto slab', 'serif';
    
    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2rem;
    }
`;