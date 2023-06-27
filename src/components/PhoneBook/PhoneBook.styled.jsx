import styled from "@emotion/styled";

export const Form = styled.form`
display: flex;
flex-direction: column;
padding; 12px 15px;
justify-content: center;
align-items: center;
border-radius: 12px;
gap: 10px;
`;

export const LabelForm = styled.label`
display: flex;
flex-direction: column
gap: 10px;
color: moccasin;
`;

export const Input = styled.input`
padding: 8px;
border-radius: 3px;
border-color: blueviolet;
outline: none;
color: moccasin;
font-size: 14px;
width: 280px;
margin-left: 8px;
background-color: mediumslateblue;
`;

export const Button = styled.button`
padding: 8px;
min-width: 250px;
color: moccasin;
border-radius: 3px;
border-color: deeppink;
outline: none;
font-size: 16px;
font-weight: 700;
cursor: pointer;
background-color: mediumvioletred;
`;