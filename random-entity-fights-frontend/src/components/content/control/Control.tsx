import React from 'react';
import {
    ControlWrapper,
    FightButton,
    PeopleButton,
    SourceWrapper,
    StarshipsButton,
} from './Control.style';

interface IControlProps {
    onhandleSetSourcePeople: () => void;
    onhandleSetSourceStarships: () => void;
    onhandleRandomFight: () => void;
}

export const Control: React.FC<IControlProps> = (props) => {
    const handleSetSorucePeople = () => {
        props.onhandleSetSourcePeople();
    };

    const handleSetSourceStarships = () => {
        props.onhandleSetSourceStarships();
    };

    const handleRandomFight = () => {
        props.onhandleRandomFight();
    };

    return (
        <ControlWrapper>
            <FightButton
                data-testid='ClickIndicator'
                onClick={handleRandomFight}
            >
                RANDOM FIGHT
            </FightButton>
            <SourceWrapper>
                Choose Source:
                <PeopleButton onClick={handleSetSorucePeople}>
                    People
                </PeopleButton>
                <StarshipsButton onClick={handleSetSourceStarships}>
                    Starships
                </StarshipsButton>
            </SourceWrapper>
        </ControlWrapper>
    );
};

export default Control;
