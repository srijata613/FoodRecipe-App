import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function Recipe({ foods }) {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    const imageUrl =
      item.recipeImage?.startsWith("http://")
        ? item.recipeImage.replace("http://", "https://")
        : item.recipeImage || "https://via.placeholder.com/300";

    return (
      <View style={styles.cardContainer} testID="articleDisplay">
        <TouchableOpacity
          onPress={() => navigation.navigate("RecipeDetail", { ...item })}
          style={styles.card}
        >
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.name} numberOfLines={1}>
            {item.recipeName}
          </Text>
          <Text style={styles.description} numberOfLines={1}>
            {item.cookingDescription}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {foods?.length > 0 ? (
        <FlatList
          data={foods}
          keyExtractor={(item) => item.idFood?.toString() || item.recipeId}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          testID="recipesDisplay"
        />
      ) : (
        <Text style={styles.emptyText}>No recipes found</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4),
    marginTop: hp(2),
  },
  row: {
    justifyContent: "space-between",
    marginBottom: hp(2),
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: wp(2),
  },
  card: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    borderRadius: 20,
    padding: wp(1),
  },
  image: {
    width: "100%",
    height: hp(25),
    borderRadius: 20,
    backgroundColor: "#E5E7EB",
  },
  name: {
    fontSize: hp(1.8),
    fontWeight: "600",
    color: "#1F2937",
    marginTop: hp(1),
  },
  description: {
    fontSize: hp(1.4),
    color: "#6B7280",
    marginTop: hp(0.3),
  },
  emptyText: {
    fontSize: hp(2),
    color: "#9CA3AF",
    textAlign: "center",
    marginTop: hp(5),
  },
});
