import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

class EditRoundButton extends Component<{ onClick(selectedRoundStatsId: string): void, selectedRoundStatsId: string }, {}> {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  public render() {

    return <div>
      <Button onClick={this.handleClick}>
        <EditIcon></EditIcon>
      </Button>
    </div>;
  }
  private handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.props.onClick(this.props.selectedRoundStatsId);
  }

}

export default EditRoundButton;
