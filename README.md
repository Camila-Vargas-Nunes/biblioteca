# 🎬 Explorador de Filmes

A aplicação foi desenvolvida com Next.js e TypeScript que apresenta filmes utilizando uma API externa. O projeto conta com uma interface construída com Ant Design e recursos avançados de carregamento e paginação.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido para o desafio técnico na empresa Slideworks, que consiste em replicar a página do Figma, demonstrando a implementação de uma aplicação web moderna para exploração de filmes. Utilizando o desenvolvimento com Next.js, TypeScript e Ant Design.

## ✨ Funcionalidades

* Carrossel dinâmico com os melhores filmes
* Sistema de paginação para navegação eficiente
* Skeleton loading para melhor experiência do usuário
* Layout responsivo com Ant Design
* Integração com redes sociais (Facebook, Twitter, Instagram)
* Sistema de avaliação com estrelas
* Fonte personalizada (Montserrat) para melhor tipografia
* Ordenação de filmes por avaliação

## 🛠️ Tecnologias Utilizadas

* [Next.js 15](https://nextjs.org/) - Framework React com SSR
* [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript
* [Ant Design](https://ant.design/) - Biblioteca de componentes UI
* [React 19](https://reactjs.org/) - Biblioteca JavaScript
* [Axios](https://axios-http.com/) - Cliente HTTP

### Principais Dependências

```json
{
  "dependencies": {
    "@ant-design/icons": "^5.6.0",
    "@ant-design/nextjs-registry": "^1.0.2",
    "antd": "^5.23.3",
    "axios": "^1.7.9",
    "next": "15.1.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

## 🧩 Componentes Principais

* `Header` - Cabeçalho da aplicação
* `Footer` - Rodapé com links sociais
* `MoviesCarousel` - Carrossel de filmes em destaque
* `Movies` - Grade de exibição de filmes
* `Layout` - Estrutura principal com fonte Montserrat

## 🚀 Como Começar

Para executar o projeto localmente, siga estes passos:

```bash
git clone

cd movies-app

npm install

npm run dev
```

A aplicação estará disponível em `http://localhost:3000`.

## 🔧 Configuração

1. Certifique-se de ter Node.js instalado 
2. Configure as variáveis de ambiente necessárias
3. Verifique se a API externa está acessível

## 🔄 API e Tipos

```typescript
// Interface principal do Movie
export type Movie = {
  /** Equipe do filme (diretor, atores) */
  crew: string;
  
  /** URL do poster do filme */
  image_url: string;
  
  /** Avaliação do filme */
  rating: string;
  
  /** Título do filme */
  title: string;
  
  /** Ano de lançamento */
  year: string;
};

// Interface da resposta da API
type MoviesApiResponse = {
  /** Array contendo lista de filmes */
  movies: Movie[];
  
  /** Número total de páginas disponíveis */
  totalPages: number;
};
```

## 👤 Autor(a)

Criado com ❤️ por Camila Vargas Nunes

