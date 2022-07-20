import MultiSelect from './components/MultiSelect';
import SingleSelect from './components/SingleSelect';

function App() {
  return (
    <div className="w-4/5 mx-auto my-10">
      <h2>Choise tasty</h2>
      <SingleSelect />
      <MultiSelect />
    </div>
  );
}

export default App;
