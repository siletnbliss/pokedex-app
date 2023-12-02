import Icon from '@expo/vector-icons/MaterialIcons';
import React, { ReactNode } from 'react';
import { Text } from 'react-native';

import Container from './Container';
import Spinner from './Spinner';
import { COLORS } from '../utils/constants';

interface Props {
  isEmpty?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  children: ReactNode;
}

export default function UiFeedback({ isEmpty, isError, isLoading, children }: Props) {
  if (isLoading)
    return (
      <Container>
        <Spinner size={64} />
      </Container>
    );

  if (isError) {
    return (
      <Container>
        <Icon name="error" size={48} color={COLORS.error} />

        <Text>Sorry, something went wrong </Text>
      </Container>
    );
  }

  if (isEmpty)
    return (
      <Container>
        <Icon name="search-off" size={48} color={COLORS.lightgray} />
        <Text>No items found</Text>
      </Container>
    );

  return <>{children}</>;
}
