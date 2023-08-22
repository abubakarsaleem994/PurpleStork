import {StyleSheet} from 'react-native';
import {RF} from '../../theme/responsive';
import {COLORS} from '../../theme/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  iconStyle: {width: RF(13), height: RF(11), marginBottom: RF(1)},
  containerStyle: {
    borderRadius: RF(2),
    width: RF(20),
    height: RF(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  nonSelectedcheckBoxView: {
    backgroundColor: COLORS.bgcolorCheckBox,
  },
  selectedcheckBoxView: {
    backgroundColor: COLORS.bgColorChecked,
  },
});

export default styles;
