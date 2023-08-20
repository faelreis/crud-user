import styled from 'styled-components'

export const FormContainer = styled.form`
    display: flex;
    align-items: end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #FFFFFF;
    padding: 20px;
    box-shadow: 0px 0px 10px #CCC;
    border-radius: 5px;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 120px;
    padding: 0px 10px;
    border: 1px solid #BBB;
    border-radius: 5px;
    height: 40px;
`;

export const Label = styled.label``;

export const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #101010;
    color: #e6e6e6;
    height: 42px;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.1);
    }
`;