import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { IEntityDetailsDataMutation } from '../../Content';

interface IEntityCardProps {
    fightData: IEntityDetailsDataMutation;
    sourceType: string;
    starshipsCrew: number;
}

const EntityCard: React.FC<IEntityCardProps> = (props) => {
    const sourceType = props.sourceType === 'people';

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={sourceType ? props.fightData.img : props.fightData.starship.starshipImg}
                    alt="no image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {sourceType ? props.fightData.name : props.fightData.starship.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {sourceType ? props.fightData.mass : props.starshipsCrew }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default EntityCard;
