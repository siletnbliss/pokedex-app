import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

import { AuthProvider } from './src/context/auth.context';
import Navigation from './src/navigation/Navigation';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </NavigationContainer>
      <Toast />
    </QueryClientProvider>
  );
}
