import React from 'react';
import EntityCard from './entityCard/EntityCard';
import {
    CardsWrapper,
} from './Cards.style';
import { IEntityDetailsDataMutation } from '../Content';
import { observer } from 'mobx-react-lite';

interface ICardsProps {
    fightData: IEntityDetailsDataMutation[];
    sourceType: string;
    starshipsCrew: {
        leftStarship: number,
        rightStarship: number,
    };
}

const Cards: React.FC<ICardsProps> = observer((props) => {

    return (
        <CardsWrapper>
            <EntityCard
                fightData={props.fightData[0]}
                sourceType={props.sourceType}
                starshipsCrew={props.starshipsCrew.leftStarship}
            />
            <EntityCard
                fightData={props.fightData[1]}
                sourceType={props.sourceType}
                starshipsCrew={props.starshipsCrew.rightStarship}
            />
        </CardsWrapper>
    );
});

export default Cards;
