import styled from 'styled-components';

export const StyledButton = styled.button
.attrs(props => ({
    id : props.id || 'modal-btn' 
}))`
    background-color : rgba(0, 0, 0, 0.4);
    color : #fff;
    font-family : 'Josefin Sans', cursive;
    height : 30px;
    font-size : 16px;
    width : 30%;
    display : flex;
    margin : 15px auto 10px auto;
    justify-content : center;
    align-items : center;
    border : solid 1px #fff;
    outline : none;
    cursor : pointer;
    border-radius : 4px;
    transition : 0.1s;

    &:hover{
        background-color : rgba(255, 255, 255, 0.2);
        font-weight : bold;
        box-shadow : 0 0 5px white;
        transition : 0.1s;
    }
`;