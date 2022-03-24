import './App.scss'
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Body from "./Body";


function App() {
    return (
        <div className="App container">
            <Provider store={store}>
                <Body/>
            </Provider>
        </div>
    );
}

export default App;
