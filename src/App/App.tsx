import React, { ErrorInfo, Suspense } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import 'allotment/dist/style.css';

import { CssBaseline, Stack, useTheme } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import LoadingCircular from '~/components/LoadingCircular';
import ToastContext from '~/contexts/ToastContext';
import ErrorFallback from '~/pages/ErrorFallback';
import publicRoutes from '~/routes';
import ThemeCustomization from '~/themes';

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
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => <ErrorFallback code={500} message={error.message} />}
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
          <Suspense fallback={<LoadingCircular fullHeight sx={{ height: '100vh' }} />}>
            <Stack sx={{ width: '100vw', height: '100vh', overflowY: 'auto' }}>
              <CssBaseline />
              <ToastContext>
                <QueryClientProvider client={queryClient}>
                  <RouterProvider router={router} />
                  <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
              </ToastContext>
            </Stack>
          </Suspense>
        </ThemeCustomization>
      </RecoilRoot>
    </ErrorBoundary>
  );
}

export default App;
