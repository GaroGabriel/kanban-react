import {AddTaskPopup, ColumnS, PopUpBackground, Testing} from "./components";
import './App.scss'
import {Provider} from "react-redux";
import {store} from "./redux/store";


function App() {
    return (
        <div className="App container">
            <Provider store={store}>
                <ColumnS/>
                {/*<Testing/>*/}
                <AddTaskPopup/>
            </Provider>
        </div>
    );
}

export default App;
