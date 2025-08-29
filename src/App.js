import { Footer, Header } from './components';
import './App.css';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
     <div className='bg-slate-100 dark:bg-black'>
       <Header />
       <AllRoutes/>
       <Footer />
     </div>
  );
}

export default App;

