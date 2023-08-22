import {StyleSheet} from 'react-native';
import {RF} from '../../theme/responsive';
import {COLORS} from '../../theme/colors';
import {FONTS} from '../../theme/fonts';

export const styles = StyleSheet.create({
  mainView: {
    height: RF(75),
    borderColor: COLORS.GreyScale,
    borderWidth: 2,
    borderRadius: RF(12),
    marginHorizontal: RF(16),
    marginTop: RF(10),
    flexDirection: 'row',
  },
  showdate: {
    fontSize: RF(10),
    marginTop: RF(4),
    fontFamily: FONTS.Regular,
    color: COLORS.Grey,
  },

  textView: {
    marginTop: RF(16),
    marginLeft: RF(8),

    flex: 1,
  },
  nameText: {
    fontSize: RF(14),
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
  },
  phoneText: {fontFamily: FONTS.Regular, color: COLORS.Grey, marginTop: RF(5)},
  checkboxContainer: {marginLeft: RF(16), marginTop: RF(10)},
});
