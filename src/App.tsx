import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Global } from '@emotion/react';
import { MainPage, VotePage, SubmitPage } from './pages';
import { queryClient } from './lib/react-query';
import { globalStyles } from './styles/global';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/vote" element={<VotePage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
