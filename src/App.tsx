import PanelsProvider from "./app/providers/PanelsProvider";
import MainPage from "./pages/ui/MainPage";
import Panel from "./shared/ui/Panel";
import Text from "./shared/ui/Text";

function App() {
    return (
        <PanelsProvider>
        <MainPage/>
        </PanelsProvider>                                       
    );
}

export default App;
