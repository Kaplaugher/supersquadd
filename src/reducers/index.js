import { combineReducers } from 'redux';
import characters_json from '../data/characters.json';
import { ADD_CHARACTER } from '../actions';
import heroes from './heroes_reducer';
import characters from './characters_reducer';

const rootReducer = combineReducers({
  characters,
  heroes
})

export default rootReducer;