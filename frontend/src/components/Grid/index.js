import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Table, Thead, Tbody, Tr, Th, Td } from './Grid.style'


const Grid = ({ users, setUsers, setOnEdit }) => {

    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) =>{
        await axios 
            .delete('http://localhost:8800/' + id)
            .then(({ data }) => {
                const newArray = users.filter((user) => user.id !== id);
    
                setUsers(newArray);
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));
    
        setOnEdit(null);
    }
    

    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>E-mail</Th>
                    <Th>Telefone</Th>
                    <Th onlyWeb>Data de nascimento</Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i) => (
                        <Tr key={i}>
                            <Td width='20%'>{item.nome}</Td>
                            <Td width='20%'>{item.email}</Td>
                            <Td width='20%' onlyWeb>{item.telefone}</Td>
                            <Td width='20%' onlyWeb>{item.data_nascimento}</Td>
                            <Td alignCenter width='5%'>
                                <FaEdit style={{cursor: 'pointer'}} onClick={() => handleEdit(item)}/>
                            </Td>
                            <Td alignCenter width='5%'>
                                <FaTrash style={{cursor: 'pointer'}} onClick={() => handleDelete(item.id)}/>
                            </Td>
                        </Tr>
                    )
                )}
            </Tbody>
        </Table>
    );
};

export default Grid;