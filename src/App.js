
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1 className="text-3xl font-bold underline text-blue-500">
//       Hello world!  
//     </h1>
  
//     </div>
//   );
// }

// export default App;
import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <Suspense fallback={<div className="text-center text-2xl font-bold text-gray-600">Loading...</div>}>
                <ProductList />
              </Suspense>
              <ShoppingCart />
            </div>
          </main>
          <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </div>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
