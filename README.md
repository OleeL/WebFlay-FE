# Build Guide

I built this as a static site with Next.Js. So it *should* be as easy as running this:

```bash
npx serve ./out
```

Using Node version `v19.2.0`

## Dev Build

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```

## Production builds

```bash
npm install
npm run build
npm run start

# or 
yarn install
yarn build
yarn start

# We're not using any SSR. So we can also just run 

npx serve ./out
```