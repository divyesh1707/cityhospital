import styled from "@emotion/styled";


export const Basebutton = styled.button`
border-radius: 10px;
border: 2px solid #BF4F74;
margin: 0 1em;
padding: 0.25em 1em;
`;

export const primaryButton = styled(Basebutton)`
background: red;
color: black;

&:hover{
    background: yellow;
}
`;

export const secondaryButton = styled(Basebutton)`
background: black;
color: white;

&:hover{
    background: green;
}
`;

export const outlinedButton = styled(Basebutton)`
background: yellow;
color: black;

&:hover{
    background: orange;
}
`;



