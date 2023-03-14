import React from 'react';
import {
    ColonElement,
    LeftScoreElement,
    RightScoreElement,
    ScoreWrapper,
    WinWrapper,
} from './Score.style';

interface IScoreProps {
    score: number[];
    winner: string | null;
}

export const Score: React.FC<IScoreProps> = (props) => {

    return (
        <ScoreWrapper>
            <LeftScoreElement>
                {props.score[0]}
                {props.winner === 'left' ? <WinWrapper> Win!</WinWrapper> : null}
            </LeftScoreElement>
            <ColonElement>
                :
            </ColonElement>
            <RightScoreElement>
                {props.score[1]}
                {props.winner === 'right' ? <WinWrapper> Win!</WinWrapper> : null}
            </RightScoreElement>
        </ScoreWrapper>
    );
};

export default Score;
