import * as React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import type { SignupValues, LoginValues, AuthFormProps } from '~/features/usr_auth/types/auth';
import { SignupSchema, LoginSchema } from '../../../validations/formValidationSchema';
import { signupUser, loginUser } from '../../../redux/actions/authActions/Auth-actionCreators';
import type { FormikHelpers } from 'formik';
import type { AppDispatch } from '../../../redux/store';

export default function AuthForm({ mode }: AuthFormProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleSignup = async (
    values: SignupValues,
    { setSubmitting }: FormikHelpers<SignupValues>
  ) => {
    await dispatch(signupUser(values));
    setSubmitting(false);
  };

  const handleLogin = async (
    values: LoginValues,
    { setSubmitting }: FormikHelpers<LoginValues>
  ) => {
    await dispatch(loginUser(values));
    setSubmitting(false);
  };

  if (mode === 'signup') {
    return (
      <Formik<SignupValues>
        initialValues={{
          fullName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          receiveUpdates: false
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSignup}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form noValidate>
            {/* Full name */}
            <Box mb={2}>
              <Field name="fullName">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Full Name"
                    error={touched.fullName && Boolean(errors.fullName)}
                    helperText={<ErrorMessage name="fullName" />}
                  />
                )}
              </Field>
            </Box>

            {/* Email */}
            <Box mb={2}>
              <Field name="email">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Email"
                    error={touched.email && Boolean(errors.email)}
                    helperText={<ErrorMessage name="email" />}
                  />
                )}
              </Field>
            </Box>

            {/* Password */}
            <Box mb={2}>
              <Field name="password">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="password"
                    label="Password"
                    error={touched.password && Boolean(errors.password)}
                    helperText={<ErrorMessage name="password" />}
                  />
                )}
              </Field>
            </Box>

            {/* Phone */}
            <Box mb={2}>
              <Field name="phone">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Phone Number"
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={<ErrorMessage name="phone" />}
                  />
                )}
              </Field>
            </Box>

            {/* Confirm Password */}
            <Box mb={2}>
              <Field name="confirmPassword" type="password">
                {({ field }: any) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Confirm Password"
                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                    helperText={<ErrorMessage name="confirmPassword" />}
                  />
                )}
              </Field>
            </Box>

            {/* Updates */}
            <Box mb={3}>
              <Field name="receiveUpdates" type="checkbox">
                {({ field }: any) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        checked={field.value}
                      />
                    }
                    label="I want to receive updates via email."
                  />
                )}
              </Field>
            </Box>

            {/* Submit */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isSubmitting}
              sx={{ mb: 2 }}
            >
              Sign up
            </Button>

            <Divider>
              <Typography color="text.secondary">or</Typography>
            </Divider>

            {/* Switch to login */}
            <Box mt={2} textAlign="center">
              <Typography>
                Already have an account?{' '}
                <Link component={RouterLink} to="/login">
                  Sign in
                </Link>
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    );
  }

  // login mode
  return (
    <Formik<LoginValues>
      initialValues={{ 
          email: '', 
          password: '', 
          rememberMe: false 
        }}
      validationSchema={LoginSchema}
      onSubmit={handleLogin}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form noValidate>
          {/* Email */}
          <Box mb={2}>
            <Field name="email">
              {({ field }: any) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Email"
                  error={touched.email && Boolean(errors.email)}
                  helperText={<ErrorMessage name="email" />}
                />
              )}
            </Field>
          </Box>

          {/* Password */}
          <Box mb={2}>
            <Field name="password" type="password">
              {({ field }: any) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Password"
                  error={touched.password && Boolean(errors.password)}
                  helperText={<ErrorMessage name="password" />}
                />
              )}
            </Field>
          </Box>

          {/* Remember me */}
          <Box mb={3}>
            <Field name="rememberMe" type="checkbox">
              {({ field }: any) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      checked={field.value}
                    />
                  }
                label="Remember me"
              />
              )}
            </Field>
          </Box>

          {/* Submit */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
            sx={{ mb: 2 }}
          >
            Sign in
          </Button>

          {/* Forgot & switch to signup */}
          <Link component={RouterLink} to="/reset-password" variant="body2" sx={{ mb: 2, display: 'block' }}>
            Forgot your password?
          </Link>
          <Divider>
            <Typography color="text.secondary">or</Typography>
          </Divider>
          <Box mt={2} textAlign="center">
            <Typography>
              Don't have an account?{' '}
              <Link component={RouterLink} to="/signup">
                Sign up
              </Link>
            </Typography>
          </Box>
        </Form>
      )}
    </Formik>
  );
}