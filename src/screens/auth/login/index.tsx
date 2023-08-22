import React, {useState} from 'react';
import {Pressable, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {emailIcon, lockIcon} from '../../../assets/icons';
import {signIn} from '../../../assets/images';
import CustomInput from '../../../shared/components/customInput';
import {COLORS} from '../../../shared/theme/colors';
import {RF} from '../../../shared/theme/responsive';
import {styles} from './styles';
import {setAuth} from '../../../shared/redux/authSlice';
import Toast from 'react-native-toast-message';
import {SafeAreaView} from 'react-native-safe-area-context';
const Login = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (email === 'abubakar' && password === '12345') {
      dispatch(
        setAuth({
          user: {
            email: email,
            password: password,
            role: 'Customer',
          },
          isLoggedIn: true,
        }),
      );
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Logged In Successfully',
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Incorrect Credentails',
      });
    }
  };
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <FastImage
            source={signIn}
            resizeMode={FastImage.resizeMode.stretch}
            style={styles.image}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.textSignUp}>Welcome Back!</Text>
          <Text style={{color: COLORS.Grey, marginVertical: 12}}>
            Sign In to your account
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <CustomInput
            placeholder="Enter Email"
            leftIcon={emailIcon}
            textContentType="emailAddress"
            value={email}
            onChangeText={value => {
              setEmail(value);
            }}
          />
          <CustomInput
            placeholder="Enter Password"
            leftIcon={lockIcon}
            isPassword
            value={password}
            textContentType="password"
            onChangeText={value => {
              setPassword(value);
            }}
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.forgetpassword}
            onPress={() => navigation.navigate('ForgetP')}>
            <Text style={{color: COLORS.Purple}}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <Pressable
          style={styles.signInBtn}
          onPress={() => {
            handleLogin();
          }}>
          <Text style={styles.teststyles}>Sign In</Text>
        </Pressable>

        <View
          style={styles.showTextView}>
          <Text style={styles.textColor}>have an account?</Text>
          <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: COLORS.Purple}}>Sign Up</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>
      <Pressable onPress={()=>navigation.navigate('')}>
         
      </Pressable>
    </SafeAreaView>
     
  );
};
export default Login;
