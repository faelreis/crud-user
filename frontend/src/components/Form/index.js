import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import {FormContainer, InputArea, Label, Input, Button} from './Form.style'

const Form = ({ getUsers, onEdit, setOnEdit }) =>{
    
    const ref = useRef();

    useEffect(() =>{
        if(onEdit){
            const user = ref.current;

            user.nome.value = onEdit.nome;
            user.email.value = onEdit.email;
            user.telefone.value = onEdit.telefone;
            user.data_nascimento.value = onEdit.data_nascimento;
        }
        console.log(onEdit)
    }, [onEdit])
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.nome.value ||
            !user.email.value ||
            !user.telefone.value ||
            !user.data_nascimento.value
        ) {
            return toast.warn("Preencha todos os campos!");
        };

        if(onEdit){
            await axios 
                .put('http://localhost:8800/' + onEdit.id, {
                    nome: user.nome.value,
                    email: user.email.value,
                    telefone: user.telefone.value,
                    data_nascimento: user.data_nascimento.value,
                })
                .then(({ data }) => toast.sucess(data))
                .catch(({ data }) => toast.error(data));
        } else {
            await axios 
                .post('http://localhost:8800/', {
                    nome: user.nome.value,
                    email: user.email.value,
                    telefone: user.telefone.value,
                    data_nascimento: user.data_nascimento.value,
                })
                .then(({ data }) => toast.sucess(data))
                .catch(({ data }) => toast.error(data))
        }

        user.nome.value = '';
        user.email.value = '';
        user.telefone.value = '';
        user.data_nascimento.value = '';

        setOnEdit(null);
        getUsers();
    };

    return(
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name='nome'/>
            </InputArea>
            <InputArea>
                <Label>E-mail</Label>
                <Input name='email' type='email'/>
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name='telefone' type='number'/>
            </InputArea>
            <InputArea>
                <Label>Data de nascimento</Label>
                <Input name='data_nascimento' type='date'/>
            </InputArea>
            <Button type='submit'>Salvar</Button>
        </FormContainer>
    );
};

export default Form;