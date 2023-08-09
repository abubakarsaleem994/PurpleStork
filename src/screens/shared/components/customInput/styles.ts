import {StyleSheet} from 'react-native';
import {RF, WP} from '../../../shared/theme/responsive';
import {COLORS} from '../../../shared/theme/colors';
import {FONTS} from '../../../shared/theme/fonts';

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
    height: RF(20),
    width: RF(18),
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
