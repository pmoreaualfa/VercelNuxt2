# Alfa3aDocVercel
### source
[(5) Build a BLOG Using NUXT JS & The CONTENT module ~ Vue JS Tutorial - YouTube](https://www.youtube.com/watch?v=1SAZMFwYUDE)  

#### source import images dans .module
[Working with images in Nuxt Content | Woet Flow](https://woetflow.com/posts/working-with-images-in-nuxt-content/#2-images-inside-the-article-content)

#### source heroicons
[@nuxt hero icons/solid | vuejscode.com](https://vuejscomponent.com/nuxt-hero-iconssolid)

#### source module content
[Get Started | Nuxt Content](https://content.nuxtjs.org/get-started)

#### source Tailwind
[danvega/nuxt3-tailwind3-starter](https://github.com/danvega/nuxt3-tailwind3-starter)

## install
```
npx create-nuxt-app  Alfa3aDocumentation
javascript
npm
modules : Axios / Content
Tailwind
no EsLint
Prettier
SSR
Deploiement target : Static (≠ Server)
jsconfig.json
```
## heroicons

```
npm i @nuxt-hero-icons/solid  
npm i @nuxt-hero-icons/outline

```
```
buildModules: [
    // https://github.com/whardier/nuxt-hero-icons
    '@nuxt-hero-icons/outline/nuxt',
    '@nuxt-hero-icons/solid/nuxt',
    ],
```
```
// assets/css/tailwind.css  
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## tailwind  

```
npm install -D tailwindcss  
npx tailwindcss init  
```
```
// tailwind.config.js  
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
//nuxt.config.js  
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: [
    "~/assets/css/tailwind.css"
  ],
})
```

## Vercel  Déploiement
pointer sur le sous-dossier root inclu
overide : build, dist, install



# Default
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
