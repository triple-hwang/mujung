import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Global } from '@emotion/react';
import { Layout } from './layout';
import { queryClient } from './lib/react-query';
import { DashboardPage, MainPage, NotFoundPage, VotePage } from './pages';
import { globalStyles } from './styles/global';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/vote" element={<VotePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
