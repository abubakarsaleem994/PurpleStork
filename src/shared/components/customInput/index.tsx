import React, {useState} from 'react';
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {eyeIcon, eyeoffIcon} from '../../../assets/icons';

import {COLORS} from '../../theme/colors';
import {RF} from '../../theme/responsive';
import styles from './styles';

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
    onChangeText,
    secureTextEntry,
  } = props;
  const [isSecureEntry, setIsSecureEntry] = useState(secureTextEntry);

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
          secureTextEntry={isSecureEntry}
          onChangeText={onChangeText}
        />
        {isPassword ? (
          <TouchableOpacity
            onPress={() => {
              setIsSecureEntry(show => !show);
            }}
            style={{marginHorizontal: RF(-52)}}>
            <FastImage
              source={isSecureEntry ? eyeoffIcon : eyeIcon}
              style={styles.eyeoff}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};
export default CustomInput;
