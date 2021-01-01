import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';
import React from 'react';
import { useStyles } from './spinner.styles';

const SPINNER_THRESHOLD = '800ms';

interface SpinnerProps {
    show: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ show }: SpinnerProps) => {
    const clases = useStyles();
    return (
        <Fade
            in={show}
            style={{
                transitionDelay: show ? SPINNER_THRESHOLD : '0ms',
            }}
            unmountOnExit
        >
            <Backdrop className={clases.backdrop} open={show}>
                <CircularProgress />
            </Backdrop>
        </Fade>
    );
};

export default Spinner;
