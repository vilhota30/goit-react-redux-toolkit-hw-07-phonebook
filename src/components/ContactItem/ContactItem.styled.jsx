import styled from "@emotion/styled";
export const Item = styled.li`
display: flex;
gap: 12px;
width: 340px;
margin-right: 8px;
color: darksalmon;
font-weight: 600;

&:not(:last-child) {
    margin-bottom: 5px;
}
`;

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 8px;
color: moccasin;
border-radius: 3px;
border-color: deeppink;
cursor: pointer;
outline: none;
width: 50px;
height: 20px;
background-color: mediumvioletred;
`;
