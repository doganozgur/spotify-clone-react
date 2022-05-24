import Sidebar from 'components/Sidebar';
import Playbar from 'components/Playbar';
import Content from 'components/Content';

function App() {
  return (
    <div className='d-flex flex-col items-stretch justify-between min-h-screen'>
      <div className='container'>
        <Sidebar />
        <Content />
      </div>
      <Playbar />
    </div>
  );
}

export default App;
