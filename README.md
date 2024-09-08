## Videoteca

**Videoteca: Sua biblioteca de vídeos personalizada**

Click aqui para conferir o resultado: "[Projeto Videoteca](https://rodrigoms.github.io/videoteca/)"


### Descrição Geral

A Videoteca é uma aplicação web que permite aos usuários criar e organizar suas próprias bibliotecas de vídeos. Ela oferece funcionalidades como:

* **Seleção de temas:** O usuário pode escolher entre diferentes temas para visualizar vídeos relacionados.
* **Busca por vídeos:** Permite encontrar vídeos específicos através de palavras-chave.
* **Reprodução de vídeos:** Exibe os vídeos selecionados em um player integrado.
* **Organização personalizada:** Permite aos usuários criar suas próprias listas de vídeos favoritos.

### Tecnologias Utilizadas

* **HTML:** Estrutura básica da página.
* **CSS:** Estilização da interface do usuário.
* **JavaScript:** Lógica da aplicação, manipulação do DOM e interação com o usuário.

### Estrutura do Projeto

* **index.html:** Arquivo principal da aplicação, contendo a estrutura HTML da página.
* **styles.css:** Arquivo CSS com as regras de estilo da aplicação.
* **script.js:** Arquivo JavaScript com a lógica principal da aplicação.
* **data:** Pasta contendo arquivos JSON com os dados dos vídeos para cada tema (e.g., aulasCiencias.js, aulasGeografia.js).

## Adicionar uma Nova Base de Dados ao Projeto Videoteca

### 1. Adicionar o Arquivo de Dados

1. Na pasta `data` adicione um arquivo javascript. Por exemplo, `videosHistoria.js`.
2. No arquivo `videosHistoria.js`, defina os dados no formato de objeto JavaScript. Por exemplo:
    ```javascript
    const videosHistoria = [
      titulo: 'Titulo do video',
      descricao: 'Resumo sobre o conteudo do vídeo'
      link: 'Caminho ou URL',
      imagem: 'Capa ou ilistração do video'
    ];
    ```

### 2. Referenciar o Arquivo no HTML

1. Abra o arquivo `index.html`.
2. Adicione uma referência ao novo arquivo de dados dentro de uma tag `<script>`. Por exemplo:
    ```html
    <script src="./data/videosHistoria.js"></script>
    ```

### 3. Atualizar o Objeto `conteudo` no `script.js`

1. Abra o arquivo `script.js`.
2. No objeto `conteudo`, adicione uma nova entrada para a nova base de dados. Por exemplo:
    ```javascript
    const conteudo = {
      ciencias: {
        titulo: 'Ciências',
        arquivo: videosCiencias,
      },
      geografia: {
        titulo: 'Geografia',
        arquivo: videosGeografia,
      },
      historia: {
        titulo: 'História',
        arquivo: videosHistoria,
      },
    };
    ```

## Melhorias Futuras

* **Integração com APIs de vídeo:** Permitir que os usuários adicionem seus próprios vídeos a partir de plataformas como YouTube e Vimeo.
* **Criação de playlists:** Permitir que os usuários criem e gerenciem suas próprias playlists de vídeos.
* **Sistema de comentários:** Implementar um sistema de comentários para que os usuários criem resumos.
* **Funcionalidades sociais:** Permitir que os usuários compartilhem seus vídeos favoritos em redes sociais.
* **Responsividade:** Adaptar a interface para diferentes tamanhos de tela.
* **Banco de dados:** Utilizar um banco de dados para armazenar os dados dos usuários e dos vídeos de forma mais eficiente.
* **Autenticação de usuários:** Implementar um sistema de login para permitir que os usuários criem suas próprias contas e personalizem suas bibliotecas.

### Contribuições

Contribuições são bem-vindas! Se você encontrar algum bug ou tiver alguma sugestão de melhoria, por favor, abra uma issue ou faça um pull request.

