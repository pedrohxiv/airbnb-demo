# Projeto Demo Airbnb

Este é um projeto demo do Airbnb desenvolvido em TypeScript, utilizando Next.js 13, Tailwind CSS, Google Maps API e React Date Range.

## Descrição

Este projeto é uma demonstração de como criar uma interface semelhante à do Airbnb, onde os usuários podem buscar e visualizar listagens de imóveis para aluguel. Ele utiliza tecnologias modernas, como React e Next.js, para fornecer uma experiência de usuário rica e responsiva.

Além disso, o projeto utiliza o Tailwind CSS para facilitar o desenvolvimento e a estilização do aplicativo. O Tailwind CSS é uma biblioteca utilitária que permite criar estilos personalizados de forma rápida e eficiente.

O Eslint foi configurado para garantir a consistência do código e seguir as boas práticas do desenvolvimento em TypeScript.

A Google Maps API é utilizada para exibir a localização dos imóveis no mapa e fornecer recursos de pesquisa e filtragem baseados em localização.

O React Date Range é um componente utilizado para permitir que os usuários selecionem um intervalo de datas para sua estadia. Isso é útil para filtrar as listagens de imóveis com base nas datas de disponibilidade.

## Funcionalidades

- Busca de imóveis por localização, datas de check-in e check-out.
- Exibição de listagens de imóveis com detalhes, como fotos, preço, avaliação e localização no mapa.
- Filtragem de imóveis com base em critérios, como preço, número de quartos, avaliação mínima, etc.
- Integração com a Google Maps API para exibir os imóveis em um mapa interativo.
- Utilização do componente React Date Range para seleção de datas de estadia.

## Pré-requisitos

Antes de executar o projeto, você precisa ter as seguintes dependências instaladas:

- Node.js
- npm ou Yarn

## Instalação

1. Faça o clone deste repositório para o seu ambiente local.
2. Navegue até o diretório do projeto no terminal.
3. Execute o comando `npm install` ou `yarn install` para instalar as dependências do projeto.

## Configuração

Antes de iniciar o projeto, você precisará configurar as seguintes variáveis de ambiente:

- `API_KEY`: Chave de API do Google Maps. Você pode obter uma chave gratuitamente no Google Cloud Console.

Certifique-se de criar um arquivo `.env` na raiz do projeto e adicionar as variáveis de ambiente necessárias.

## Uso

Após a instalação e configuração, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```
npm run dev
```

Isso iniciará o servidor de desenvolvimento do Next.js e você poderá acessar o aplicativo no seu navegador através do endereço `http://localhost:3000`.
