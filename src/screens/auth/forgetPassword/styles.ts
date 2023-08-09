import {StyleSheet} from 'react-native';
import {RF, WP} from '../../shared/theme/responsive';
import {COLORS} from '../../shared/theme/colors';
import {FONTS} from '../../shared/theme/fonts';

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
    width: WP(90),
    marginBottom: RF(30),
    marginTop: RF(35),
    marginStart: RF(23),
    alignSelf: 'center',
  },
  teststyles: {
    color: COLORS.WHITE,
    fontSize: RF(15),
  },
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
  //  signInBtn: {
  //   backgroundColor: COLORS.Purple,
  //   margin: RF(10),
  //   gap: RF(10),
  //   width: RF(330),
  //   height: RF(48),
  //   paddingTop: RF(10),
  //   paddingBottom: RF(10),
  //   paddingHorizontal: RF(28),
  //   paddingVertical: RF(28),
  //   borderRadius: RF(8),
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexShrink: RF(0),
  //   display: 'flex',
  // },

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
});
