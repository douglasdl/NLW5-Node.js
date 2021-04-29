# NLW5-Node.js
Trilha Node.js (Backend)

##Create the Project  
```bash
yarn init -y
```

##Dependencies Installation
Express (Micro Framework)
```bash
yarn add express
```
Express Types (Development Dependecies) 
```bash
yarn add @types/express -D
```
TypeScript
```bash
yarn add typescript -D
```

Create TypeScript Configuration
```bash
yarn tsc --init
```

Change in "tsconfig.json" -> "strict": false,

TypeScript
```bash
yarn add ts-node-dev -D
```

Add a script in the "package.json" to run the server.
```json
"scripts": {
    "dev": "ts-node-dev src/server.ts"
  },
```

Start the server
```bash
yarn dev
```

## (Type ORM)[https://typeorm.io/#/]

Installation
```bash
yarn global add typeorm
yarn add typeorm reflect-metadata sqlite3
```

Create Database Migrations  
```bash
yarn typeorm migration:create -n CreateSettings
```

Execute Migration
```bash
yarn typeorm migration:run
```

Revert Migration
```bash
yarn typeorm migration:revert
```

Install Library to generate UUID from Database
```bash
yarn add uuid
```

Install Types
```bash
yarn add @types/uuid -D
```