# Project: Nutri

This app allows you to create recipes and add the ingredients. The app will list all the nutrients given by the recipe. It also allows you to create a calendar, attaching the recipes created to the specified day. You can export the content of the calendar into a shopping list with all the ingredients.

## FoodData Central

The data used by the app is obtained using the [FoodData Central API](https://fdc.nal.usda.gov/api-guide.html). If you wanna test this app in a local environment you'll need to get an API key from their site or use the demo key.

## Project branches

There are (or will be) 2 branches for this project. One is client-only with no persistent data, made only to test the app and as portfolio. The other branch will include database access, persistent data and account management.

## Project Setup

```sh
npm install
```

### API key setup
- Duplicate the .env.example file and rename it to .env. Once done, you can change the demo key for your own or test the app with that one.

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```