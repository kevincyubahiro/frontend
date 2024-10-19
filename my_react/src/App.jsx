import'./app.css'
import Counter from './Count.jsx';
import Footer from './component.jsx';
import Props from './props';
import ColorPicker from './ColorPicker';
function App(){
  return(
  <>
 <Footer></Footer>
 <Counter></Counter>
 <ColorPicker></ColorPicker>
 <Props Name="Eric" Village="Cyoma" Sex="Male"></Props>
  </>
 
  );
}
export default App;