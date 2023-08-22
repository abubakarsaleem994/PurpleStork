import React from 'react';
import {
  ButtonProps,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {chevronIcon} from '../../../assets/icons';
import {RF} from '../../theme/responsive';
import {styles} from './styles';

interface Props extends ButtonProps {
  containerStyle: ViewStyle;
  leftIcon?: any;
  textShow?: any;
  onPress?: () => void;
}
const CustomDrawer = (props: Partial<Props>) => {
  const {leftIcon, textShow, onPress} = props;

  return (
    <>
      <TouchableOpacity style={styles.touchableOpacity} onPress={onPress}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.touchableOpacityView}>
            <FastImage
              source={leftIcon}
              style={{width: RF(20), height: RF(20)}}
            />
          </View>
          <Text style={styles.touchableOpacityText}>{textShow}</Text>
        </View>
        <FastImage source={chevronIcon} style={styles.touchableOpacityImage} />
      </TouchableOpacity>
    </>
  );
};
export default CustomDrawer;
