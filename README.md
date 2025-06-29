# 🍽️ Food Recipe App

A beautifully designed React Native application for browsing, creating, saving, and favoriting food recipes. Built with reusable components, hardcoded data, and Redux for state management.

## 📱 Features

- 🏠 **Home Screen**: View all recipes by category
- 🧾 **Recipe Detail Screen**: Full recipe with ingredients, image, and instructions
- ⭐ **Favorite Recipes**: Add/remove recipes from favorites using Redux
- ✍️ **Custom Recipes**: Create and view your own custom recipes using AsyncStorage
- 📁 **Categorized View**: Browse recipes by selected categories
- 📋 **Recipe Form Screen**: Input form to create custom recipes

## 🛠️ Tech Stack

- React Native (with Expo)
- Redux Toolkit for state management (favorites)
- AsyncStorage for storing custom recipes locally
- Responsive Design using `react-native-responsive-screen`
- Navigation using `@react-navigation/native`

## 📂 Folder Structure


src/
├── components/
│   ├── categories.js
│   └── recipes.js
├── redux/
│   ├── favoritesSlice.js
│   └── store.js
├── screens/
│   ├── HomeScreen.js
│   ├── RecipeDetailScreen.js
│   ├── FavoriteScreen.js
│   ├── CustomRecipesScreen.js
│   ├── RecipesFormScreen.js
│   └── MyRecipeScreen.js



## 🚀 Getting Started

1. Clone the repository:
   
   git clone https://github.com/srijata613/FoodRecipe-App.git
   cd FoodRecipe-App

2. Install dependencies:

   
   npm install
   

3. Run the app (with Expo):

   
   npm start
   

4. Open in:

   * Android/iOS simulator
   * Physical device with Expo Go

## 📝 Customization

* Add new categories or recipes in `HomeScreen.js`
* To customize styling, edit `StyleSheet` objects in each component
* You can switch from local data to API integration later

## 💾 Local Storage

* Favorite recipes are stored using *Redux*
* Custom recipes are saved in *AsyncStorage* and retrieved in the `MyRecipeScreen`

## 🙋‍♀️ Author

Srijata Moitra
[GitHub: @srijata613](https://github.com/srijata613)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



