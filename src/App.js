
import './App.css';
import {useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import { defaultTheme } from './themes/defaultTheme';
import { Input } from './components/input';



function App() {
  let [bill, setBill] = useState(0);
  let [people, setPeople] = useState(0);
  let [tip, setTip] = useState(0);
  let [peopleError, setPeopleError] = useState('');

  let tipAmount = (bill * tip / people).toFixed(2);
  let totalPerPerson = (bill * (1 + tip) / people).toFixed(2);

  useEffect(() => {
    if(people === 0) {
      setPeopleError('People cant be zero (0)');
    } else {
      setPeopleError(``);
    }
  }, [people]);


  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
    <div className="App">
      Our Bill:
      <Input
        placeholder='0'
        type='number'
        value={bill}
        onChange={(e) => {
          setBill(e.target.value);
        }}
        //dir='rtl'
        />

      <div>
      <button onClick={() => {
        setTip(0.1)
      }}>
        10%
      </button>

      <button onClick={() => {
        setTip(0.2);
      }}>
        20%
      </button>

      <button onClick={() => {
        setTip(0.15)
      }}>
        15%
      </button>
      </div>
      People:
      <Input
        placeholder='0'
        type='number'
        value={people}
        onKeyDown={(e) => {
          if(e.key === '.') {
            e.preventDefault();
          }
        }}
        onChange={(e) => {
          setPeople(e.target.value);
          // e.target.value всегда является string
        }}
        >
      </Input>
      <div>{peopleError}</div>
      <div>Tip Amount/Person:{tipAmount === 'NaN' || tipAmount === 'Infinity' ? '0.00' : tipAmount}</div>
      <div>Total/Person:{totalPerPerson === 'Nan' || totalPerPerson === 'Infinity' ? '0.00' : totalPerPerson}</div>
    </div>
    </ThemeProvider>
  );
}

export default App;
