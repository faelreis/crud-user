import styled from 'styled-components'

export const Table = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
    width: 100%;
`;

export const Th  = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
    font-size: 14px;

    @media(max-width: 500px){
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};
    font-size: 16px;
    max-width: 80px;
    white-space: nowrap;
    overflow: hidden;
    @media(max-width: 500px){
        ${(props) => props.onlyWeb && "display: none"}
    }
`;