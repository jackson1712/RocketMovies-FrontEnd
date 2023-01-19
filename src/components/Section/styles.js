import styled from "styled-components";

export const Container = styled.section`
    margin-bottom: 4rem;

    > h2 {
    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.COLORS.GRAY_400};
    font-size: 2rem;
    font-weight: 400;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 2.4rem;
        border-radius: .8rem;
        border: none;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
        padding: 1.6rem;
    }
`;

