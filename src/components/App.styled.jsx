import styled from "@emotion/styled";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 12px;
padding: 16px;
margin-top: 50px;
margin-left: auto;
margin-right: auto;
max-width: 800px;
min-height: 400px;
border-radius: 8px;
background-color: darkslateblue;
box-shadow: rgba(46, 0, 0, 0.5) 5px 13px 18px;
&&:hover,
&&:focus{
    border: 5px solid darkmagenta;
}
`;