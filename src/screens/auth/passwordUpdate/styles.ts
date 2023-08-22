import {StyleSheet} from 'react-native';
import {RF, WP} from '../../../shared/theme/responsive';
import {COLORS} from '../../../shared/theme/colors';

export const styles = StyleSheet.create({
  updateView: {
    marginTop: RF(184),
    marginLeft: RF(126),

    height: RF(124),
    width: RF(124),
  },

  textView: {
    width: RF(330),
    alignItems: 'center',
    height: RF(86),
    marginLeft: RF(23),
    marginTop: RF(40),
  },
  textResetPassword: {
    fontFamily: 'Urbanist-Black',
    color: COLORS.BLACK,
    width: RF(210),
    height: RF(40),
    fontSize: RF(24),
    marginRight: RF(22),
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textshow: {
    color: COLORS.Grey,
    marginVertical: RF(12),
    height: RF(48),
    width: RF(330),
    fontSize: RF(16),
    alignItems: 'center',
  },
  textView1: {
    alignItems: 'flex-start',
    marginHorizontal: RF(20),
    width: RF(330),
    height: RF(35),
    marginTop: RF(30),
  },
  textInput: {
    color: COLORS.BLACK,
    borderBottomWidth: RF(1),
    width: RF(290),
    borderBottomColor: COLORS.Silver,
  },

  teststyles: {
    color: COLORS.WHITE,
    fontSize: RF(15),
    fontWeight: 'bold',
  },
  iconTextInput: {
    height: RF(20),
    width: RF(20),
    marginVertical: RF(10),
    marginTop: RF(15),
    marginStart: RF(10),
  },
  LoginNow: {
    backgroundColor: COLORS.Purple,
    margin: RF(10),
    paddingVertical: RF(12),
    borderRadius: RF(10),
    marginTop: RF(220),
    marginBottom: RF(22),
    alignItems: 'center',
  },
  eyeoff: {
    position: 'absolute',
    right: RF(3),
    height: RF(20),
    width: RF(18),
    marginVertical: RF(10),
    marginTop: RF(15),
    marginStart: RF(10),
  },
  eye: {
    position: 'absolute',
    right: RF(3),
    height: RF(20),
    width: RF(18),
    marginVertical: RF(10),
    marginTop: RF(15),
    marginStart: RF(10),
  },
  successIcon: {
    height: RF(72),
    width: RF(72),
  },
});
