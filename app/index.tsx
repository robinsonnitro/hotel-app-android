import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [screen, setScreen] = useState<'home' | 'info' | 'about'>('home');

  const HomeScreen = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Hotel App Mobile</Text>
      <Text style={styles.subtitle}>v1.0.0 - Radisson Edition</Text>
      
      <ScrollView style={styles.content}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setScreen('info')}
        >
          <Text style={styles.buttonText}>Info de la App</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.buttonSecondary]}
          onPress={() => setScreen('about')}
        >
          <Text style={styles.buttonText}>Acerca de</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );

  const InfoScreen = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Información</Text>
      <ScrollView style={styles.content}>
        <Text style={styles.text}>Esta es la aplicación móvil del Hotel App.</Text>
        <Text style={styles.text}>Desarrollada con React Native y Expo.</Text>
        <Text style={styles.text}>Plataforma: Android</Text>
      </ScrollView>
      <TouchableOpacity 
        style={[styles.button, styles.backButton]}
        onPress={() => setScreen('home')}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );

  const AboutScreen = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de</Text>
      <ScrollView style={styles.content}>
        <Text style={styles.text}>Hotel App - Sistema de Gestión</Text>
        <Text style={styles.text}>Versión: 1.0.0</Text>
        <Text style={styles.text}>Desarrollador: Radisson Hotels</Text>
        <Text style={styles.text}>Ubicación: Puerto Varas, Chile</Text>
      </ScrollView>
      <TouchableOpacity 
        style={[styles.button, styles.backButton]}
        onPress={() => setScreen('home')}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      {screen === 'home' && <HomeScreen />}
      {screen === 'info' && <InfoScreen />}
      {screen === 'about' && <AboutScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003d7a',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  content: {
    flex: 1,
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#003d7a',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#0066cc',
  },
  backButton: {
    backgroundColor: '#666',
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
