import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Alert from './components/Alert';


function App() {
  return (
    <div className="App">
      <Alert text= "Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại."/>
    </div>
  );
}

export default App;
