import React from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import styled from 'styled-components/native';
import * as variables from './../../../constants';
import {IStackScreenProps} from "../../../navigation/StackScreen";
import {useAsyncStorage} from "@react-native-community/async-storage";

const Registration: React.FunctionComponent<IStackScreenProps> = props => {
  const {navigation} = props;
  const [number, onChangeText] = React.useState<any>('');
  const [numberError, setNumberError] = React.useState<any>('');
  const [disable, setDisable] = React.useState<boolean>(true);

  const validate = () => {
    if (number.length < 15) {
      setNumberError('Полностью впишите свой номер')
    } else {
      setDisable(false);
      setNumberError(true);
      let str = number
        .replace(' ', '')
        .replace('-', '')
        .replace('-', '')
        .replace('(', '')
        .replace(')', '')
      navigation.navigate('Code');
    }
  }

  const validateNumberElements = (number: string) => {
    let i = "("
    if (!number.includes('(')) {
      number = '(' + number;
    }
    if (!number.includes(')') && number.length > 4) {
      let strBefore = number.slice(0, 4)
      let strAfter = number.slice(4)
      number = strBefore + ')' + strAfter
    }
    if (!number.includes(' ') && number.length > 5) {
      let strBefore = number.slice(0, 5)
      let strAfter = number.slice(5)
      number = strBefore + ' ' + strAfter
    }
    if (!number.includes('-') && number.length > 9) {
      let strBefore = number.slice(0, 9)
      let strAfter = number.slice(9)
      number = strBefore + '-' + strAfter
    }
    if (number.length > 12 && (number.match(/-/g) || []).length < 2) {
      let strBefore = number.slice(0, 12)
      let strAfter = number.slice(12)
      number = strBefore + '-' + strAfter
    }
    onChangeText(number)

  }

  // @ts-ignore
  return (
    <Register>
      <RegisterTitle>Регистрация</RegisterTitle>
      <RegisterSubtitle>Телефон <Text style={{color: variables.COLORS.red}}>*</Text></RegisterSubtitle>

      <TouchableWithoutFeedback>
        <RegisterContainer>
          <RegisterNumber>8</RegisterNumber>
          <TextInput
            onChangeText={number => validateNumberElements(number)}
            value={number}
            placeholder="999-999-99-99"
            keyboardType="numeric"
            maxLength={15}
            numberOfLines={15}
            style={{width: 330}}
          />
        </RegisterContainer>
      </TouchableWithoutFeedback>
      <RegisterErrorText>{numberError}</RegisterErrorText>

      <RegisterInfo>
        Ваш номер телефона будет использоваться в качестве логина для входа в Ритейли
      </RegisterInfo>

      <TouchableOpacity onPress={() => {/* TODO */
      }}>

        <RegisterSubmit>
          <RegisterSubmitText onPress={() => validate()}>Подтвердить</RegisterSubmitText>
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