import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import { createContext, useMemo, useState } from "react"

import Home from "./components/home/Home";
import New from "./components/New"
import Men from "./components/Men"
import Women from "./components/Women"
import Kids from "./components/Kids"
import Customize from "./components/Customize"
import Account from "./components/Account"
import Bag from './components/Bag';
import FakeAPI, { Model } from './FakeApi';
import { Direction } from './components/home/Shoes';

export type ContextType = {
    changeCurrentModel: (dir: Direction) => void;
    addedToBag: (bool: boolean) => void;
    model: Model | undefined;
}

export const GlobalContext = createContext<ContextType>({
    changeCurrentModel: (_: Direction) => {},
    addedToBag: (_: boolean) => {},
    model: undefined,
});

const fakeApi = new FakeAPI();


function App() {
    const [index, setIndex] = useState(0);
    const [model, setModel] = useState(fakeApi.getModel(0));
    const [nbInBag, setNbIsBag] = useState(0);

    const globalContext: ContextType  = useMemo(
        () => ({
            changeCurrentModel: (dir: Direction) => {
                const nbShoes: number = fakeApi.getNbModels();
                const value: number = (index + dir) % nbShoes;
                let newIndex: number = value;

                if (value < 0) {
                    newIndex += nbShoes;
                }
                setIndex(newIndex);
                setModel(fakeApi.getModel(newIndex));
            },
            addedToBag: (bool: boolean) => {
                fakeApi.addedToBag(index, bool);
                if (bool) {
                    setNbIsBag(nbInBag + 1);
                } else {
                    setNbIsBag(nbInBag - 1);
                }
            },
            model: model,
        }),
        [index, model, nbInBag]
    );

    return (
        <GlobalContext.Provider value={globalContext}>
            <BrowserRouter>
                {/* <Header cartSize={nbInBag} /> */}
                <Switch>
                    <Route path={"/"} exact component={Home} />
                    <Route path={"/new"} exact component={New} />
                    <Route path={"/men"} exact component={Men} />
                    <Route path={"/women"} exact component={Women} />
                    <Route path={"/kids"} exact component={Kids} />
                    <Route path={"/customize"} exact component={Customize} />
                    <Route path={"/account"} exact component={Account} />
                    <Route path={"/bag"} exact component={Bag} />
                    <Route path={"*"} component={() => <div>error</div>} /> {/*404 component*/}
                </Switch>
            </BrowserRouter>
        </GlobalContext.Provider>
    );
}

export default App;
