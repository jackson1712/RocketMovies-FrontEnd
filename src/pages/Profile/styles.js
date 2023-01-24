import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    > header {
        display: flex;
        align-items: center;
        padding-left: 14rem;
        margin-top: 0;
        height: 14.4rem;
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.PINK_LIGHT};
        gap: .8rem;

        .return {
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 34rem;
    margin: 0 auto;
    gap: .8rem;

    > .user-space {
        margin-bottom: 1.6rem;
    }

    > .btn-save {
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};

        width: 34rem;
        padding-top: 1.4rem;
        padding-bottom: 1.4rem;
        margin-top: 1.6rem;
        border-radius: 1rem;
    }

    > input {
        width: 100%;
    }
`;

export const Avatar = styled.div`
    position: relative;
    top: -9rem;
    right: -1.5rem;

    > img {
        border-radius: 50%;
        width: 18rem;
        height: 18rem;
    }

    > label {
        position: relative;
        top: -3rem;
        left: -5rem;
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;
        padding: 1.4rem;
        margin-bottom: 6.4rem;

        cursor: pointer;

        input {
            display: none;
        }

        > svg {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
            font-size: 2rem;
            position: relative;
            top: .2rem;
        }
    }
`;