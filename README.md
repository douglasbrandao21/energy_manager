
<h1 align="center">
    <br>Energy Manager<br>
</h1>

<h4 align="center">Gerenciador que possibilita que o usuário possa acompanhar seus dados de consumo, feito em <a href="https://reactjs.org/" target="_blank">React JS</a>.</h4>

<br>

<p align="center">
  <a href="#configurando-o-backend">Configurando o Backend</a> •
  <a href="#iniciando-o-frontend">Iniciando o Frontend</a> •
  <a href="#license">License</a>
</p>


## Configurando o Backend
Para clonar e executar esta aplicação, você deverá do [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) e de um banco de dados [PostgresSQL](https://www.postgresql.org/).

Inicialmente, abra seu terminal e faça o clone do projeto:
```bash
# Faça o clone do repositório
$ git clone https://github.com/douglasbrandao21/energy_manager.git

# Entre na pasta onde se encontra o projeto Backend
$ cd energy_manager/backend

# Faça o download das dependências
$ npm install

# Instale a CLI do AdonisJS
$ npm i -g @adonisjs/cli
```

Em seguida, você deverá ajustar as variáveis de ambiente. Para isso, crie um arquivo chamado .env informando ao projeto as informações necessárias para sua execução:
```
HOST=127.0.0.1
PORT=3333
NODE_ENV=development

APP_NAME=EnergyManager
APP_URL=http://${HOST}:${PORT}

CACHE_VIEWS=false

# Você pode utilizar um valor gerado pelo site: https://emn178.github.io/online-tools/sha256.html
APP_KEY=

DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=
DB_PASSWORD=

# Lembre-se de criar o banco de dados Postgres
DB_DATABASE=energy_manager

HASH_DRIVER=bcrypt
```

Agora, é necessário a execução das migrations para criação das tabelas no banco de dados, para isso, digite a seguinte linha de comando:
```bash
$ adonis migration:run
```

Uma vez que as migrations foram criadas corretamente, basta iniciar o backend da aplicação:
```
$ adonis serve --dev
```

<br><br>

## Iniciando o Frontend
Para iniciar o Frontend da aplicação é simples, basta executar os seguintes comandos:

**Note**: Note que o gerenciador de pacotes utilizado durante o pacote é o Yarn, você pode instalá-lo seguindo os passos disponíveis em sua [documentação](https://yarnpkg.com/getting-started/install) ou utilizar o gerenciador de pacotes padrão do NodeJS (NPM).

**Note**: Certifique-se de que o projeto backend esteja sendo executado adequadamente no endereço http://localhost:3333.
```bash
# Entre na pasta onde se encontra o projeto Frontend
$ cd ~/energy_manager/frontend

# Caso esteja utilizando o Yarn
$ yarn add

# Caso esteja utilizando o npm
$ npm install

# Caso esteja utilizando o yarn
$ yarn start

```

## License

MIT

---
