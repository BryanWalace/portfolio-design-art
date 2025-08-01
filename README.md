# RAMD - Portfólio de Artista

Repositório para o site de portfólio interativo de RAMD. O projeto foi iniciado utilizando React e Vite, com uma estrutura preparada para escalabilidade.

## ✨ Funcionalidades

* **Navegação Multi-Página:** O site agora suporta múltiplas páginas graças ao `react-router-dom`.
* **Página Principal Interativa:** Uma experiência de usuário fluida com navegação por scroll que leva a seções de tela cheia (`Hero`, `Arts` e `Cosplay`).
* **Galeria de Artes Completa:** Uma página dedicada `/arts` com uma galeria de imagens responsiva em estilo "masonry" (Pinterest).
* **Visualização de Arte Detalhada (Lightbox):** Ao clicar em uma arte, um modal em tela cheia é aberto, com navegação entre as obras e um fundo dinâmico que se adapta às cores da imagem.
* **Tipografia Customizada:** Usa a fonte "Thunder" para criar uma identidade visual forte e impactante.

## 🛠️ Tecnologias Utilizadas

* **[React](https://reactjs.org/)** - Biblioteca para a construção da interface.
* **[Vite](https://vitejs.dev/)** - Ferramenta de build para um desenvolvimento rápido.
* **[React Router](https://reactrouter.com/)** - Para roteamento e navegação entre páginas.
* **[React Masonry CSS](https://github.com/paulcollett/react-masonry-css)** - Para a criação da grade de imagens.
* **CSS Modules** - Para estilização local e organizada.
* **Lucide React** - Para ícones leves e consistentes.

## 🚀 Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/BryanWalace/portfolio-design-art.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd portfolio-design-art
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra [http://localhost:5173](http://localhost:5173) (ou o endereço que aparecer no terminal) no seu navegador.

## 📜 Histórico de Versões (Changelog)

### **v1.1.0** - Galeria de Artes e Roteamento (01 de Agosto de 2025)

* **feat:** Adiciona `react-router-dom` e refatora a estrutura para suportar múltiplas páginas.
* **feat:** Cria a nova página de galeria `/arts` com layout "masonry".
* **feat:** Implementa o modal de visualização de arte (lightbox) com navegação e fundo dinâmico.
* **refactor:** Centraliza os dados das artes e links sociais na pasta `/data`.
* **build:** Adiciona a dependência `react-masonry-css`.

### **v1.0.0** - Lançamento das Funcionalidades Principais (01 de Agosto de 2025)

* **feat:** Implementa os componentes de layout `Header` e `Footer`.
* **feat:** Adiciona as três seções principais na página inicial: `Hero`, `Arts` e `Cosplay`.
* **feat:** Configura a navegação por scroll e as interações das galerias (mudança de cor e acordeão).
* **style:** Adiciona todos os estilos dos componentes via CSS Modules e integra a fonte customizada.
* **refactor:** Adiciona o uso de imagens locais nas galerias.

### **v0.1.0** - Estrutura Inicial do Projeto (01 de Agosto de 2025)

* **build:** Configura o projeto com Vite, React e as dependências iniciais (`package.json`).
* **build:** Estabelece a configuração do ESLint para qualidade de código.
* **style:** Adiciona a estrutura base para CSS com um arquivo global e CSS Modules.
* **chore:** Cria a estrutura de arquivos inicial, incluindo `index.html`, `main.jsx`, `App.jsx` e o arquivo `.gitignore`.
