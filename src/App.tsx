import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';
import { Layout } from './layout';
import { MainPage, VotePage, SubmitPage, DashboardPage, NotFoundPage } from './pages';
import { queryClient } from './lib/react-query';
import { globalStyles } from './styles/global';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="vote" element={<VotePage />} />
            <Route path="submit" element={<SubmitPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
