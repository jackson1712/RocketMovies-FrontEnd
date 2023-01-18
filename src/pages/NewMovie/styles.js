import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-areas:'header' 'auto';

    > header {
        display: flex;
        align-items: center;

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;

export const Form = styled.form`
    
`;