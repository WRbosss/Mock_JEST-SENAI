const axios = require('axios');
const { chucknorrisCategory } = require('./funcoes');

jest.mock('axios');

describe('Teste da função chucknorrisXCategory', () => {
  it('Deve retornar uma curiosidade do chucknorris referente a animais', async () => {
    const data = { value: 'curiosidade aleatória' }

    axios.get.mockResolvedValue({ data });

    const categoria = 'animal'
    const result = await chucknorrisCategory(categoria);

    expect(result).toEqual(data.value);
    expect(axios.get).toHaveBeenCalledWith(`https://api.chucknorris.io/jokes/random?category=${categoria}`);
  });

  it('Deve lançar um erro para propriedade inválida', async () => {
    const errorMessage = 'Não foi possível obter uma curiosidade';
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(chucknorrisCategory('bicho')).rejects.toThrow(errorMessage);
    expect(axios.get).toHaveBeenCalledWith(`https://api.chucknorris.io/jokes/random?category=bicho`);;
  });
});