import App from './App';
import {GlobalStateProvider} from './configs/UseGlobalState';

const WrappedApp = (props) => {
    return (
        <GlobalStateProvider>
            <App />
        </GlobalStateProvider>
    );
}
export default WrappedApp;