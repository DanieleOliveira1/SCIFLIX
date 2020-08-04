import React, {useEffect, useState} from 'react';
import PageDefault from '../../../componentes/PageDefault'
import {Link, useHistory} from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../componentes/formField';
import Button from '../../../componentes/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo(){
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({titulo}) => titulo);
    const {handleChange, values} = useForm({

        titulo:'Criando seu hello world com GraphQL',
        url:'https://www.youtube.com/watch?v=RLP9MixVZvw',
        categoria:'Alura',
        
    });

    useEffect(() => {
        categoriasRepository
        .getAll()
        .then((categoriasFromServer) => {
            setCategorias(categoriasFromServer);
        });
        
    }, []);
    return (
        <PageDefault>
            <h1>Cadatro de Vídeo</h1>

            <form onSubmit ={(event) => {
                event.preventDefault();
               // alert('Video Cadastrado com sucesso');
                
               const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
               });

               videosRepository.create({
                   titulo:values.titulo,
                   url: values.url,
                   categoriaId: categoriaEscolhida.id,
               })

               .then(() => {
                console.log('cadastrado com sucesso');
                history.push('/');
               });
               
            }}

            >
                <FormField
                label="Titulo do vídeo"
                name="titulo"
                value={values.titulo}
                onChange={handleChange}
                />

                <FormField
                label="URL"
                name="url"
                value={values.url}
                onChange={handleChange}
                />

                <FormField
                label="Categoria"
                name="categoria"
                value={values.categoria}
                onChange={handleChange}
                suggestions={categoryTitles}
                
                />

                <Button type='submit'>
                    Cadastrar
                </Button>
            </form>

            

            <Link to='/cadastro/categoria'>
                Cadastrar Categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;