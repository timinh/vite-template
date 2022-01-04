# Vite-template

A simple vite template including : 
 - Vue 3
 - File based routing using [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
 - Layout system based on [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
 - Components auto-importing using [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
 - Markdown files as components
 - .env file : values should be prefixed with VITE_
 (.env file is commited you should override it with .en.local with you own value. See [Env variables and modes](https://vitejs.dev/guide/env-and-mode.html))
 - APIs auto importing using [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)

 
 ## Usage

 
 ### Developement

 Open a terminal and run the command

 ```
 npm run dev 
 ```
then open in your browser : http://localhost:3000/


### Build

To build the app, run 

```
npm run build
```
distribution files will be generated in the 'dist' folder.
You can deploy the 'dist' folder on you server.

Use the preview command

```
npm run preview
```
to preview the site from the 'dist' folder
