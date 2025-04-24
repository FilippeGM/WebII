import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BetProvider, useBet } from './contexts/BetContext.tsx';
import { BetDisplay } from './components/BetDisplay.tsx';
import { Header } from './components/Header.tsx';
import { HistoryTable } from './components/HistoryTable';
import styled from 'styled-components';

const Main = styled.main`
      padding: 1em;
`;

const Container = styled.div`
      background-color: black;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80vh;
      gap: 2em;
`;

const Title = styled.h1`
      color: white;
`;

const Button = styled(Link)`
      background-color: blue;
      color: white;
      padding: 1em 2em;
      text-decoration: none;
      border-radius: 4px;
      font-size: 1.2em;

      &:hover {
            background-color: cyan;
      }
`;

export const App = () => {
      return (
            <Router>
                  <BetProvider>
                        <Header />
                        <Main>
                              <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/palpite" element={<BetPage />} />
                                    <Route path="/historico" element={<HistoryPage />} />
                              </Routes>
                        </Main>
                  </BetProvider>
            </Router>
      );
};


export const Home = () => {
      return (
            <Container>
                  <Title>Bem-Vindo!</Title>
                  <Button to="/palpite">Clique para começar</Button>
            </Container>
      );
};

export const BetPage = () => {
      const { currentBet, generateNewBet } = useBet();

      return <BetDisplay bet={currentBet} onNewBet={generateNewBet} />;
};

export const HistoryPage = () => {
      const { history } = useBet();

      return (
            <div>
                  <h2>Histórico de Palpites</h2>
                  {history.length > 0 ? (
                        <HistoryTable history={history} />
                  ) : (
                        <p>Nenhum palpite gerado ainda.</p>
                  )}
            </div>
      );
};