import React, { Component } from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

class FairwayInput extends Component<{ onChange(newFairwayValue: string): void, value: string }, {}> {
    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    public render() {
        // TODO use the statement for is checked
        switch (this.props.value) {
            case 'LEFT':
                break;
            case 'CENTER':
                break;
            case 'RIGHT':
                break;
            default:
                break;
        }
        return <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">labelPlacement</FormLabel>
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormControlLabel
                        value="LEFT"
                        control={<Radio color="primary" />}
                        label={<UndoIcon />}
                        labelPlacement="top"
                        onClick={this.handleClick}
                        checked={this.props.value === 'LEFT'}
                    />
                    <FormControlLabel
                        value="CENTER"
                        control={<Radio color="primary" />}
                        label={<ArrowUpwardIcon />}
                        labelPlacement="top"
                        onClick={this.handleClick}
                        checked={this.props.value === 'CENTER'}
                    />
                    <FormControlLabel
                        value="RIGHT"
                        control={<Radio color="primary" />}
                        label={<RedoIcon />}
                        labelPlacement="top"
                        onClick={this.handleClick}
                        checked={this.props.value === 'RIGHT'}
                    />
                </RadioGroup>
            </FormControl>
        </div>;
    }

    private handleClick(event: any) {
        this.props.onChange(event.target.value);
    }


}

export default FairwayInput;
