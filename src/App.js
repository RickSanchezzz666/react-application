import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Component1 from './components/component1';
import Component2 from './components/component2';
import Component3 from './components/component3';
import Component4 from './components/component4';
import Mercury from './components/component3/mercury';
import Venus from './components/component3/venus';
import Jupiter from './components/component3/jupiter';
import Saturn from './components/component3/saturn';
import Uranus from './components/component3/uranus';
import Neptune from './components/component3/neptune';
import Error from './components/error';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
      }, []);

    return(
        <div className='pages'>
            <div className='page-1'><Component1 /></div>
            <div className='page-2'><Component2 /></div>
            <div className='page-3'>
            <BrowserRouter>
                <Routes>
                    <Route path='/mercury' element={<Mercury />} />
                    <Route path='/venus' element={<Venus />} />
                    <Route path='/' element={<Component3 />} />
                    <Route path='/jupiter' element={<Jupiter />} />
                    <Route path='/saturn' element={<Saturn />} />
                    <Route path='/uranus' element={<Uranus />} />
                    <Route path='/neptune' element={<Neptune />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter></div>
            <div className='page-4'><Component4 /></div>
    </div>
    );
}

export default App;
