import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  import { AntDesign } from "@expo/vector-icons";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { useDispatch, useSelector } from "react-redux";
  import { toggleFavorite } from "../redux/favoritesSlice"; // adjust path if needed
  
  export default function RecipeDetailScreen({ route }) {
    const recipe = route.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();
  
    const isFavorite = useSelector((state) =>
      state.favorites.favoriterecipes.some((item) => item.idFood === recipe.idFood)
    );
  
    const handleToggleFavorite = () => {
      dispatch(toggleFavorite(recipe));
    };
  
    return (
      <ScrollView style={styles.container}>
        {/* Image */}
        <View testID="imageContainer">
          <Image
            source={{ uri: recipe.recipeImage }}
            style={styles.recipeImage}
          />
        </View>
  
        {/* Back + Favorite */}
        <View style={styles.topButtons}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
  
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={handleToggleFavorite}
          >
            <AntDesign
              name={isFavorite ? "heart" : "hearto"}
              size={24}
              color={isFavorite ? "red" : "black"}
            />
          </TouchableOpacity>
        </View>
  
        {/* Title */}
        <View testID="recipeTitle" style={styles.titleContainer}>
          <Text style={styles.titleText}>{recipe.recipeName}</Text>
        </View>
  
        {/* Category */}
        <View testID="recipeCategory" style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{recipe.category}</Text>
        </View>
  
        {/* Misc Info */}
        <View testID="miscContainer" style={styles.miscContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.iconText}>⏱ 35 Mins</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.iconText}>👥 03 Servings</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.iconText}>🔥 103 Cal</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.iconText}>📈 Medium</Text>
          </View>
        </View>
  
        {/* Ingredients */}
        <View testID="sectionContainer" style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Ingredients</Text>
          <View testID="ingredientsList">
            {recipe.ingredients.map((item, index) => (
              <View key={index} style={styles.ingredientItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.ingredientText}>
                  {item.ingredientName} {item.measure}
                </Text>
              </View>
            ))}
          </View>
        </View>
  
        {/* Instructions */}
        <View testID="sectionContainer" style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Instructions</Text>
          <Text style={styles.instructionsText}>
            {recipe.recipeInstructions}
          </Text>
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    recipeImage: {
      width: wp("100%"),
      height: hp("30%"),
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    topButtons: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: wp("4%"),
      marginTop: hp("2%"),
    },
    backButton: {
      backgroundColor: "#F3F4F6",
      paddingHorizontal: wp("5%"),
      paddingVertical: hp("1%"),
      borderRadius: 20,
    },
    backButtonText: {
      fontSize: hp("2%"),
      fontWeight: "600",
      color: "#000",
    },
    favoriteButton: {
      padding: hp("1%"),
    },
    titleContainer: {
      paddingHorizontal: wp("5%"),
      marginTop: hp("2%"),
    },
    titleText: {
      fontSize: hp("3%"),
      fontWeight: "700",
      color: "#1F2937",
    },
    categoryContainer: {
      paddingHorizontal: wp("5%"),
      marginTop: hp("0.5%"),
    },
    categoryText: {
      fontSize: hp("2%"),
      color: "#9CA3AF",
    },
    miscContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      paddingVertical: hp("2%"),
      marginTop: hp("1%"),
    },
    infoBox: {
      alignItems: "center",
    },
    iconText: {
      fontSize: hp("1.6%"),
      fontWeight: "500",
    },
    sectionContainer: {
      paddingHorizontal: wp("5%"),
      marginTop: hp("3%"),
    },
    sectionTitle: {
      fontSize: hp("2.5%"),
      fontWeight: "700",
      marginBottom: hp("1%"),
      color: "#111827",
    },
    ingredientItem: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FEF3C7",
      padding: hp("1%"),
      borderRadius: 10,
      marginBottom: hp("1%"),
    },
    bullet: {
      marginRight: wp("2%"),
      fontSize: hp("2%"),
      color: "#FBBF24",
    },
    ingredientText: {
      fontSize: hp("2%"),
      color: "#111827",
    },
    instructionsText: {
      fontSize: hp("1.9%"),
      color: "#374151",
      lineHeight: hp("2.8%"),
      textAlign: "justify",
    },
  });
  