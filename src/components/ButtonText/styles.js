import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    justify-content: center;

    gap: .8rem;
    width: 100%;
    color: ${({ theme }) => theme.COLORS.PINK};
    border: none;
    background: none;
    font-family: 'Roboto slab', 'serif';
    
    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2rem;
    }
`;