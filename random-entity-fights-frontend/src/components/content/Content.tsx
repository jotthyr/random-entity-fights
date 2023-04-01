import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import ContentModel from './Content.state';
import Cards from './cards/Cards';
import {
    ContentWrapper,
} from './Content.style';
import Control from './control/Control';
import Score from './score/Score';
import { LOAD_PEOPLE, LOAD_STARSHIPS } from '../graphQL/Queries';
import CREATE_DATA_MUTATION from '../graphQL/Mutations';
import DATA_MUTATION from '../../../DATA_MUTATION.json';

export interface IEntityDetailsDataMutation {
    name: string;
    img: string;
    mass: number;
    starship: {
        name: string;
        starshipImg: string;
    }
}

interface IParticularEntityDataMutation {
    input: IEntityDetailsDataMutation;
}

const Content: React.FC = observer(() => {
    const [ContentState] = useState((): ContentModel => new ContentModel());

    const [createUser] = useMutation(CREATE_DATA_MUTATION);

    const entities = useQuery(ContentState.sourceType === 'people' ? LOAD_PEOPLE : LOAD_STARSHIPS);

    useEffect(() => {
        const dataMutationArray: IParticularEntityDataMutation[] = DATA_MUTATION;

        dataMutationArray.forEach((element) => {
            createUser({
                variables: {
                    input: {
                        name: element.input.name,
                        img: element.input.img,
                        mass: element.input.mass,
                        starship: {
                            name: element.input.starship.name,
                            starshipImg: element.input.starship.starshipImg,
                        },
                    },
                },
            });
        });
    }, []);

    const setDefaultViewParameters = () => {
        ContentState.fightData = [
            {
                name: '???',
                img: '???',
                mass: 0,
                starship: {
                    name: '???',
                    starshipImg: '???',
                },
            },
            {
                name: '???',
                img: '???',
                mass: 0,
                starship: {
                    name: '???',
                    starshipImg: '???',
                },
            },
        ];
        ContentState.score = [0, 0];
        ContentState.winner = null;
        ContentState.starshipsCrew = {
            leftStarship: 0,
            rightStarship: 0,
        };
    };

    const handleSetSourcePeople = () => {
        ContentState.sourceType = 'people';
        setDefaultViewParameters();
    };

    const handleSetSourceStarships = () => {
        ContentState.sourceType = 'starships';
        setDefaultViewParameters();
    };

    const handleRandomFight = () => {
        entities.refetch();
        if (ContentState.sourceType === 'people') {
            ContentState.fightData = entities.data.entities;
        } else if (ContentState.sourceType === 'starships') {
            ContentState.fightData = entities.data.entitiesStarship;
        }
        ContentState.handleCrew();
        ContentState.handleScore();
    };


    return (
        <ContentWrapper>
            <Score
                score={ContentState.score}
                winner={ContentState.winner}
            />
            <Cards
                fightData={ContentState.fightData}
                sourceType={ContentState.sourceType}
                starshipsCrew={ContentState.starshipsCrew}
            />
            <Control
                onhandleSetSourcePeople={() => handleSetSourcePeople() }
                onhandleSetSourceStarships={() => handleSetSourceStarships() }
                onhandleRandomFight={() => handleRandomFight() }
            />
        </ContentWrapper>
    );
});

export default Content;
