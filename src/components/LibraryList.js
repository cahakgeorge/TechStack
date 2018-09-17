import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component{
    componentWillMount(){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2 
        });

        //feed in the data source //initialize a datasource for the listview
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    //extract this to a component, which returns some JSX
    renderRow(library){//this row is automatically provided with an argument called Library which reps the particular row being called
        return <ListItem library={library} /> //no pass this library as a prop to list item
    }   

    render(){ //renderRow tells listview how to render a specific row
        return(
            <ListView
                dataSource={ this.dataSource }
                renderRow={ this.renderRow }
            />
        )
    }
}

const mapStatesToProps = state =>{
    return { libraries: state.libraries };
};
export default connect(mapStatesToProps)(LibraryList);