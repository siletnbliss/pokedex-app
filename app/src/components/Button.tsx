import React from 'react';
import { Button, ButtonProps } from 'react-native';
interface Props extends ButtonProps {
  loading?: boolean;
}

// TODO: customize button
export const CustomButton = ({ loading, ...rest }: Props) => {
  return <Button {...rest} />;
};
