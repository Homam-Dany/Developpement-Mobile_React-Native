import React from "react";
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const DATA = [
  {
    id: "1",
    titre: "Les Jardins de Majorelle",
    pays: "Maroc",
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=500&q=80",
  },
  {
    id: "2",
    titre: "Marina d'Agadir",
    pays: "Maroc",
    image:
      "https://images.unsplash.com/photo-1555880155-2e697d4c9889?w=500&q=80",
  },
  {
    id: "3",
    titre: "Tour Eiffel",
    pays: "France",
    image:
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&q=80",
  },
  {
    id: "4",
    titre: "Temples de Kyoto",
    pays: "Japon",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=80",
  },
  {
    id: "5",
    titre: "Plages de Bali",
    pays: "Indonésie",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=80",
  },
  {
    id: "6",
    titre: "Times Square",
    pays: "États-Unis",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&q=80",
  },
  {
    id: "7",
    titre: "Colisée de Rome",
    pays: "Italie",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=500&q=80",
  },
  {
    id: "8",
    titre: "Burj Khalifa",
    pays: "Émirats",
    image:
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=500&q=80",
  },
  {
    id: "9",
    titre: "Oia, Santorin",
    pays: "Grèce",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=500&q=80",
  },
  {
    id: "10",
    titre: "Machu Picchu",
    pays: "Pérou",
    image:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=500&q=80",
  },
  {
    id: "11",
    titre: "Londres",
    pays: "Royaume-Uni",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&q=80",
  },
  {
    id: "12",
    titre: "Opéra de Sydney",
    pays: "Australie",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=500&q=80",
  },
  {
    id: "13",
    titre: "Rio de Janeiro",
    pays: "Brésil",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=500&q=80",
  },
];

const DestinationItem = ({ destination }) => (
  <View style={styles.card}>
    <Image source={{ uri: destination.image }} style={styles.cardImage} />
    <View style={styles.cardInfo}>
      <Text style={styles.cardTitle}>{destination.titre}</Text>
      <View style={styles.badgeRow}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{destination.pays}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            Alert.alert("En route !", `Vous avez choisi : ${destination.titre}`)
          }
        >
          <Text style={styles.exploreText}>Explorer ➔</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function App() {
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
        }}
        style={styles.bannerImage}
      />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerTitle}>Découvrez le Monde</Text>
        <Text style={styles.headerDescription}>
          Explorez les plus belles destinations de voyage. Préparez vos valises
          pour votre prochaine aventure inoubliable !
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DestinationItem destination={item} />}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  listContainer: {
    paddingBottom: 30,
  },
  headerContainer: {
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderColor: "#E2E8F0",
  },
  bannerImage: {
    width: "100%",
    height: 250,
  },
  headerTextContainer: {
    padding: 20,
    alignItems: "center",
    marginTop: -50,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    marginHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: "#0F172A",
    marginBottom: 8,
    textAlign: "center",
    letterSpacing: 1,
  },
  headerDescription: {
    fontSize: 15,
    color: "#475569",
    textAlign: "center",
    lineHeight: 24,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    marginHorizontal: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardInfo: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 16,
  },
  badgeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badge: {
    backgroundColor: "#E0F2FE",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 24,
  },
  badgeText: {
    color: "#0284C7",
    fontSize: 13,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  exploreText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
    backgroundColor: "#38BDF8",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
    overflow: "hidden",
  },
});
