import React from 'react';

import {
    Button,
    createStyles,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
    root: {
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: '1.3rem'
    }
}));

type Props = {
    outlined?: boolean;
    content: string;
    href?: string;
};

export default (props: Props) => {
    const classes = useStyles();

    const handleVariant = () => {
        if (props.outlined) {
            return 'outlined'
        } else {
            return 'text'
        }
    };

    return (
        <Button
            variant={handleVariant()}
            href={props.href}
        >
            {props.content}
        </Button>
    )
}