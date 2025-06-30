import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { queryClient } from './lib/react-query';
import { DashboardPage, MainPage, NotFoundPage, VotePage } from './pages';
import global from "./styles/global";
import {Global} from "@emotion/react";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Global styles={global}/>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/vote" element={<VotePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>zw
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
