
## Node version

  For both, client and server

  ```
  18.16.0
  ```

## Server

to run server you need access its folder

```bash
cd server
```

install the dependencies

```bash
npm install
```

create a **.env** file in this folder and add the key

```bash
DATABASE_URL="file:./dev.db"
```

generate prisma db

```
bash npx prisma generate
```

run the server

```bash
npm run start:dev
```

## Client

to run server you need access its folder

```bash
cd ../client
```

install the dependencies

```bash
npm install
```

run it

```bash
npm run dev
```

