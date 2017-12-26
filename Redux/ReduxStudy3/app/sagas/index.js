import sagas from './sagas'
import sagas1 from './sagas1'
import {fork} from 'redux-saga/effects'

const allSagas = function* () {
    yield fork(sagas)
    yield fork(sagas1)
}

export default allSagas