import React from 'react';

import { Cards, Chart } from './components';
import styles from './App.module.css';
import { fetchData } from './api/';

class App extends React.Component{
    state={
        data:{},
    }
    async componentDidMount() {
        const data =await fetchData();

        this.setState({data});
    }
    render(){
        const {data}=this.state;
        return(
            
            <div className={styles.container}>
                <h1>Made By Ashok</h1>
                <Cards data={data}/>
                <Chart/>
                
            </div>
        )
    }
}

export default App;