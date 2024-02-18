import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className='d-flex'>
      <div className='w-auto'>
        <Sidebar />
      </div>
      <div className='col overflow-auto'>
          <Routes>
              <Route path='/' element={<Dashboard />}></Route>
              <Route path='/accountManagment' element={<AccountManagment />}></Route>
              <Route path='/nebVerificationModule' element={<NebVerificationModule />}></Route>
              <Route path='/ebtGenerationModule' element={<EbtGenerationModule />}></Route>
              <Route path='/announcement' element={<Announcement />}></Route>
              <Route path='/systemReport' element={<SystemReport />}></Route>
              <Route path='/trainingModule' element={<TrainingModule />}></Route>
          </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App