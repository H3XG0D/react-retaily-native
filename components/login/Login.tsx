import React from 'react';
import {View, SafeAreaView, Linking, TouchableOpacity, Text} from 'react-native';
import styled from "styled-components/native"; // IMPORT CSS LIBRARY
import {IStackScreenProps} from '../../navigation/StackScreen';
import * as variables from './../../constants';

const LoginPage: React.FunctionComponent<IStackScreenProps> = props => {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const {navigation} = props;

  return (
    <View>
      <Logo>
        <LogoImage source={require('./images/logo.png')}/>
      </Logo>

      <LoginHeader>
        <LoginTitle>Вход</LoginTitle>
        <LoginSubtitle>Введите логин или номер телефона</LoginSubtitle>
      </LoginHeader>

      <Login>
        <SafeAreaView>
          <LoginInput
            onChangeText={onChangeText}
            value={text}
            placeholder="Введите логин"
          >
          </LoginInput>

          <LoginInput
            onChangeText={onChangePassword}
            value={password}
            placeholder="Пароль"
            secureTextEntry={true}
          >
          </LoginInput>

          <LoginForgetPassword
            onPressIn={() => ''}
            autoCorrect={false}
          >
            Забыли пароль?
          </LoginForgetPassword>

          <TouchableOpacity onPress={() => {/* TODO */
          }}>
            <LoginSignIn>
              <LoginSignInText>Войти</LoginSignInText>
            </LoginSignIn>
          </TouchableOpacity>
        </SafeAreaView>

        <LoginSignUpView>
          <LoginSignUpText>Нет аккаунта? <LoginSignUp
            onPressIn={() => navigation.navigate('Registration')}>Зарегистрироваться</LoginSignUp>
          </LoginSignUpText>
        </LoginSignUpView>

      </Login>
    </View>
  );
}

const Logo = styled.View`
  justify-content: center;
  align-items: center;
  background-color: ${variables.COLORS.primary};
  height: 210px;
  width: 100%;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const LogoImage = styled.Image`
  width: 120px;
  height: 26px;
`;

const Login = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginHeader = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 65px;
  margin-top: 30px;
`;

const LoginTitle = styled.Text`
  font-size: ${variables.SIZES.h2};
  font-weight: 600;
  padding-bottom: 20px;
`;

const LoginSubtitle = styled.Text`
  font-size: ${variables.SIZES.font};
  color: ${variables.COLORS.gray};
`;

const LoginInput = styled.TextInput`
  background-color: ${variables.COLORS.milky};
  border-radius: ${variables.SIZES.radius};
  width: 260px;
  height: 45px;
  margin-top: ${variables.SIZES.top};
  padding: 10px;
`;

const LoginForgetPassword = styled.TextInput`
  color: ${variables.COLORS.secondary};
  font-weight: ${variables.SIZES.bold};
  text-decoration: underline;
`;

const LoginSignIn = styled.View`
  background-color: ${variables.COLORS.tertiary};
  border-radius: ${variables.SIZES.radius};
  margin-top: ${variables.SIZES.top};
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 45px;
`;

const LoginSignInText = styled.Text`
  color: ${variables.COLORS.white};
  font-weight: ${variables.SIZES.bold};
`;

const LoginSignUpView = styled.View`
  margin-top: 30px;
`;

const LoginSignUpText = styled.Text`
  font-size: ${variables.SIZES.font};
`;

const LoginSignUp = styled.TextInput`
  color: ${variables.COLORS.secondary};
  font-weight: ${variables.SIZES.bold};
  text-decoration: underline;
`;

export default LoginPage;