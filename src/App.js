import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
class App extends Component {
    componentWillMount(){
        const config = {
                apiKey: 'AIzaSyCfAZMhtxBtVtdr79Q0D8gJd2ema8rnmD4',
                authDomain: 'manager-d73b3.firebaseapp.com',
                databaseURL: 'https://manager-d73b3.firebaseio.com',
                projectId: 'manager-d73b3',
                storageBucket: 'manager-d73b3.appspot.com',
                messagingSenderId: '442149621639' 
        };
        firebase.initializeApp(config);
    }

    render() {

        return (
            <Provider store={store}>
                    <LoginForm />
            </Provider>
        );
    }
}
export default App; //changes commit 