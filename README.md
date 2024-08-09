## Technologies Used
1. NestJS
2. NodeJS
3. Postgres
4. TypeORM
5. TypeScript
6. Python

## Installation

```bash
$ pnpm install
```

## Running the app

Copy the env file as .env and adjust DB_NAME, DB_USER and DB_PASSWORD according to your machine.

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev
```

## Testing the API
- Python code to POST documents to the REST API is named as script.py and included in the root of the directory.
- Make sure the server is running first by running
  ```bash
  $ pnpm run start
  ```
- Make sure requests package is installed, or install it using your respective pip version.
- Then test the POST request by running this command at root
  ```bash
  $ python3 script.py
  ```
