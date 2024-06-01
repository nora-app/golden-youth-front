import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const SignUpScreen = ({navigation}) => {
  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/logo1.png')}
        style={styles.imageTop}
        resizeMode="contain"
      />
      <Image
        source={require('../../assets/img/logo2.png')}
        style={styles.imageBottom}
        resizeMode="contain"
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.orangeButton}
          onPress={navigateToLoginScreen}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate('LoginScreen')}>
            황금청춘 입장하기
          </Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>황금청춘이 처음이신가요?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            /* 회원가입 로직 */
          }}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTop: {
    width: 200,
    height: 100,
  },
  imageBottom: {
    width: 200,
    height: 100,
    marginBottom: 90,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%',
    alignItems: 'center',
  },
  orangeButton: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'gray',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SignUpScreen;
