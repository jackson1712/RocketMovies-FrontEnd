import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
    }

    body, button, textarea, input, p {
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
        ::-webkit-scrollbar{
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            width: .8rem;
        }
        
        ::-webkit-scrollbar-thumb{
            background-color: ${({ theme }) => theme.COLORS.PINK};
            border-radius: 1rem;
        }
    }

    a {
        text-decoration: none;
    }
    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(.9);
    }
`;

