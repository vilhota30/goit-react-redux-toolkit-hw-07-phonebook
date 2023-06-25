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
flex-direction: column;
gap: 10px;
`;

export const Input = styled.input`
padding: 8px;
border-radius: 3px;
outline: none;
font-size: 14px;
`;

export const Button = styled.button`
padding: 8px;
min-width: 250px;
border-radius: 3px;
outline: none;
font-size: 16px;
font-weight: 700;
cursor: pointer;
`;