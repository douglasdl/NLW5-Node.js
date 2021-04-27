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