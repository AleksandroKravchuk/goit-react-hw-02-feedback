import styled from 'styled-components';
export const Button = styled.button`
  font-size: 20px;
  text-align: center;
  color: palevioletred;
  padding: 15px;
  border-radius: 10px
  margin-right:30px;
 cursor: pointer;
  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
 &:hover {
    transform: scale(1.02);
    box-shadow: 0 9px 47px 11px rgba(51, 51, 51, 0.18);}
`;
export const Meaning = styled.span`
    font-size: 50px;
    color: tomato;
    font-weight:800; 
     margin-right:30px;
`
export const Container = styled.div`
    text-align:center;
`