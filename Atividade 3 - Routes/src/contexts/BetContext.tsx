import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Bet = number[];

interface BetContextType {
    currentBet: Bet;
    history: Bet[];
    generateNewBet: () => void;
}

const BetContext = createContext<BetContextType | undefined>(undefined);

export const BetProvider = ({ children }: { children: ReactNode }) => {
    const [currentBet, setCurrentBet] = useState<Bet>([]);
    const [history, setHistory] = useState<Bet[]>([]);

    const generateNewBet = () => {
        const newBet: Bet = [];
        while (newBet.length < 6) {
            const num = Math.floor(Math.random() * 98) + 1;
            if (!newBet.includes(num)) {//Have to be unique
                newBet.push(num);
            }
        }
        setCurrentBet(newBet);
        setHistory(prev => [...prev, newBet]);//Add to History
    };

    useEffect(() => {
        generateNewBet();
    }, []);

    return (
        <BetContext.Provider value={{ currentBet, history, generateNewBet }}>
            {children}
        </BetContext.Provider>
    );
};

export const useBet = () => {
    const context = useContext(BetContext);
    if (context === undefined) {
        throw new Error('useBet só pode ser usado dentro de um BetProvider');
    }
    return context;
};