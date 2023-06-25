import styled from "@emotion/styled";
export const Item = styled.li`
display: flex;
gap: 12px;
min-width: 280px;

&:not(:last-child) {
    margin-bottom: 5px;
}
`;

export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 8px;
border-radius: 3px;
cursor: pointer;
outline: none;
`;
