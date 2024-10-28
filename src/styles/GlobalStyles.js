import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6, p, span, label, input, textarea {
    color: ${({ theme }) => theme.text};
  }

  button {
    font-family: 'Poppins', sans-serif;
  }

  section {
    padding: 5rem 2rem;
  }

  @media (max-width: 768px) {
    section {
      padding: 3rem 1rem;
    }
  }
`;

export default GlobalStyles;
