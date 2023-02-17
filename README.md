
## Sobre o Projeto
Sistema que permite consultar a API exchangerate para converter diversos valores de moedas.

Link a API: https://exchangerate.host/#/

### Tecnologias
- HTML5

- CSS3
  - Bootstrap 5
  
- TypeScript
  - Angular 15
  - Angular CLI
  - Angular Material UI

  ### Clonando o Repositório
Primeiro é preciso que efetue a clonagem do repositório para o seu computador para assim efetuar alterações de código. Mas antes de clonar o repositório é importante que realize um **fork**, ou seja, criar uma cópia do mesmo para o seu github. Para isso basta subir a página e clicar no botão de mesmo nome e aguardar alguns minutos. Depois basta clicar em **clone or download** e copiar a URL do respositório.

Já abrindo o bash do Git para efetuar a clonagem será necessário que digite a seguinte linha de código e informe a URL copiada anteriormente:
``` git
git clone <url-do-repositorio>
```

### Instalando as Dependências
Para instalar as dependências do projeto basta abrir o **Prompt de Comando do Node.js** (caso você esteja no linux, basta utilizar o terminal), acessar a pasta do repositório e inserir o seguinte comando:
``` node
npm install
```

Lembre que o Angular CLI deve estar instalado na sua maquina. Para isso você pode executar o seguinte comando:
``` node
npm install -g @angular/cli
```

## Servidor de Desenvolvimento
Basicamente você deverá escrever seu código e enquanto você efetua alterações no arquivo é necessário deixar o comando abaixo rodando para conseguir ver as alterações:
``` node
ng serve
```
O código irá rodar o plugin **serve**, dessa forma gerando um servidor para o desenvolvimento (`http://localhost:4200`) sendo assim toda alteração de código nos arquivos de origem irá recarregar automaticamente a página, caso não fique de maneira automatica basta salvar todos os arquivos no seu editor de código e atualizar a página .

## Outras Informações
- Usei, a `localStorage` do navegador para simular um BD.
- Atualmente a um erro no menu onde o "sobre" fica selecionado mas logo irei resolver.
