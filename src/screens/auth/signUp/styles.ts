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
    marginHorizontal: 10,
    borderBottomColor: COLORS.Silver,
    fontFamily: FONTS.Regular,
    fontSize: RF(14),
  },
  contentContainer: {
    width: WP(90),
    marginBottom: RF(30),
    marginTop: RF(30),
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
  signUpBtn: {
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
    height: RF(20),
    width: RF(18),
  },
  textbtn: {
    color: COLORS.Purple,
    fontFamily: FONTS.BOLD,
    marginHorizontal: RF(30),
  },
  checkedStyle: {
    borderWidth: RF(2),
    borderColor: COLORS.Purple,
  },
  unCheckedStyle: {
    borderWidth: RF(2),
    borderColor: COLORS.Grey,
  },
  showText: {color: COLORS.Grey, marginVertical: 12},
  checkBoxContainer: {
    flex: 9,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    height: '100%',
  },
  checkBoxText: {
    fontSize: RF(14),
    color: COLORS.Grey,
  },
  showSignUpText: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: RF(25),
    marginBottom: RF(64),
  },
  signInColor: {color: COLORS.Purple},
  showSignUpText1: {color: COLORS.Grey},
});
