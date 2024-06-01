import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const VerificationScreen = ({navigation}) => {
  const [verificationCode, setVerificationCode] = useState('');
  const refs = useRef([]);

  const renderInputBoxes = () => {
    const inputBoxes = [];
    for (let i = 0; i < 5; i++) {
      inputBoxes.push(
        <TextInput
          key={i}
          ref={ref => (refs.current[i] = ref)}
          style={styles.input}
          value={verificationCode[i] || ''}
          onChangeText={text => handleCodeChange(text, i)}
          keyboardType="numeric"
          maxLength={1}
          onSubmitEditing={() => focusNext(i)}
        />,
      );
    }
    return inputBoxes;
  };

  const handleCodeChange = (text, index) => {
    const updatedCode = verificationCode.split('');
    updatedCode[index] = text;
    setVerificationCode(updatedCode.join(''));
  };

  const focusNext = index => {
    if (index < 4) {
      refs.current[index + 1].focus();
    }
  };

  const handleVerification = () => {
    console.log('Verification Code:', verificationCode);
    // Verification logic
    navigation.navigate('NextScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/mail.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>인증번호 확인</Text>
      <Text style={styles.description}>
        메세지로 발송한 인증번호를 입력해주세요.
      </Text>
      <View style={styles.inputContainer}>{renderInputBoxes()}</View>
      <Text style={styles.description}>인증번호 다시보내기</Text>
      <Text style={styles.description}>인증번호가 오지 않았어요.</Text>
      <TouchableOpacity
        style={styles.orangeButton}
        onPress={handleVerification}>
        <Text style={styles.buttonText}>다음으로</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginRight: 10,
  },
  image: {
    width: '30%',
    marginBottom: 10,
    marginTop: 10,
  },
  orangeButton: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default VerificationScreen;
