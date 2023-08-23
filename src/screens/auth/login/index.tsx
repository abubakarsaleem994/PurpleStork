import React, {useState} from 'react';
import {
  Button,
  Pressable,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {emailIcon, lockIcon} from '../../../assets/icons';
import {signIn} from '../../../assets/images';
import {Formik} from 'formik';
import CustomInput from '../../../shared/components/customInput';
import {COLORS} from '../../../shared/theme/colors';
import {RF} from '../../../shared/theme/responsive';
import {styles} from './styles';
import {setAuth} from '../../../shared/redux/authSlice';
import Toast from 'react-native-toast-message';
import {SafeAreaView} from 'react-native-safe-area-context';
import {round} from 'react-native-reanimated';
import {LoginScreenSchema} from '../../../shared/validations';

interface initialValuesProps {
  email: string;
  password: string;
}

const initialValues: initialValuesProps = {
  email: '',
  password: '',
};

const Login = ({navigation}: any) => {
  const dispatch = useDispatch();

  const handleLogin = (values: initialValuesProps, actions: any) => {
    console.log('Values', values.email, values.password);
    if (
      values.email === 'abubakar87@gmail.com' &&
      values.password === 'Abu123@2'
    ) {
      dispatch(
        setAuth({
          user: {
            email: values.email,
            password: values.password,
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

    actions.setSubmitting(true);
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnMount={true}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        handleLogin(values, actions);
      }}
      validationSchema={LoginScreenSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
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
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={styles.errors}>{errors.email}</Text>
              )}
              <CustomInput
                placeholder="Enter Password"
                leftIcon={lockIcon}
                isPassword
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                textContentType="password"
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={styles.errors}>{errors.password}</Text>
              )}
              <TouchableOpacity
                style={styles.forgetpassword}
                onPress={() => navigation.navigate('ForgetP')}>
                <Text style={{color: COLORS.Purple}}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <Pressable
              style={styles.signInBtn}
              onPress={() => {
                handleSubmit();
              }}>
              <Text style={styles.teststyles}>Sign In</Text>
            </Pressable>

            <View style={styles.showTextView}>
              <Text style={styles.textColor}>have an account?</Text>

              <Pressable onPress={() => navigation.navigate('SignUp')}>
                <Text style={{color: COLORS.Purple}}>Sign Up</Text>
              </Pressable>
            </View>
          </KeyboardAwareScrollView>
          <Pressable onPress={() => navigation.navigate('')}></Pressable>
        </SafeAreaView>
      )}
    </Formik>
  );
};
export default Login;
