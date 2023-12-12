import { useFormik } from 'formik';
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import * as Yup from 'yup';

import { CustomButton } from '../Button';

interface Form {
  user: string;
  password: string;
}

const initialValues: Form = {
  user: '',
  password: '',
};

const validationSchema = Yup.object<Form>().shape({
  user: Yup.string().required('Please enter your username'),
  password: Yup.string().required('Please enter  your password').min(5, 'Invalid password length'),
});
// TODO: run this and see how it looks
export default function LoginForm() {
  const formik = useFormik<Form>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log({ values });
    },
    validateOnBlur: true,
    validateOnChange: false,
  });
  const handleSubmit = () => {
    formik.handleSubmit();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.user}
        onChangeText={formik.handleChange('user')}
        onBlur={formik.handleBlur('user')}
      />
      <Text style={styles.error}> {formik.errors.user}</Text>
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
      />
      <Text style={styles.error}> {formik.errors.password}</Text>

      <CustomButton onPress={handleSubmit} style={{ marginTop: 15 }} title="Sign In" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    //margin: 12,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    color: 'red',
    textAlign: 'left',
    marginBottom: 10,
  },
});
