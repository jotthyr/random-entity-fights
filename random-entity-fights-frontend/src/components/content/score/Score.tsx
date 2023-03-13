import React from 'react';
import {
    ColonElement,
    LeftScoreElement,
    RightScoreElement,
    ScoreWrapper,
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
                {props.winner === 'left' ? 'Win!' : null}
            </LeftScoreElement>
            <ColonElement>
                :
            </ColonElement>
            <RightScoreElement>
                {props.score[1]}
                {props.winner === 'right' ? 'Win!' : null}
            </RightScoreElement>
        </ScoreWrapper>
    );
};

export default Score;
