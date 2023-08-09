import React from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {eyeoffIcon} from '../../../../assets/icons';
import {styles} from '../../../auth/login/styles';
import {COLORS} from '../../theme/colors';
import {RF} from '../../theme/responsive';

interface Props extends TextInputProps {
  containerStyle: ViewStyle;
  isPassword: boolean;
  leftIcon?: any;
}
const CustomInput = (props: Partial<Props>) => {
  const {
    placeholder,
    containerStyle,
    value,
    textContentType,
    isPassword,
    leftIcon,
    secureTextEntry,
    onChangeText,
  } = props;

  return (
    <>
      <View style={[styles.borderStyle, containerStyle]}>
        <FastImage source={leftIcon} style={styles.inputIcon} />
        <TextInput
          value={value}
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={COLORS.Grey}
          textContentType={textContentType}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
        />
        {isPassword ? (
          <TouchableOpacity style={{marginHorizontal: RF(-30)}}>
            <FastImage source={eyeoffIcon} style={styles.eyeoff} />
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};
export default CustomInput;
