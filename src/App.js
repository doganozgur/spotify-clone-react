import Sidebar from 'components/Sidebar';
import Playbar from 'components/Playbar';
import Content from 'components/Content';

function App() {
  return (
    <div className='min-h-screen'>
      <div className='wrapper'>
        <Sidebar />
        <Content />
      </div>
      <Playbar />
    </div>
  );
}

export default App;
