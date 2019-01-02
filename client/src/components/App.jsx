import React from 'react';
import TopBar from './TopBar.jsx';
import TopPhoto from './TopPhoto.jsx';
import StickyContainer from './StickyContainer.jsx';
import style from '../css/App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <div className={style.appContainer}>
                    <TopBar />
                    <TopPhoto />
                    <StickyContainer />
                </div>
            </div>
        )
    }
}

export default App;