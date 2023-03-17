import React from "react";
import { useRoute } from "@react-navigation/native";
import styled from 'styled-components/native';
import * as variables from './../../../constants'
import './../../../assets/fonts/Golos.ttf';
import {IStackScreenProps} from "../../../navigation/StackScreen";

const Code: React.FunctionComponent<IStackScreenProps> = props => {
  const {navigation} = props;

  const route = useRoute();
  const { userNumber }: any = route.params;
  const number = 8 + String(userNumber);

  React.useLayoutEffect(() => {
    navigation.setOptions({headerTitle: "Подтверждение"});
  }, [navigation]);

  return (
    <CodeContainer>
      <CodeSubtitle>Пожалуйста введите код который отправлен на номер: <CodeNumber>{number}</CodeNumber>
      </CodeSubtitle>

      <CodeContent>
        <CodeBox>
          <CodeInput>

          </CodeInput>
        </CodeBox>
        <CodeBox>
          <CodeInput>

          </CodeInput>
        </CodeBox>
        <CodeBox>
          <CodeInput>

          </CodeInput>
        </CodeBox>
        <CodeBox>
          <CodeInput>

          </CodeInput>
        </CodeBox>
      </CodeContent>

    </CodeContainer>
  );
}


export default Code;

const CodeContainer = styled.View`
  border-radius: 20px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
`;


const CodeSubtitle = styled.Text`
  font-size: ${variables.SIZES.h4};
  color: ${variables.COLORS.black}
  font-weight: ${variables.SIZES.font};
  margin-top: 6px;
  text-align: center;
  width: 300px;
`;

const CodeNumber = styled.Text`
  color: ${variables.COLORS.black};
  font-size: ${variables.SIZES.h4};
  font-weight: ${variables.SIZES.bold};
`;

const CodeContent = styled.View`
  margin-top: 50px;
  gap: 30px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  flex-direction: row;
`;

const CodeBox = styled.View`
  border-radius: 3px;
  border-color: ${variables.COLORS.primary};
  border-width: 0.5px;
`;

const CodeInput = styled.TextInput`
  font-size: 25px;
  color: ${variables.COLORS.black};
  padding: 0;
  text-align: center;
`;