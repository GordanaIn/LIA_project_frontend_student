import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {unlinkSync} from "fs";
import {inherits} from "util";
export const useStyles = makeStyles((theme: Theme) =>

        createStyles({
            root: {
                flexGrow: 1,
            },
            navBarMenuButton: {
                marginRight: theme.spacing(2),
            },
            navBarTitle: {
                flexGrow: 1,
            },
            navBarMenuColor: {
                color: '#fafafa'
            },
            linkDecoration: {
                textDecoration: 'none',
                color: 'inherit'
            },
            dropDownMenuColor: {
                color: '#188dee'
            },
            paper: {
                padding: theme.spacing(2),
                margin: 'auto',
                maxWidth: 500,
            },
            image: {
                width: 128,
                height: 128,
            },
            img: {
                margin: 'auto',
                display: 'block',
                maxWidth: '100%',
                maxHeight: '100%',
            },
        }),
    )
;
