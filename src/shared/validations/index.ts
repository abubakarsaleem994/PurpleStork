import * as Yup from 'yup';

const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const CheckEmailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email Required'),
});

const CheckOtpCodeSchema = Yup.object().shape({
  otpCode: Yup.string().required('Invalid OtpCode'),
});
const CheckForgetPasswordSchema = Yup.object().shape({
  ForgetPasswordSchema: Yup.string().required('Invalid Password'),
});
const CheckNewPasswordSchema = Yup.object().shape({
  newPassword: Yup.string().required('Enter your Password'),
  confirmNewPassword: Yup.string()
    .required('Enter Confirm Password')
    .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});

const LoginScreenSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email Required'),
  password: Yup.string()
    .required('Password Required')
    .min(8, 'Password too Short')
    .matches(
      passwordRegExp,
      'Password must contain at least One Upper Case Character, One Lower Case Character, One Special Character and One Number',
    ),
});

const UserSignUpSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name Required'),
  email: Yup.string().email('Invalid Email').required('Email Required'),
  phoneNumber: Yup.string()
    .required('Phone No. is Required')
    .min(10, 'Invalid Phone Number'),
  password: Yup.string()
    .required('Password Required')
    .min(8, 'Password too Short')
    .matches(
      passwordRegExp,
      'Password must contain at least One Upper Case Character, One Lower Case Character, One Special Character and One Number',
    ),
});

export {
  LoginScreenSchema,
  CheckEmailSchema,
  UserSignUpSchema,
  CheckOtpCodeSchema,
  CheckForgetPasswordSchema,
  CheckNewPasswordSchema,
};
