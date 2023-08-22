import {StyleSheet} from 'react-native';
import {RF, WP} from '../../../shared/theme/responsive';
import {COLORS} from '../../../shared/theme/colors';
import {FONTS} from '../../../shared/theme/fonts';

export const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: RF(20),
    marginHorizontal: RF(20),
    width: WP(55),
    justifyContent: 'space-between',
  },
  image: {width: RF(75), height: RF(40)},

  arrowContainer: {
    height: RF(24),
    width: RF(24),
  },
  arrow: {
    height: RF(24),
    width: RF(24),
  },
  textView: {
    marginTop: RF(32),
    marginHorizontal: RF(20),
  },
  showText: {
    color: COLORS.BLACK,
    fontSize: RF(24),
    fontFamily: FONTS.BOLD,
  },
  calendarView: {
    borderRadius: RF(8),
    height: RF(26),
    marginTop: RF(12),
    flexDirection: 'row',
    width: RF(123),
    backgroundColor: 'rgba(134,16,139,0.1)',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  calendarImage: {width: RF(16), height: RF(16)},

  showDate: {
    fontSize: RF(12),
    color: COLORS.BLACK,
    marginRight: RF(16),
  },
  scrollView: {marginTop: RF(30)},
  showTextParagraph: {color: COLORS.Grey, fontSize: RF(14)},
});
