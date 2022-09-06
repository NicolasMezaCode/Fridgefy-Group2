import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  
}
html{
  background-color: #FFFFFF;
} 
body{
    font-family: 'Poppins', sans-serif;
  
}

.navbar {
    padding: 20px 10px 10px 30px;
    display: flex;
    margin-bottom: 30px;
    background-color: #F7F7F7;
    color: black;
    font-size: 27px;
}

.fri {
    font-family: 'Abril Fatface', cursive;
    padding-right: 50px;
}

.signup {
    padding-left: 30px;
}

`;