import React, {useEffect, useState} from 'react';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../componentes/PageDefault';
function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);


  useEffect (() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      })

  }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription = "A história de Shirley Ann Jackson, a primeira mulher negra a conquistar o Ph.D em física nuclear pelo MIT e que foi responsável por diversas descobertas na área da ciência."
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/*<BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"A história de Shirley Ann Jackson, a primeira mulher negra a conquistar o Ph.D em física nuclear pelo MIT e que foi responsável por diversas descobertas na área da ciência."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />    
      <Carousel
        category={dadosIniciais.categorias[6]}
      />   
      <Carousel
        category={dadosIniciais.categorias[7]}
      />   
      <Carousel
        category={dadosIniciais.categorias[8]}
      />  
      */}
     
    </PageDefault>

  );
}

export default Home;
