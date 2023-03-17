import React, { useRef, useState } from "react";
import { useRoute } from "@react-navigation/native";
import styled from "styled-components/native";
import * as variables from "./../../../constants";
import { IStackScreenProps } from "../../../navigation/StackScreen";
import { TouchableOpacity } from "react-native";

const Code: React.FunctionComponent<IStackScreenProps> = props => {
  const { navigation } = props;

  const route = useRoute();
  const { userNumber }: any = route.params;
  const number = 8 + String(userNumber);

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: "Подтверждение" });
  }, [navigation]);

  const firstInput = useRef<any>();
  const secondInput = useRef<any>();
  const thirdInput = useRef<any>();
  const fourthInput = useRef<any>();

  const [otp, setOtp] = useState<any>({1: '', 2: '', 3: '', 4: ''});

  return (
    <CodeContainer>
      <CodeSubtitle>Пожалуйста введите код который отправлен на номер: <CodeNumber>{number}</CodeNumber>
      </CodeSubtitle>

      <CodeContent>
        <CodeBox>
          <CodeInput
            style={{ paddingHorizontal: 18, paddingVertical: 10 }}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={(text) => {
              setOtp({...otp, 1: text})
              text && secondInput.current.focus()
            }}
          />
        </CodeBox>

        <CodeBox>
          <CodeInput
            style={{ paddingHorizontal: 18, paddingVertical: 10 }}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={(text) => {
              setOtp({...otp, 2: text})
              text ? thirdInput.current.focus() : firstInput.current.focus()
            }}
          />
        </CodeBox>

        <CodeBox>
          <CodeInput
            style={{ paddingHorizontal: 18, paddingVertical: 10 }}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={(text) => {
              setOtp({...otp, 3: text})
              text ? fourthInput.current.focus() : secondInput.current.focus()
            }}
          />
        </CodeBox>

        <CodeBox>
          <CodeInput
            style={{ paddingHorizontal: 18, paddingVertical: 10 }}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={(text) => {
              setOtp({...otp, 4: text})
              !text && thirdInput.current.focus()
            }}
          />
        </CodeBox>
      </CodeContent>

      <TouchableOpacity onPress={() => {/* TODO */ }}>

        <CodeSubmit>
          <CodeSubmitText onPress={() => console.log(otp)}>Подтвердить</CodeSubmitText>
        </CodeSubmit>

      </TouchableOpacity>

    </CodeContainer>
  );
};

export default Code;

const CodeContainer = styled.View`
  border-radius: 20px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20%;
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
  border-width: 1px;
`;

const CodeInput = styled.TextInput`
  font-size: 30px;
  color: ${variables.COLORS.black};
  text-align: center;
`;

const CodeSubmit = styled.View`
  background-color: ${variables.COLORS.fifth};
  border-radius: ${variables.SIZES.radius};
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 55px;
`;

const CodeSubmitText = styled.Text`
  color: ${variables.COLORS.white};
  font-size: ${variables.SIZES.h4};
`;
