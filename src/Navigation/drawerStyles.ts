import {StyleSheet} from 'react-native';
import {RF, WP} from '../shared/theme/responsive';
import {COLORS} from '../shared/theme/colors';
import {FONTS} from '../shared/theme/fonts';

export const styles = StyleSheet.create({
  crossIcon: {
    height: RF(24),
    width: RF(24),
  },

  textView: {
    marginTop: RF(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: RF(16),
    alignItems: 'center',
  },
  text: {
    color: COLORS.WHITE,
    fontSize: RF(30),
    fontFamily: FONTS.BOLD,
  },
  text1: {
    color: COLORS.WHITE,
    fontSize: RF(28),
    fontFamily: FONTS.BOLD,
    marginTop: RF(30),
    marginStart: RF(15),
  },
  text2: {
    color: COLORS.Silver,
    marginStart: RF(18),
    marginTop: RF(8),
    fontSize: RF(15),
  },
  touchableOpacity: {
    flexDirection: 'row',
    marginTop: RF(20),
    marginLeft: RF(16),

    alignItems: 'center',
    justifyContent: 'space-between',
  },
  touchableOpacityView: {
    borderRadius: RF(40),
    height: RF(40),
    width: RF(40),
    backgroundColor: COLORS.Soft_Silver,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacityText: {
    fontFamily: FONTS.BOLD,
    fontSize: RF(16),
    marginTop: RF(10),
    height: RF(18),
    width: RF(132),
    textAlign: 'center',
  },
  touchableOpacityImage: {
    width: RF(20),
    height: RF(20),
  },
});
export default styles;
