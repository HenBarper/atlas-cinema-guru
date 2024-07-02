// BASE IMPORTS -----------------
import { useState } from 'react';
import './App.css';

// COMPONENT IMPORTS --------------------------------------
import Input from './components/general/Input'
import SelectInput from './components/general/SelectInput';
import Button from './components/general/Button';
import SearchBar from './components/general/SearchBar';

// ICON IMPORTS ------------------------------------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

// ICONS ---------------------------------------------------------
const userIcon = <FontAwesomeIcon icon={faUser} className='icon'/>
const keyIcon = <FontAwesomeIcon icon={faKey} className='icon'/>
const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>

const selectOptions = [
  { name: 'opOne', id: '1' },
  { name: 'opTwo', id: '2' },
  { name: 'opThree', id:'3' }
]

function App() {
  const [userName, setUserName] = useState('');
  const [optionSelect, setOptionSelect] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  return (
    <div className='App'>
      <Input label='Username:' type='text' className='input' value={userName} setValue={setUserName} icon={userIcon} />
      <SelectInput label='Sort:' options={selectOptions} className='selectInput' value={optionSelect} setValue={setOptionSelect}/>
      <Button label='signUp' className='button' onClick={() => {}} icon={keyIcon} /><br></br>
      <SearchBar title={searchTitle} setTitle={setSearchTitle} icon={searchIcon}/>
    </div>
  );
}

export default App;
