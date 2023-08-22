import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {checkIcon} from '../../../assets/icons';
import styles from './style';

interface CustomCheckboxProps {
  isChecked: boolean;
  onPress: () => void;
  containerStyle?: ViewStyle;
}

const CustomCheckbox = ({
  isChecked,
  onPress,
  containerStyle,
}: CustomCheckboxProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.containerStyle,
        !isChecked
          ? styles.nonSelectedcheckBoxView
          : styles.selectedcheckBoxView,
        containerStyle,
      ]}>
      {isChecked && <FastImage source={checkIcon} style={styles.iconStyle} />}
    </Pressable>
  );
};

export default CustomCheckbox;
