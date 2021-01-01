import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    backdrop: {
        zIndex: theme.zIndex.modal + 1,
        color: 'black',
    },
}));
