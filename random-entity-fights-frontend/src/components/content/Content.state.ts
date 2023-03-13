import { makeAutoObservable } from 'mobx'
import { IEntityDetailsDataMutation } from './Content';

class ContentModel {
    sourceType: string;

    fightData: IEntityDetailsDataMutation[];

    score: number[];

    winner: string | null;

    starshipsCrew: {
        leftStarship: number,
        rightStarship: number,
    };

    public constructor() {
        this.sourceType = 'people';
        this.fightData = [
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
        this.score = [0, 0];
        this.winner = null;
        this.starshipsCrew = {
            leftStarship: 0,
            rightStarship: 0,
        };

        makeAutoObservable(this);
    }

    public handleCrew = () => {
        if (this.sourceType === 'starships') {
            const allStarshipsElements = this.fightData.map(item => item.starship.name)

            const uniqueStarship = [...new Set(allStarshipsElements)];

            const leftStarship = this.fightData.filter(item => item.starship.name === uniqueStarship[0]).length;
            const rightStarship = this.fightData.filter(item => item.starship.name === uniqueStarship[1]).length;

            this.starshipsCrew = {
                leftStarship,
                rightStarship,
            };
        }
    };

    public handleScore = () => {
        if (this.sourceType === 'starships') {
            if (this.starshipsCrew.leftStarship > this.starshipsCrew.rightStarship) {
                this.score[0] += this.score[0];
                this.winner = 'left';
            } else if (this.starshipsCrew.leftStarship < this.starshipsCrew.rightStarship) {
                this.score[1] += this.score[1];
                this.winner = 'right';
            }
        } else if (this.sourceType === 'people') {
            if (this.fightData[0].mass > this.fightData[1].mass) {
                this.score[0] += this.score[0];
                this.winner = 'left';
            } else if (this.fightData[0].mass < this.fightData[1].mass) {
                this.score[1] += this.score[1];
                this.winner = 'right';
            }
        }
    };
}

export default ContentModel;
