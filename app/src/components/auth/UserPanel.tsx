import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { AuthenticateUserResponse } from '../../types/auth';
import { COLORS } from '../../utils/constants';
import { CustomButton } from '../Button';

interface Props {
  user: AuthenticateUserResponse['user'];
  onLogout: () => void;
}
// TODO: maybe style this better
export default function UserPanel({ user, onLogout }: Props) {
  const menuItems: ItemProps[] = [
    {
      title: 'Name',
      text: user.name,
    },
    { title: 'Username', text: user.username },
    { title: 'Email', text: user.email },
    { title: 'Pokémon Favourited', text: '((TBD)) Pokémon' },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome back, </Text>
        <Text style={styles.title}> {user.name}!</Text>
      </View>
      <View style={styles.dataContainer}>
        {menuItems.map((item, i) => (
          <MenuItem {...item} key={i} />
        ))}
      </View>
      <CustomButton title="Sign Out" onPress={onLogout} style={styles.logout} />
    </View>
  );
}

interface ItemProps {
  title: string;
  text: string;
}
function MenuItem({ title, text }: ItemProps) {
  return (
    <View style={styles.menuItem}>
      <Text style={styles.itemTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
  },
  itemTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
  logout: {
    marginTop: 60,
    backgroundColor: COLORS.textGray,
  },
});
