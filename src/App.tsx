import './App.css';

import { createContext, useMemo, useState } from "react"

import Header from "./components/header/Header"
import Home from "./components/home/Home";
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
            <Header cartSize={nbInBag} />
            <Home />
        </GlobalContext.Provider>
    );
}

export default App;
