import styled from "@emotion/styled";

export const LabelFilter = styled.label`
display: flex;
flex-direction: column;
color: moccasin;
gap: 12px;
 text-alighn: center;
 margin-left: auto;
 margin-right: auto;
font-size: 16px;
`;

export const Input = styled.input`
width: 280px;
padding: 8px;
border-radius: 3px;
border-color: blueviolet;
font-size: 16px;
color: lavender;
font-weight: 600; 
outline: none;
background-color: mediumslateblue;
&&:hover,
&&:focus{
    border-color: darksalmon;
    background-color: blueviolet;;
}
`;

