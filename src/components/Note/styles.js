import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
        background-color: ${({ theme }) => theme.COLORS.PINK_LIGHT};
        padding: 3.2rem;
        display: flex;
        flex-direction: column;
        border: none;
        border-radius: 1.6rem;
        margin-bottom: 2.4rem;

        h2 {
            font-size: 2.4rem;
            font-weight: bold;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            margin-bottom: .8rem;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            margin-right: .6rem;
            margin-bottom: 1.5rem;
        }

        p {
            color: ${({ theme }) => theme.COLORS.GRAY_400};
            margin-bottom: 2.5rem;
            text-align: justify;
        }
`;

