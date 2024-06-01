import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';

const Onboarding_3 = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: '#ffffff', flex: 1 }}>
      <View>
        <Text style={{ fontSize: 25, fontWeight: '900', color: '#000000', padding: 20 }}>
          원하는 사람과 일대일로 이야기해요
        </Text>
      </View>
      <View>
        <Text style={{ color: '#000000', paddingLeft: 20, paddingRight: 20 }}>
          쪽지 기능을 통해 원하는 사람과 친해지고, 서로 매일 안부를 확인해요
        </Text>
      </View>
      <View style={{ alignItems: 'center', flex: 1 }}>
        <Image source={require('../../assets/img/Onboarding3.png')} style={{ width: '100%', height: '70%' }} />
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            width: 250,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 20,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={{ color: '#ffffff', fontSize: 20, fontWeight: '600' }}>다음</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding_3;
