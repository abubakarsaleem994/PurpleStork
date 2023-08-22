import {StyleSheet} from 'react-native';
import {RF, WP} from '../../theme/responsive';
import {COLORS} from '../../theme/colors';
import {FONTS} from '../../theme/fonts';

const styles = StyleSheet.create({
  borderStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: RF(1),
    borderBlockColor: COLORS.Silver,
  },
  inputIcon: {
    height: RF(20),
    width: RF(20),
  },
  eyeoff: {
    height: RF(22),
    width: RF(22),
  },
  textInput: {
    color: COLORS.BLACK,
    borderBottomWidth: RF(1),
    width: '90%',
    marginHorizontal: RF(10),
    borderBottomColor: COLORS.Silver,
    fontFamily: FONTS.Regular,
    fontSize: RF(14),
  },
});

export default styles;
