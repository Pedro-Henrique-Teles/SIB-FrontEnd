# Nome do Projeto

Bem-vindo ao repositório do **sib-frontend**! Este documento contém todas as informações necessárias para configurar, rodar o projeto localmente e colaborar de forma organizada. Como líder, revisarei todas as contribuições antes de integrá-las à branch `main`.

---

## 📌 Pré-requisitos

Para rodar este projeto, você precisará dos seguintes softwares instalados:

- **Node.js**: Utilize a versão LTS (`jod`). Recomendamos usar o [nvm](https://github.com/nvm-sh/nvm) para gerenciar versões:
  ```bash
  nvm install
  ```
- **npm**: Já vem incluído com o Node.js.

Certifique-se de que ambos estão instalados corretamente antes de prosseguir.

---

## ⚙️ Configuração

Siga os passos abaixo para preparar o ambiente:

1. **Instale as dependências:**
   No diretório raiz do projeto, execute o comando:
   ```bash
   npm i
   ```
   Isso instalará todas as bibliotecas e pacotes necessários.

---

## 🚀 Rodando o Projeto

1. **Inicie o servidor de desenvolvimento:**
   Para rodar o projeto localmente com hot-reload:
   ```bash
   npm run dev
   ```
   O projeto estará disponível em [`http://localhost:5173`](http://localhost:5173) (verifique a porta exibida no terminal pois a porta mencionada pode estar sendo usada em sua máquina).

2. **Parando o servidor:**
   Pressione `Ctrl + C` no terminal para encerrar o servidor.

---

## 🔄 Regras de Branches e Colaboração

Como líder do projeto, revisarei e validarei todas as alterações antes de integrá-las à branch `main`. Para colaborar de forma eficiente, siga estas diretrizes:

### 📂 Estrutura de Nomenclatura das Branches

- Use prefixos descritivos para identificar o tipo de trabalho:
  - `feat:` para novas funcionalidades (ex.: `feat:adicionar-login`)
  - `fix:` para correções de bugs (ex.: `fix:corrigir-botao-quebrado`)
  - `docs:` para atualizações na documentação (ex.: `docs:atualizar-readme`)
  - `refact:` para melhorias no código (ex.: `refact:otimizar-funcao-x`)

- Exemplo: `feature:pagina-perfil`.

### 🔀 Fluxo de Trabalho

1. **Crie uma nova branch a partir da `main`:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b <nome-da-branch>
   ```
2. **Trabalhe na sua branch:**
   Faça commits frequentes com mensagens claras e objetivas:
   ```bash
   git add .
   git commit -m "Descrição concisa do que foi feito seguindo padrões de commit semânticos"
   ```
3. **Envie sua branch para o repositório remoto:**
   ```bash
   git push origin <nome-da-branch>
   ```
4. **Crie um Pull Request (PR):**
   - No GitHub, abra um PR da sua branch para a `main`.
   - Inclua uma descrição detalhada do que foi feito, o motivo e instruções de teste (se aplicável).
   - Adicione-me como revisor.
5. **Aguarde aprovação:**
   Eu revisarei o PR e poderei solicitar ajustes. Após aprovação, farei o merge na `main`.

### 📜 Regras Gerais

- **Não trabalhe diretamente na `main`**: Ela é reservada para código revisado e estável.
- **Commits claros**: Use mensagens descritivas (ex.: "Adiciona validação de email").
- **Mantenha sua branch atualizada**: Se a `main` for atualizada, sincronize sua branch:
   ```bash
   git checkout main
   git pull main
   ```
- **Teste antes de enviar**: Execute `npm run dev` e confirme que tudo funciona corretamente.

### 🔍 Processo de Revisão

Cada PR será avaliado com base em:
- **Funcionalidade:** Resolve o problema ou implementa o que foi proposto?
- **Qualidade:** O código é legível e bem estruturado? (Seu eu ver código de ChatGPT, mal feito e estruturado, a PR não será aprovada e voltará solicitando as melhorias propostas)
- **Testes:** Não introduz erros no projeto?

Feedback será fornecido no PR, e o merge será realizado após aprovação.

### 🎯 Exemplo Prático

Para adicionar uma página de perfil:

1. Crie a branch:
   ```bash
   git checkout -b pagina-perfil
   ```
2. Faça alterações e commit:
   ```bash
   git commit -m "feat:Cria estrutura da página de perfil"
   ```
3. Envie ao remoto:
   ```bash
   git push origin pagina-perfil
   ```
4. Crie o PR no GitHub e me notifique.

---

## 📖 Boas Práticas

✔️ Crie branches separadas para cada tarefa ou funcionalidade.<br>
✔️ Mantenha os commits pequenos, focados e testados.<br>
✔️ Leia a documentação das tecnologias utilizadas.<br>
✔️ Crie seus componentes na pasta components, e caso for utilizar um componente que servirá de interface, crie na pasta **ui**.<br>
✔️ Entre em contato comigo se tiver dúvidas ou precisar de orientação.<br>

---

Happy coding! 🚀
