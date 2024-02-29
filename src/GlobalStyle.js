import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: rgb(240,240,240);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

h1, h2{
  margin-top: 50px;
text-align: center;
color: gray;
}

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  ul{
    list-style: none;
  }
  a{
    text-decoration: none;    
    color: white;
  }

  .userName{
    color: blanchedalmond;
  }
  
.inputWrap{
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  gap: 10px;
}
.form{
  text-align: center;
}

  .FormikErr{
    color: red;
  }
`;
