import Products from './pages/Products'
import Content from './containers/Content'
import classnames from 'classnames'
import WrapModal from './components/Modal'

function App() {
  return (
    <div className={classnames("App")}>
      <main>
        <Content>
          <Products/>
        </Content>
      </main>
      <WrapModal/>
    </div>
  );
}

export default App;
