import {FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import { Button } from '../../components/Button';
import { Background, Container, Content, FormContainer, Error, InputContainer } from './styles';

interface FormData{
    nome: string;
    email: string;
    passeword: string;
}

export function Register(){

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();

    const onSubimit = handleSubmit(data => alert(JSON.stringify(data)))

    return(
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faça seu cadastro</h2>
                    <form onSubmit={onSubimit}>
                        <InputContainer>
                            <FiUser size={40}/>
                            <input
                                type="text"
                                placeholder="Nome"
                                {...register("nome", {required:true})}
                            />
                        </InputContainer>
                        {errors.nome && <Error>O preenchimento do campo é obrigatório</Error>}
                        <InputContainer>
                            <FiMail size={40}/>
                            <input
                                type="email"
                                placeholder="E-mail"
                                {...register("email", {required:true})}
                            />
                        </InputContainer>
                        {errors.email && <Error>O preenchimento do campo é obrigatório</Error>}
                        <InputContainer>
                            <FiLock size={40}/>
                            <input
                                type="password"
                                placeholder="Senha"
                                {...register("passeword", {required:true})}
                            />
                        </InputContainer>
                        {errors.passeword && <Error>O preenchimento do campo é obrigatório</Error>}
                        <Button type="submit">Cadastrar</Button>
                    </form>
                    <Link to="/">
                        <FiArrowLeft size={40}/>
                        Voltar para login
                    </Link>
                </FormContainer>
            </Content>
            <Background />
        </Container>
    )
}