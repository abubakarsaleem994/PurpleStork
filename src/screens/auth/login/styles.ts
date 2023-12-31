import {StyleSheet} from 'react-native';
import {RF, WP} from '../../../shared/theme/responsive';
import {COLORS} from '../../../shared/theme/colors';
import {FONTS} from '../../../shared/theme/fonts';

export const styles = StyleSheet.create({
  image: {
    height: RF(275),
    width: '100%',
  },
  textView: {
    alignItems: 'flex-start',
    marginHorizontal: RF(22),
    marginTop: RF(51),
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
    marginLeft: RF(12),
  },
  contentContainer: {
    width: WP(90),
    marginBottom: RF(30),
    marginTop: RF(30),
    marginLeft: RF(12),
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
    marginTop: RF(50),
    borderRadius: RF(10),
  },
  eyeoff: {
    height: RF(22),
    width: RF(22),
  },
  forgetpassword: {
    alignItems: 'flex-end',
    fontSize: RF(14),
    fontStyle: 'normal',
    fontFamily: FONTS.Regular,
    marginTop: RF(30),
    marginRight: RF(23),
    alignSelf: 'flex-end',
  },

  textbtn: {
    color: COLORS.Purple,
    fontFamily: FONTS.BOLD,
    marginHorizontal: RF(30),
  },
  checkBox1: {color: COLORS.Purple, fontFamily: FONTS.BOLD},
  showTextView: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: RF(25),
    marginBottom: RF(64),
  },
  textColor: {color: COLORS.BLACK},
});
