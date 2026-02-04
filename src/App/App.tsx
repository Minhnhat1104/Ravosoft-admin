import React, { ErrorInfo, Suspense } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import LoadingCircular from '~/components/LoadingCircular';
import ToastContext from '~/contexts/ToastContext';
import publicRoutes from '~/routes';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ThemeCustomization from '~/themes';

import { CssBaseline, Stack, useTheme } from '@mui/material';

import './App.css';

import { ErrorBoundary } from 'react-error-boundary';


// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60000,
    },
  },
});

function App() {
  const router = createBrowserRouter(publicRoutes);
  const theme = useTheme();

  return (
    <Suspense fallback={<LoadingCircular fullHeight />}>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: 'red' }}>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Retry</button>
          </div>
        )}
        onReset={(details) => {
          // Reset the state of your app so the error doesn't happen again
        }}
        onError={(error: Error, info: ErrorInfo) => {
          console.log('🚀 ~ App ~ info:', info);
          console.log('🚀 ~ App ~ error:', error);
        }}
      >
        <RecoilRoot>
          <ThemeCustomization>
            <Stack sx={{ width: 1, height: '100vh', background: theme.palette.grey[100], overflowY: 'auto' }}>
              <CssBaseline />
              <ToastContext>
                <QueryClientProvider client={queryClient}>
                  <RouterProvider router={router} />
                  <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
              </ToastContext>
            </Stack>
          </ThemeCustomization>
        </RecoilRoot>
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
