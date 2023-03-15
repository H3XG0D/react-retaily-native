import React from "react";
import {SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import styled from 'styled-components/native';
import * as variables from './../../../constants';
import {IStackScreenProps} from "../../../navigation/StackScreen";
import {useAsyncStorage} from "@react-native-community/async-storage";

const Registration: React.FunctionComponent<IStackScreenProps> = props => {
  const {navigation} = props;
  const [number, onChangeText] = React.useState('');
  const [numberError, setNumberError] = React.useState('');

  const validate = () => {
    if (number.length < 11) {
      setNumberError('Полностью впишите свой номер')
    } else if (number.indexOf(' ') >= 0) {
      setNumberError('Номер не может содержать пробелы')
    } else {
      setNumberError('');
    }
  }

  return (
    <Register>
      <RegisterTitle>Регистрация</RegisterTitle>
      <RegisterSubtitle>Телефон <Text style={{color: variables.COLORS.red}}>*</Text></RegisterSubtitle>

      <TouchableWithoutFeedback>
        <RegisterContainer>
          <RegisterNumber>8</RegisterNumber>
          <TextInput
            onChangeText={number => onChangeText(number)}
            value={number}
            placeholder="999-999-999"
            keyboardType="numeric"
            maxLength={10}
            numberOfLines={10}
            style={{width: 330}}
          />
        </RegisterContainer>
      </TouchableWithoutFeedback>
      <RegisterErrorText>{numberError}</RegisterErrorText>

      <RegisterInfo>
        Ваш номер телефона будет использоваться в качестве логина для входа в
      </RegisterInfo>

      <TouchableOpacity onPress={() => {/* TODO */
      }}>

        <RegisterSubmit>
          <RegisterSubmitText onPress={() => validate()} onPressIn={() => navigation.navigate('Code')}>Подтвердить</RegisterSubmitText>
        </RegisterSubmit>
      </TouchableOpacity>
    </Register>
  );
}

const Register = styled.View`
  margin-top: 60px;
`;

const RegisterTitle = styled.Text`
  color: ${variables.COLORS.black};
  font-size: ${variables.SIZES.title};
  padding-bottom: 15px;
  text-align: center;
`;

const RegisterSubtitle = styled.Text`
  font-size: ${variables.SIZES.h5};
  margin-left: 30px;
`;

const RegisterNumber = styled.Text`
  font-size: 14px;
  margin-left: 15px;
  color: ${variables.COLORS.black};
  margin-bottom: 1px;
`;

const RegisterContainer = styled.SafeAreaView`
  flex-direction: row;
  border-radius: 10px;
  width: 360px;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${variables.COLORS.white};
  align-items: center;
`;

const RegisterInfo = styled.Text`
  margin-left: 30px;
  margin-top: 5px;
  line-height: 18px;
  font-size: ${variables.SIZES.h5};
  width: 300px;
`;

const RegisterSubmit = styled.View`
  background-color: ${variables.COLORS.fifth};
  border-radius: ${variables.SIZES.radius};
  margin-top: 30px;

  margin-left: auto;
  margin-right: auto;

  align-items: center;
  justify-content: center;

  width: 120px;
  height: 35px;
`;

const RegisterSubmitText = styled.Text`
  color: ${variables.COLORS.white};
  font-size: ${variables.SIZES.h4};
`;

const RegisterErrorText = styled.Text`
  color: ${variables.COLORS.red};
  font-size: 12px;
  margin-left: 20px;
`;

export default Registration;