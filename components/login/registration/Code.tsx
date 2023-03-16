import React from "react";
import {Text, View} from 'react-native';
import { useRoute } from "@react-navigation/native";
import styled from 'styled-components/native';
import * as variables from './../../../constants'

const Code = () => {
  const route = useRoute();
  const { userNumber }: any = route.params;

  const number = 8 + String(userNumber);
  return (
    <CodeContainer>
      <CodeTitle>Верификация</CodeTitle>
      <CodeSubtitle>Пожалуйста введите код который будет отправлен на ваш номер: <CodeNumber>{number}</CodeNumber>
      </CodeSubtitle>
    </CodeContainer>
  );
}


export default Code;

const CodeContainer = styled.View`
  height: 400px;
  width: 330px;
  border: 3px solid ${variables.COLORS.primary};
  border-radius: 20px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
`;

const CodeTitle = styled.Text`
  margin-top: 30px;
  font-weight: ${variables.SIZES.bold};
  font-size: ${variables.SIZES.h1};
  color: ${variables.COLORS.black};
`;

const CodeSubtitle = styled.Text`
  font-size: ${variables.SIZES.h5};
  color: #483D8B;
  font-weight: ${variables.SIZES.font};
  margin-top: 6px;
  text-align: center;
  width: 250px;
`;

const CodeNumber = styled.Text`
  text-decoration: underline;
  color: #191970;
`;