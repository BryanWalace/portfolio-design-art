# Portfólio de Artista

Repositório para o site de portfólio interativo. O projeto foi iniciado utilizando React e Vite, com uma estrutura preparada para escalabilidade.

## ✨ Funcionalidades

* **Navegação Multi-Página:** O site suporta múltiplas páginas (`/`, `/arts`, `/cosplay`, `/contact`) graças ao `react-router-dom`.
* **Página Principal Interativa:** Uma experiência de usuário fluida com navegação por scroll que leva a seções de tela cheia.
* **Galerias Otimizadas:** As páginas de Artes e Cosplay usam "infinite scroll" (lazy loading), carregando imagens conforme o usuário rola a página para um melhor desempenho.
* **Layouts de Galeria Customizados:** A página de Artes usa um layout "masonry" e a de Cosplay usa uma grade CSS assimétrica para uma apresentação visual única.
* **Visualização Detalhada (Lightbox):** Ao clicar em uma imagem, um modal em tela cheia é aberto, com navegação entre as obras e um fundo dinâmico na galeria de artes.
* **Página de Contato:** Uma seção "Sobre" com um formulário de contato funcional.
* **UI Dinâmica e Animada:** Efeito de gradiente animado no título principal e transições suaves em toda a aplicação.


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

### **v1.3.0** - Página de Contato e Refinamentos Finais (01 de Agosto de 2025)

* **feat:** Cria a página de Contato com seção "Sobre" e formulário.
* **feat:** Adiciona ícones de redes sociais ao `Header`.
* **fix:** Refatora o `Header` e o `Footer` para terem um modo "estático", resolvendo problemas de sobreposição de conteúdo nas páginas com rolagem.
* **fix:** Corrige a lógica de navegação para garantir que todos os links do menu levem às páginas corretas.
* **refactor:** Simplifica a `HomePage`, removendo a seção de Cosplay para focar na navegação para a página dedicada.
* **fix:** Garante que os ícones PNG (Behance, WhatsApp) troquem de cor corretamente de acordo com o tema da seção.

### **v1.2.0** - Otimização de Galerias e Melhorias de UI (01 de Agosto de 2025)

* **feat:** Implementa "infinite scroll" (lazy loading) nas páginas de galeria (`/arts` e `/cosplay`).
* **style:** Adiciona efeito de gradiente animado ao título principal na `Hero Section`.
* **feat:** Cria a página de galeria de `Cosplay` com layout de grade customizado (CSS Grid).
* **fix:** Corrige múltiplos erros de importação de componentes e hooks do React.
* **chore:** Atualiza o favicon do site para o logo personalizado.

### **v1.1.0** - Galeria de Artes e Roteamento (01 de Agosto de 2025)

* **feat:** Adiciona `react-router-dom` e refatora a estrutura para suportar múltiplas páginas.
* **feat:** Cria a nova página de galeria `/arts` com layout "masonry".
* **feat:** Implementa o modal de visualização de arte (lightbox) com navegação e fundo dinâmico.
* **refactor:** Centraliza os dados das artes e links sociais na pasta `/data`.
* **build:** Adiciona a dependência `react-masonry-css`.

### **v1.0.0** - Lançamento das Funcionalidades Principais (01 de Agosto de 2025)

* **feat:** Implementa os componentes de layout `Header` e `Footer`.
* **feat:** Adiciona as três seções principais na página inicial: `Hero`, `Arts` e `Cosplay`.
* **feat:** Configura a navegação por scroll e as interações das galerias.
* **style:** Adiciona todos os estilos dos componentes via CSS Modules.
* **refactor:** Adiciona o uso de imagens locais nas galerias.

### **v0.1.0** - Estrutura Inicial do Projeto (01 de Agosto de 2025)

* **build:** Configura o projeto com Vite, React e as dependências iniciais.
* **build:** Estabelece a configuração do ESLint para qualidade de código.
* **style:** Adiciona a estrutura base para CSS com um arquivo global e CSS Modules.
* **chore:** Cria a estrutura de arquivos inicial, incluindo `index.html`, `main.jsx`, `App.jsx` e o arquivo `.gitignore`.

## 📄 Licença

* O **código-fonte** deste projeto está licenciado sob a **Licença MIT**. Veja o ficheiro [LICENSE](LICENSE) para mais detalhes.
* Todas as **imagens, artes e cosplays** são propriedade intelectual do artista **RAMD**. A sua utilização, distribuição ou reprodução não é permitida sem autorização expressa.
