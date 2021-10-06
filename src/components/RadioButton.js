import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../assets/colors';

export const RadioButtonView = styled.TouchableHighlight`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  padding-top: 10px;
`;

export const TextIcon = styled.Text`
  font-size: 24px;
  color: ${COLORS.primaryDark};
`;

const RadioButton = ({label, selected, onClick}, onPress) => {
  //console.log(label);
  return (
    <RadioButtonView onPress={() => onClick(label)}>
      {selected ? (
        <Icon
          name="radio-button-on-outline"
          size={25}
          color={COLORS.primaryDark}>
          <TextIcon>{label}</TextIcon>
        </Icon>
      ) : (
        <Icon
          name="radio-button-off-outline"
          size={25}
          color={COLORS.primaryDark}>
          <TextIcon>{label}</TextIcon>
        </Icon>
      )}
    </RadioButtonView>
  );
};
export default RadioButton;
