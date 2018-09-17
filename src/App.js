import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList'


const App = () => {
    return(
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header headerText="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
};
//import Redux store(createStore)
//import Provider, which is a kind of bridge between the redux store and react native
//keep in mind that Redux wasn't made entirely for only ReactNative and has no definite bindings to React Native 
//the Provider makes data in the store available and usable by the app

export default App;