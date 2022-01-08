# Vite-template

A simple vite template including : 
 - Vue 3
 - File based routing and meta tags using [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
 - Layout system based on [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
 - Components auto-importing using [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
 - Markdown files as components and/or pages
 - .env file : values should be prefixed with VITE_
 (.env file is commited you should override it with .en.local with you own value. See [Env variables and modes](https://vitejs.dev/guide/env-and-mode.html))
 - APIs auto importing using [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
 - Meta tags and .md files using [@vueuse/head](https://github.com/vueuse/head)

 ### Create a new project from this template

 Run the following command in your terminal window :

 ```
npx degit https://github.com/timinh/vite-template.git myProjectFolder
 ```
 then
 ```
 cd myProjectFolder
 ```

 ### Installation

 Run the command : 

 ```
 npm install
 ```
 
 ### Developement

 To start the dev server, run :

 ```
 npm run dev 
 ```
then open in your browser : http://localhost:3000/


### Build

To build the app, run :

```
npm run build
```
distribution files will be generated in the `dist` folder.
You can deploy the `dist` folder on you server.

Use the preview command to preview the site from the `dist` folder :

```
npm run preview
```

### Configuration

Create an `.env.local` file in the root directory of your project or duplicate provided `.env` file and add you environment specific variables in the form `VITE_NAME=value`. 

Site title and description : 

```
VITE_SITE_TITLE=My awesome site
VITE_SITE_DESCRIPTION=Site description
```
These variables are used for the title and description of the site (see `App.vue`)

you can add you own vars, for example : 

```
VITE_API_KEY=my_api_key
```

The *process.env.VITE_API_KEY* var is now available in your app.

(Don't forget to update the title in the `index.html`)

### Pages
Simply add .vue files or .md files in the `pages` folder

You can use meta in both .vue and .md files.
For .vue files see [vite-plugin-pages documentation](https://github.com/hannoeru/vite-plugin-pages)
For .md files, use frontmatter syntax, see [vite-plugin-md documentation](https://github.com/antfu/vite-plugin-md)