import { makeAutoObservable } from 'mobx'
import { IEntityDetailsDataMutation } from './Content';

class ContentModel {
    sourceType: string;

    fightData: IEntityDetailsDataMutation[];

    score: number[];

    winner: string | null;

    fetchFlag: boolean;

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
        this.fetchFlag = false;
        this.starshipsCrew = {
            leftStarship: 0,
            rightStarship: 0,
        };

        makeAutoObservable(this);
    }

    public handleCrew = () => {
        if (this.sourceType === 'starships') {
            const uniqueStarship = [...new Map(this.fightData.map((item) => [item.starship.name, item])).values()].sort(() => Math.random() - 0.5);

            const leftStarship = this.fightData.filter(item => item.starship.name === uniqueStarship[0].starship.name).length;
            const rightStarship = this.fightData.filter(item => item.starship.name === uniqueStarship[1].starship.name).length;

            this.starshipsCrew = {
                leftStarship,
                rightStarship,
            };

            this.fightData = uniqueStarship;
        }
    };

    public handleScore = () => {
        this.winner = null;
        if (this.sourceType === 'starships') {
            if (this.starshipsCrew.leftStarship > this.starshipsCrew.rightStarship) {
                this.score[0] = this.score[0] + 1;
                this.winner = 'left';
            } else if (this.starshipsCrew.leftStarship < this.starshipsCrew.rightStarship) {
                this.score[1] = this.score[1] + 1;
                this.winner = 'right';
            }
        } else if (this.sourceType === 'people') {
            if (this.fightData[0].mass > this.fightData[1].mass) {
                this.score[0] = this.score[0] + 1;
                this.winner = 'left';
            } else if (this.fightData[0].mass < this.fightData[1].mass) {
                this.score[1] = this.score[1] + 1;
                this.winner = 'right';
            }
        }
    };
}

export default ContentModel;
