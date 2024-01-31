# <p align="center">Hand scanner frontend</p>

This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting started

### Prerequisites

`Docker compose` is used to make it easier to start it. See the
official [docker installation documentation](https://docs.docker.com/compose/install/).

### Installation

Clone the repo

   ```shell
   git clone https://github.com/antonnum/hand-scanner/branches
   ```

Run in `development mode` or with `docker-compse`

1. Create `.env` file and fill it according to the `.env.example`
    ```shell
    cat .env.example >> .env
    ```

2. Run the server.

Run in `development mode`:

```shell
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Run with `docker-compose`

1. Run `docker-compose`
   ```shell
   docker-compose up -d --build
   ```
   

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and
load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions
are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
