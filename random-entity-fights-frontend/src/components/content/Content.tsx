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
import { CREATE_DATA_MUTATION } from '../graphQL/Mutations';
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

    const handleSetSourcePeople = () => {
        ContentState.sourceType = 'people';
    };

    const handleSetSourceStarships = () => {
        ContentState.sourceType = 'starships';
    };

    const handleRandomFight = () => {
        if (ContentState.sourceType === 'people') {
            const { error, loading, data } = useQuery(LOAD_PEOPLE);
            ContentState.fightData = data;
        } else if (ContentState.sourceType === 'starships') {
            const { error, loading, data } = useQuery(LOAD_STARSHIPS);
            ContentState.fightData = data;
        }
        ContentState.handleCrew();
        ContentState.handleScore();
    };

    useEffect(() => {
        const [createUser, { error }] = useMutation(CREATE_DATA_MUTATION);
        const dataMutationArray: IParticularEntityDataMutation[] = JSON.parse(DATA_MUTATION.toString());

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
                onhandleSetSourcePeople={() => handleSetSourcePeople }
                onhandleSetSourceStarships={() => handleSetSourceStarships }
                onhandleRandomFight={() => handleRandomFight }
            />
        </ContentWrapper>
    );
});

export default Content;
