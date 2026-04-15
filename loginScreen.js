import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Iniciar Sesión</Text>

      <Text>Correo</Text>
      <TextInput placeholder="Ingresa tu correo" style={styles.input}/>

      <Text>Contraseña</Text>
      <TextInput placeholder="Ingresa tu contraseña" secureTextEntry={true} style={styles.input}/>

      <TouchableOpacity>
        <Text style={styles.registerText}>Ingresar</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>¿No tienes cuenta?</Text>

      <TouchableOpacity>
        <Text style={styles.registerText}>Registrarse</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 10
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },

  registerText: {
    textAlign: 'center',
    marginTop: 10
  }
});