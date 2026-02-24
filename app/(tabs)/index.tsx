import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    // Conteneur principal avec un fond gris clair
    <View style={styles.container}>

      {/* View horizontale pour le badge */}
      <View style={styles.badgeContainer}>

        {/* Image circulaire (photo de profil) */}
        <Image
          source={require('../../assets/images/profile.jpg')}
          style={styles.avatar}
        />

        {/* View verticale contenant le Nom et le Statut */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Homam Dany</Text>
          <Text style={styles.status}>Développeur Junior</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Fond gris clair
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeContainer: {
    flexDirection: 'row', // View horizontale
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30, // Pour rendre l'image circulaire
    marginRight: 15,
    backgroundColor: '#ddd', // Couleur de secours si l'image ne charge pas
  },
  infoContainer: {
    flexDirection: 'column', // View verticale
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold', // Nom en gras
    color: '#333',
  },
  status: {
    fontSize: 14,
    color: '#666',
  },
});
