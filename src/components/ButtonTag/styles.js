import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    font-size: 2rem;

    gap: .8rem;
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.PINK : theme.COLORS.GRAY_100};
    border: none;
    background: none;
`;