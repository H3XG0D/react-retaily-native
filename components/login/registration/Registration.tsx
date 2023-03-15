import React from "react";
import {SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import styled from 'styled-components/native';
import * as variables from './../../../constants';
import {IStackScreenProps} from "../../../navigation/StackScreen";

const Registration: React.FunctionComponent<IStackScreenProps> = props => {
  const {navigation} = props;
  const [text, onChangeText] = React.useState('');

  return (
    <Register>
      <RegisterTitle>Регистрация</RegisterTitle>
      <RegisterSubtitle>Телефон <Text style={{color: variables.COLORS.red}}>*</Text></RegisterSubtitle>

      <TouchableWithoutFeedback>
        <RegisterContainer>
          <RegisterNumber>8</RegisterNumber>
          <TextInput
            onChangeText={onChangeText}
            value={text}
            placeholder="999-999-999"
            keyboardType="numeric"
            maxLength={10}
            numberOfLines={10}
            style={{width: 330}}
          />
        </RegisterContainer>
      </TouchableWithoutFeedback>

      <RegisterInfo>
        Ваш номер телефона будет использоваться в качестве логина для входа в
      </RegisterInfo>

      <TouchableOpacity onPress={() => {/* TODO */
      }}>

        <RegisterSubmit>
          <RegisterSubmitText onPress={() => navigation.navigate('Code')}>Подтвердить</RegisterSubmitText>
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
  margin-top: 40px;

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

export default Registration;