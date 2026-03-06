import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  FlatList, 
  SafeAreaView,
  TouchableOpacity,
  Alert
} from 'react-native';

// --- PARTIE 3 : Création des données (DATA) ---
const DATA = [
  { 
    id: '1', 
    titre: 'Les Jardins de Majorelle', 
    pays: 'Maroc', 
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=500&q=80' 
  },
  { 
    id: '2', 
    titre: 'Plage et Marina d\'Agadir', 
    pays: 'Maroc', 
    image: 'https://images.unsplash.com/photo-1577971132997-c10be9372519?w=500&q=80' // Image d'ambiance marocaine/côtière
  },
  { 
    id: '3', 
    titre: 'Tour Eiffel', 
    pays: 'France', 
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&q=80' 
  },
  { 
    id: '4', 
    titre: 'Temples de Kyoto', 
    pays: 'Japon', 
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=80' 
  },
  { 
    id: '5', 
    titre: 'Plages de Bali', 
    pays: 'Indonésie', 
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&q=80' 
  },
];

// --- PARTIE 3 & 4 : Composant Item personnalisé ---
const DestinationItem = ({ destination }) => (
  <View style={styles.card}>
    <Image source={{ uri: destination.image }} style={styles.cardImage} />
    
    {/* Ajout d'une marge interne (padding) - Étape 4.3 */}
    <View style={styles.cardInfo}>
      <Text style={styles.cardTitle}>{destination.titre}</Text>
      
      {/* Utilisation de flexDirection: 'row', alignItems et justifyContent - Étapes 4.1 & 4.2 */}
      <View style={styles.badgeRow}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{destination.pays}</Text>
        </View>
        
        {/* Rendre le texte "Explorer" cliquable */}
        <TouchableOpacity 
          onPress={() => Alert.alert("En route !", `Vous avez choisi : ${destination.titre}`)}
        >
          <Text style={styles.exploreText}>Explorer ➔</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function App() {

  // --- PARTIE 2 : Mise en page de l'accueil (Bannière) ---
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      {/* 2.1 - Image distante via URL et 2.4 - Hauteur fixe */}
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80' }}
        style={styles.bannerImage}
      />
      {/* 2.2 et 2.4 - Titre, description et texte centré */}
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
    // SafeAreaView permet d'éviter que le contenu passe sous l'encoche de l'écran (notch)
    <SafeAreaView style={styles.container}>
      {/* PARTIE 3 : Affichage avec FlatList optimisée */}
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <DestinationItem destination={item} />}
        // Le header remplace la ScrollView globale pour de meilleures performances
        ListHeaderComponent={renderHeader} 
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

// --- STYLES (StyleSheet) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  listContainer: {
    paddingBottom: 30, 
  },
  
  // Styles de la Bannière (Partie 2)
  headerContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#eaeaea',
  },
  bannerImage: {
    width: '100%',
    height: 220, 
  },
  headerTextContainer: {
    padding: 15,
    alignItems: 'center', 
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 8,
    textAlign: 'center', 
  },
  headerDescription: {
    fontSize: 15,
    color: '#7F8C8D',
    textAlign: 'center', 
    lineHeight: 22,
  },

  // Styles des Cartes (Parties 3 & 4)
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16, 
    marginHorizontal: 16,
    marginBottom: 16,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, 
    overflow: 'hidden', 
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardInfo: {
    padding: 16, 
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  badgeRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  badge: {
    backgroundColor: '#3498DB',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  badgeText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '600',
  },
  exploreText: {
    color: '#3498DB',
    fontWeight: 'bold',
    fontSize: 14,
  }
});
