const axios = require('axios');

async function chucknorrisCategory(animal) {
  try {
    const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${animal}`);
    return response.data.value;
  } catch (error) {
    throw new Error('Não foi possível obter uma curiosidade');
  }
}

// Exemplo de uso da função buscarEndereco
chucknorrisCategory('animal')
  .then(curiosidade => console.log(curiosidade))
  .catch(error => console.error(error.message));

module.exports = {
    chucknorrisCategory
}