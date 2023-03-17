import React from "react";
import { useRoute } from "@react-navigation/native";
import * as variables from "./../../../constants";
import { IStackScreenProps } from "../../../navigation/StackScreen";
import { TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components/native";

const Details: React.FunctionComponent<IStackScreenProps> = props => {
  const { navigation } = props;
  const [fio, onChangeFio] = React.useState<any>("");
  const [email, onChangeEmail] = React.useState<any>("");
  const [town, onChangeTown] = React.useState<any>("");
  const [password, onChangePassword] = React.useState<any>("");
  const [passwordCheck, onChangePasswordCheck] = React.useState<any>("");

  const [fioError, setFioError] = React.useState<any>()
  const [emailError, setEmailError] = React.useState<any>()
  const [townError, setTownError] = React.useState<any>()
  const [passwordError, setPasswordError] = React.useState<any>()
  const [passwordCheckError, setPasswordCheckError] = React.useState<any>()
  const [disable, setDisable] = React.useState<boolean>(true)

  const route = useRoute();
  const { userNumber }: any = route.params;
  const number = 8 + String(userNumber);

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: "Регистрация" });
  }, [navigation]);

  const validate = () => {
    if (fio.length < 0) {
      setFioError('Полностью впишите своё ФИО')
    } else {
      setFioError('')
    }

    if (email.length < 0) {
      setEmailError('Полностью впишите свою почту')
    } else {
      setEmailError('')
    }

    if (password.length < 0) {
      setPasswordError('Полностью впишите свой пароль')
    } else if (password.length < 6) {
      setPasswordError('Пароль должен быть больше 6 символов')
    }  else {
      setPasswordError('')
    }

    if (passwordCheck.length < 0) {
      setPasswordCheckError('Полностью впишите свой пароль')
    } else if (passwordCheck.length < 6) {
      setPasswordCheckError('Пароль должен быть больше 6 символов')
    }  else {
      setPasswordCheckError('')
    }
  }

  return (
    <ScrollView>
      <DetailsView>
        <DetailsContent>
          <DetailsText>ФИО <DetailsImportant>*</DetailsImportant>
          </DetailsText>
          <DetailsInput
            onChangeText={onChangeFio}
            value={fio}
            maxLength={100}
          />

          <DetailsText>Электронный адрес</DetailsText>
          <DetailsInput
            onChangeText={onChangeEmail}
            value={email}
            maxLength={100}
          />

          <DetailsText>Город <DetailsImportant>*</DetailsImportant>
          </DetailsText>
          <DetailsInput
            onChangeText={onChangeTown}
            value={town}
          />

          <DetailsLogin>Номер телефона вместо логина</DetailsLogin>
          <DetailsNumber>{number}</DetailsNumber>

          <DetailsText>Новый пароль <DetailsImportant>*</DetailsImportant>
          </DetailsText>
          <DetailsInput
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry={true}
            maxLength={20}
          />

          <DetailsText>Повторите пароль <DetailsImportant>*</DetailsImportant>
          </DetailsText>
          <DetailsInput
            onChangeText={onChangePasswordCheck}
            value={passwordCheck}
            secureTextEntry={true}
            maxLength={20}
          />

          <TouchableOpacity onPress={() => {/* TODO */
          }}>

            <DetailsSubmit>
              <DetailsSubmitText onPress={() => ""}>Подтвердить</DetailsSubmitText>
            </DetailsSubmit>

          </TouchableOpacity>
        </DetailsContent>
      </DetailsView>
    </ScrollView>
  );
};

export default Details;

const DetailsView = styled.View`
  background-color: ${variables.COLORS.white};
  height: 850px;
`;

const DetailsText = styled.Text`
  font-size: ${variables.SIZES.h5};
  margin-left: 35px;
`;

const DetailsImportant = styled.Text`
  color: ${variables.COLORS.red};
`;

const DetailsContent = styled.SafeAreaView`
  margin-top: 20px;
  gap: 15px;
`;

const DetailsInput = styled.TextInput`
  height: 50px;
  width: 350px;
  font-size: ${variables.SIZES.h3};
  border-width: 1px;
  background-color: ${(variables.COLORS.milky)};
  border-color: ${variables.COLORS.milky};
  border-radius: 6px;
  margin-left: auto;
  margin-right: auto;
`;

const DetailsLogin = styled.Text`
  font-size: ${variables.SIZES.h4};
  margin-top: 40px;
  margin-left: 30px;
`;

const DetailsNumber = styled.Text`
  position: relative;
  bottom: 10px;
  font-size: ${variables.SIZES.h1};
  color: ${variables.COLORS.black};
  font-weight: ${variables.SIZES.bold};
  margin-left: 30px;
`;

const DetailsSubmit = styled.View`
  background-color: ${variables.COLORS.fifth};
  border-radius: ${variables.SIZES.radius};
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 55px;
`;

const DetailsSubmitText = styled.Text`
  color: ${variables.COLORS.white};
  font-size: ${variables.SIZES.h4};
`;
