import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Navigation from './src/navigation/Navigation';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
