import styled from 'styled-components';

const BetContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    margin: 2em 0;
`;

const Numbers = styled.div`
  display: flex;
  gap: 0.5em;
`;

const Number = styled.span`
    background-color:rgb(0, 0, 0);
    color: white;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-weight: bold;
`;

const Button = styled.button`
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

interface BetDisplayProps {
    bet: number[];
    onNewBet: () => void;
}

export const BetDisplay = ({ bet, onNewBet }: BetDisplayProps) => {
    return (
        <BetContainer>
            <h2>Palpite para mega-sena:</h2>
            <Numbers>
                {bet.map((num, index) => (
                    <Number key={index}>{num}</Number>
                ))}
            </Numbers>
            <Button onClick={onNewBet}>Nova sugestão</Button>
        </BetContainer>
    );
};