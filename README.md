# RAMD - Portfólio de Artista

Repositório para o site de portfólio interativo de RAMD. O projeto foi iniciado utilizando React e Vite, com uma estrutura preparada para escalabilidade.

## ✨ Funcionalidades

* **Navegação por Scroll de Tela Cheia:** Uma experiência de usuário fluida onde cada "rolagem" do mouse leva o usuário a uma nova seção de tela cheia.
* **Seção de Artes Dinâmica:** Um carrossel de imagens onde cada arte altera o esquema de cores da seção, do cabeçalho e do rodapé para combinar com a obra.
* **Galeria de Cosplay Interativa:** Uma galeria no estilo "acordeão" controlada pelo scroll, que expande a imagem em foco para visualização detalhada.
* **Tipografia Customizada:** Usa a fonte "Thunder" para criar uma identidade visual forte e impactante.

## 🛠️ Tecnologias Utilizadas

* **[React](https://reactjs.org/)** - Biblioteca para a construção da interface.
* **[Vite](https://vitejs.dev/)** - Ferramenta de build para um desenvolvimento rápido.
* **CSS Modules** - Para estilização local e organizada.
* **ESLint** - Para garantir a qualidade e consistência do código.
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

### **v1.0.0** - Lançamento das Funcionalidades Principais (01 de Agosto de 2025)

* **feat:** Implementa os componentes de layout `Header` e `Footer`.
* **feat:** Adiciona as três seções principais: `Hero`, `Arts` e `Cosplay`.
* **feat:** Configura a navegação por scroll e as interações das galerias (mudança de cor e acordeão).
* **style:** Adiciona todos os estilos dos componentes via CSS Modules e integra a fonte customizada.
* **refactor:** Adiciona o uso de imagens locais nas galerias.

### **v0.1.0** - Estrutura Inicial do Projeto (01 de Agosto de 2025)

* **build:** Configura o projeto com Vite, React e as dependências iniciais (`package.json`).
* **build:** Estabelece a configuração do ESLint para qualidade de código.
* **style:** Adiciona a estrutura base para CSS com um arquivo global e CSS Modules.
* **chore:** Cria a estrutura de arquivos inicial, incluindo `index.html`, `main.jsx`, `App.jsx` e o arquivo `.gitignore`.