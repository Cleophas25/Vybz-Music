import { Route, Routes } from 'react-router-dom';
import { Trending, Discover, Search, TopCharts } from './pages';
import AddSong from './pages/AddSong';
import Layout from './components/Layout';
import AdminDashboard from './components/AdminDashboard';
import { Toaster } from 'react-hot-toast';
 
const App = () => {
  
  return (
    <div>
      <div>
        <Toaster position='top-center' />
      </div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Discover />} />
          <Route path='/top-charts' element={<TopCharts />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/search/:searchTerm' element={<Search />} />
        </Route>
        <Route path='/admin' element={<AdminDashboard />}>
          <Route index element={<AddSong />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
