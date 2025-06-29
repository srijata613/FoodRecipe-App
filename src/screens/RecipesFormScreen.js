import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet,
  } from "react-native";
  import React, { useState } from "react";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  
  export default function RecipesFormScreen({ route, navigation }) {
    const { recipeToEdit, recipeIndex, onrecipeEdited } = route.params || {};
    const [title, setTitle] = useState(recipeToEdit ? recipeToEdit.title : "");
    const [image, setImage] = useState(recipeToEdit ? recipeToEdit.image : "");
    const [description, setDescription] = useState(
      recipeToEdit ? recipeToEdit.description : ""
    );
  
    const saverecipe = async () => {
      try {
        const newrecipe = { title, image, description };
  
        // Get existing recipes
        const storedRecipes = await AsyncStorage.getItem("customrecipes");
        let recipes = storedRecipes ? JSON.parse(storedRecipes) : [];
  
        if (recipeToEdit) {
          // Edit existing recipe
          if (typeof recipeIndex === "number") {
            recipes[recipeIndex] = newrecipe;
          }
          if (onrecipeEdited) {
            onrecipeEdited();
          }
        } else {
          // Add new recipe
          recipes.push(newrecipe);
        }
  
        // Save updated recipes
        await AsyncStorage.setItem("customrecipes", JSON.stringify(recipes));
        navigation.goBack();
      } catch (error) {
        console.error("Error saving recipe:", error);
      }
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        <TextInput
          placeholder="Image URL"
          value={image}
          onChangeText={setImage}
          style={styles.input}
        />
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>Upload Image URL</Text>
        )}
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          multiline={true}
          numberOfLines={4}
          style={[styles.input, { height: hp(20), textAlignVertical: "top" }]}
        />
        <TouchableOpacity onPress={saverecipe} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save recipe</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: wp(4),
    },
    input: {
      marginTop: hp(4),
      borderWidth: 1,
      borderColor: "#ddd",
      padding: wp(2),
      marginVertical: hp(1),
      borderRadius: 5,
    },
    image: {
      width: 300,
      height: 200,
      margin: wp(2),
      borderRadius: 10,
    },
    imagePlaceholder: {
      height: hp(20),
      justifyContent: "center",
      alignItems: "center",
      marginVertical: hp(1),
      borderWidth: 1,
      borderColor: "#ddd",
      textAlign: "center",
      padding: wp(2),
      borderRadius: 5,
      color: "#aaa",
    },
    saveButton: {
      backgroundColor: "#4F75FF",
      padding: wp(3),
      alignItems: "center",
      borderRadius: 5,
      marginTop: hp(2),
    },
    saveButtonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: wp(4),
    },
  });
  