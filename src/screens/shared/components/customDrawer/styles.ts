import {StyleSheet} from 'react-native';
import {RF, WP} from '../../../../screens/shared/theme/responsive';
import {COLORS} from '../../../../screens/shared/theme/colors';
import {FONTS} from '../../../../screens/shared/theme/fonts';

export const styles = StyleSheet.create({
  touchableOpacity: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 16,

    alignItems: 'center',
    justifyContent: 'space-between',
  },
  touchableOpacityView: {
    borderRadius: 40,
    height: 40,
    width: 40,
    backgroundColor: COLORS.Soft_Silver,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacityText: {
    fontFamily: FONTS.BOLD,
    fontSize: 16,
    marginTop: 10,
    marginLeft: 20,
    color: COLORS.BLACK,
  },
  touchableOpacityImage: {
    width: RF(20),
    height: RF(20),
  },
});
