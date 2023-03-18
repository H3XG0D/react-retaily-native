import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import * as variables from "./../../../constants";
import { IStackScreenProps } from "../../../navigation/StackScreen";
import { TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components/native";

const Next: React.FunctionComponent<IStackScreenProps> = props => {
  const { navigation } = props;
  const route = useRoute();
  const { userNumber }: any = route.params;
  const number = 8 + String(userNumber);

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: "Регистрация" });
  }, [navigation]);

  return (
    <ScrollView>

    </ScrollView>
  );
};

export default Next;
