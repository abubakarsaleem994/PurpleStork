import {StyleSheet} from 'react-native';
import {RF, WP} from '../../../shared/theme/responsive';
import {COLORS} from '../../../shared/theme/colors';
import {FONTS} from '../../../shared/theme/fonts';

export const styles = StyleSheet.create({
  arrow: {
    height: RF(24),
    width: RF(24),
    marginStart: 20,
    marginTop: RF(60),
  },
  textView: {
    alignItems: 'flex-start',
    marginHorizontal: RF(22),
    marginTop: RF(16),
    marginStart: RF(23),
  },
  textSignUp: {color: COLORS.BLACK, fontFamily: FONTS.BOLD, fontSize: 24},
  textShow: {color: COLORS.Grey, marginVertical: RF(8)},
  textInput: {
    color: COLORS.BLACK,
    borderBottomWidth: RF(1),
    width: '90%',
    marginHorizontal: RF(10),
    borderBottomColor: COLORS.Silver,
    fontFamily: FONTS.Regular,
    fontSize: RF(14),
  },
  contentContainer: {
    width: WP(100),
    marginBottom: RF(30),
    marginTop: RF(10),
    alignItems: 'center',
  },
  teststyles: {
    color: COLORS.WHITE,
    fontSize: RF(15),
  },
  borderStyle: {
    marginTop: RF(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    height: RF(20),
    width: RF(20),
  },
  signInBtn: {
    backgroundColor: COLORS.Purple,
    height: RF(48),
    width: WP('90%'),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RF(60),
    marginStart: RF(23),
    marginEnd: RF(22),
    borderRadius: RF(8),
  },
  showEmailText: {color: COLORS.Grey, marginVertical: 12},

  eyeoff: {
    height: RF(20),
    width: RF(18),
  },
  forgetpassword: {
    alignItems: 'flex-end',
    fontSize: RF(14),
    fontStyle: 'normal',
    fontFamily: FONTS.Regular,
    marginTop: RF(30),
  },

  textbtn: {
    color: COLORS.Purple,
    fontFamily: FONTS.BOLD,
    marginHorizontal: RF(30),
  },
  checkBox1: {color: COLORS.Purple, fontFamily: FONTS.BOLD},
  textColor: {color: COLORS.BLACK},
});
