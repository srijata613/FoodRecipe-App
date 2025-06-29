import React from "react";
import { useSelector } from "react-redux";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function FavoriteScreen() {
  const navigation = useNavigation();

  const favoriteRecipesList = useSelector(
    (state) => state.favorites.favoriterecipes || []
  );

  if (favoriteRecipesList.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No favorite recipes yet!</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Heading */}
      <View testID="FavoriteRecipes">
        <Text style={styles.headerText}>My Favorite Recipes</Text>
      </View>

      {/* Go Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Go back</Text>
      </TouchableOpacity>

      {/* Favorite Recipes List */}
      <FlatList
        data={favoriteRecipesList}
        keyExtractor={(item) => item.idFood.toString()}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() =>
              navigation.navigate("RecipeDetail", {
                ...item,
              })
            }
          >
            <Image source={{ uri: item.recipeImage }} style={styles.recipeImage} />
            <Text style={styles.recipeTitle}>
              {item.recipeName.length > 20
                ? item.recipeName.slice(0, 20) + "..."
                : item.recipeName}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: hp(2.5),
    color: "#6B7280",
  },
  backButton: {
    backgroundColor: "#2563EB",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 100,
    alignItems: "center",
    marginLeft: 20,
  },
  backButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  headerText: {
    fontSize: hp(3.8),
    marginTop: hp(4),
    marginLeft: 20,
    fontWeight: "600",
    color: "#1F2937",
  },
  listContentContainer: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  cardContainer: {
    backgroundColor: "#fff",
    marginBottom: hp(2),
    padding: wp(4),
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  recipeImage: {
    width: wp(20),
    height: wp(20),
    borderRadius: 10,
    marginRight: wp(4),
  },
  recipeTitle: {
    fontSize: hp(2),
    fontWeight: "bold",
    color: "#4B5563",
  },
});
