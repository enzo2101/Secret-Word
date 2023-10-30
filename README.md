# Projeto Secret Word

Esse projeto secret word foi feito com o intuito de testar meus conhecimento em react. Além de testar meu conhecimento em commits, e servindo como preparo para o mundo de trabalho como desenvolvedor.

## Index

- Inicialização do projeto usando React + Vite

- Criação do primeiro componente e customização de alguns Css.

- Criando demais componentes e estágios do jogo.

### Inicialização do projeto
Para iniciarmos o projeto e instalar todas as dependencias do projeto, fiz a inicialização do react com o vite, (uma forma mais rápida de criar um projeto react), além disso antes de tudo criei o repositorio no github.

```
npm create vite@latest
```

logo em seguinda atribui o nome Secret-Word e segui as seguintes instruções: 
### React >> javascript

```
cd Secret-Word
```
```
npm i
```
```
npm run dev
```

### Criando o primeiro componente
O Primeiro componente criado foi o StartScreen.jsx + StartScreen.css,
a função dele é básica apenas ser a página inicial do projeto e ter a opção de iniciar o jogo, iniciei o StartScreen.jsx com o snippet.
```
rafce
```
que gerará esse código automaticamente caso esteja usando a extensão ES7+ React/Redux/React-Native snippets
```
import React from 'react'

const StartScreen = () => {
  return (
    <div>StartScreen</div>
  )
}

export default StartScreen
```

### Criando demais componentes e estágios do jogo

Nesta etapa eu criei todos os demais componentes GameOver e Game, e iniciei os estágios do jogo, como: inicio, jogo, e jogo acabou. Utilizei o useState para criar o hook gameStage e setGameStage que utilizará o valor "name" da array stages.

### Avançando nos estágios do game

Nesta fase do projeto, foi essencial avançar nos estágios do jogo para proporcionar uma experiência interativa para o jogador. Para isso, utilizei a função setGameStage para atualizar o estado de gameStage. Aqui está um exemplo de como as transições de estágio podem ocorrer:

```
const startGame = () => {
  // Escolher uma palavra e categoria aleatórias
  const { word, category } = pickWordAndCategory();

  // Dividir a palavra em letras minúsculas
  const splitWord = word.split("").map((l) => l.toLowerCase());

  // Preencher os estados com os valores escolhidos
  setPickedWord(word);
  setPickedCategory(category);
  setLetters(splitWord);

  // Avançar para a fase de jogo
  setGameStage(stages[1].name); // Por exemplo, avançando para a segunda fase do jogo
};

```

### Implementando os componentes GameOver e Game

Durante o desenvolvimento, criei os componentes GameOver e Game para gerenciar as diferentes partes do jogo. O GameOver será exibido quando o jogador perder ou concluir o jogo, enquanto o Game será a parte principal do jogo, onde o jogador faz suas tentativas.

### Gerenciando os componentes e estágios

Para gerenciar os diferentes componentes e estágios do jogo, você pode usar condicionais ou um sistema de roteamento, dependendo da complexidade do seu jogo. Por exemplo, se o jogo estiver na fase de início, você pode exibir o componente StartScreen. Quando estiver no meio do jogo, pode ser exibido o componente Game. E quando o jogo acabar, você pode alternar para o componente GameOver.

### Aprimoramentos futuros
No futuro, é possível implementar recursos adicionais, como:
Sistema de pontuação para rastrear o desempenho do jogador.
Dicas ou pistas para ajudar o jogador a adivinhar a palavra.
Personalização de aparência e estilos para tornar o jogo mais atraente.
Integração de som ou música de fundo para melhorar a experiência do jogador.
Espero que este projeto tenha sido uma oportunidade valiosa para aprimorar suas habilidades em React e desenvolvimento de jogos. Continuar explorando e aprimorando o projeto pode ser uma ótima maneira de aprender mais e se preparar para oportunidades futuras como desenvolvedor.