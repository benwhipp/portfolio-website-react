import
    React,
    { Fragment }
from 'react';

import {
    createStyles,
    makeStyles,
    Switch
} from '@material-ui/core';

import Button from './Button';

const useStyles = makeStyles(() => createStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}));

type NavLink = {
    content: string;
    href?: string;
    type: 'outlined' | 'text';
};

const navArray = [
    {
        content: 'About',
        type: 'text'
    },
    {
        content: 'Services',
        type: 'text'
    },
    {
        content: 'Projects',
        type: 'text'
    },
    {
        content: 'Hire Me',
        type: 'outlined'
    }
];

export default () => {
    const classes = useStyles();

    const handleNavLinks = () => {
        return navArray.map((element, index) => {
            return (
                <Button
                    key={`${element.content}${index}`}
                    content={element.content}
                    outlined={element.type === 'outlined'}
                />
            )
        })
    };

    return (
        <div
            className={classes.root}
        >
            <Switch />
            <div
                className={classes.buttonContainer}
            >
                {handleNavLinks()}
            </div>
        </div>
    )
};