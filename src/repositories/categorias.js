import config from '../config';

const URL = `${config.URL}/categorias`;
function getAllWithVideos(){
    return fetch(`${URL}?_embed=videos`)
      .then(async(respostaDoServidor) => {

        if(respostaDoServidor.ok){
            const resposta = await respostaDoServidor.json();
            return resposta;
        }

        throw new Error('Não foi possível pegar os dados');
        
        
      });

}

export default{
    getAllWithVideos,
};