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