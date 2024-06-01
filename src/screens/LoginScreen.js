import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogin = () => {
    console.log('전화번호:', phoneNumber);
    setModalVisible(true);
  };

  const handleModalButton = () => {
    setModalVisible(false);
    navigation.navigate('VerificationScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/amusement_park.png')}
        style={styles.imageBottom}
        resizeMode="contain"
      />
      <Text style={styles.title}>황금청춘 입장하기</Text>
      <Text style={styles.title}>전화번호를 입력해주세요</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        placeholder="전화번호"
      />
      <TouchableOpacity style={styles.orangeButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>다음으로</Text>
      </TouchableOpacity>
      {/* 모달 */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>이 번호가 맞으신가요?</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleModalButton}>
                <Text style={styles.modalButtonText}>네, 맞아요</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>아니에요, 수정할래요</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  orangeButton: {
    backgroundColor: 'orange',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButtonContainer: {
    flexDirection: 'column',
    width: '100%',
  },
  modalButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default LoginScreen;
