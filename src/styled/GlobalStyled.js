import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

	* {
		box-sizing: border-box;
	}

	input {
		width: 303px;
		height: 45px;
		background: #FFFFFF;
		border: 1px solid #D5D5D5;
		border-radius: 5px;
		margin-top: 6px;
	}
`;

export default GlobalStyled;