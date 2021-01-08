
import { Button, Switch, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import IHoleStats from '../../interfaces/IHoleStats';
import DatabaseService from '../../services/database-service';
import SaveIcon from '@material-ui/icons/Save';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import FairwayInput from '../FairwayInput/FairwayInput';

class EditRoundStatsContainer extends Component<{ dbService: DatabaseService, roundKey: string, roundNickname: string, holeStatsArr: IHoleStats[], goBack(): void }, { holeId: number, strokes: number, fairway: string, gir: boolean, putts: number, penaltyStrokes: number, chips: number, sandStrokes: number, holeKey: string, holeIndex: number }> {

  constructor(props: any) {
    super(props);

    const firstHoleStats = this.props.holeStatsArr[0];

    this.state = {
      holeId: firstHoleStats.holeId,
      strokes: firstHoleStats.strokes,
      fairway: firstHoleStats.fairway,
      gir: firstHoleStats.gir,
      putts: firstHoleStats.putts,
      penaltyStrokes: firstHoleStats.penaltyStrokes,
      chips: firstHoleStats.chips,
      sandStrokes: firstHoleStats.sandStrokes,
      holeKey: firstHoleStats.key,
      holeIndex: 0
    }

    // handlers
    this.handleChangeStrokes = this.handleChangeStrokes.bind(this);
    this.handleChangeChips = this.handleChangeChips.bind(this);
    this.handleChangePutts = this.handleChangePutts.bind(this);
    this.handleChangeFairway = this.handleChangeFairway.bind(this);
    this.handleChangeSandStrokes = this.handleChangeSandStrokes.bind(this);
    this.handleChangeToggleGIR = this.handleChangeToggleGIR.bind(this);
    this.handleChangePenaltyStrokes = this.handleChangePenaltyStrokes.bind(this);
    this.handleClickPrevHole = this.handleClickPrevHole.bind(this);
    this.handleClickNextHole = this.handleClickNextHole.bind(this);
    this.handleSaveHoleStats = this.handleSaveHoleStats.bind(this);

  }


  public render() {
    return <div>
      <div>{this.props.roundNickname}</div>
      <div><TextField label="Hole" type='number' value={this.state.holeId} disabled={true}></TextField></div>
      <div><TextField label="Strokes" type='number' value={this.state.strokes} onChange={this.handleChangeStrokes}></TextField></div>
      <FairwayInput onChange={this.handleChangeFairway} value={this.state.fairway}></FairwayInput>
      <div>GIR <Switch checked={this.state.gir} onChange={this.handleChangeToggleGIR} inputProps={{ 'aria-label': 'secondary checkbox' }} /></div>
      <div><TextField label="Putts" type='number' value={this.state.putts} onChange={this.handleChangePutts}></TextField></div>
      <div><TextField label="Penalty Strokes" type='number' value={this.state.penaltyStrokes} onChange={this.handleChangePenaltyStrokes}></TextField></div>
      <div><TextField label="Sand Strokes" type='number' value={this.state.sandStrokes} onChange={this.handleChangeSandStrokes}></TextField></div>
      <div><TextField label="Chips" type='number' value={this.state.chips} onChange={this.handleChangeChips}></TextField></div>
      <div><Button onClick={this.handleSaveHoleStats}><SaveIcon></SaveIcon></Button></div>
      <div><Button onClick={this.handleClickPrevHole} disabled={this.state.holeId === 1}>Prev</Button><Button onClick={this.handleClickNextHole} disabled={this.state.holeId === 18}>Next</Button></div>
      <div><Button onClick={this.props.goBack}><ArrowBackIcon></ArrowBackIcon></Button></div>
    </div >;
  }

  private handleChangeStrokes(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    this.setState({ strokes: parseInt(event.target.value) })
  }
  private handleChangePutts(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    this.setState({ putts: parseInt(event.target.value) })
  }
  private handleChangePenaltyStrokes(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    this.setState({ penaltyStrokes: parseInt(event.target.value) })
  }
  private handleChangeChips(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    this.setState({ chips: parseInt(event.target.value) })
  }
  private handleChangeSandStrokes(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    this.setState({ sandStrokes: parseInt(event.target.value) })
  }
  private handleChangeToggleGIR(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) {
    this.setState({ gir: checked })
  }
  private handleClickNextHole(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.changeHole(this.state.holeIndex + 1);
  }
  private handleClickPrevHole(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.changeHole(this.state.holeIndex - 1);
  }
  private handleChangeFairway(newFairway: string) {
    this.setState({ fairway: newFairway })
  }
  private changeHole(newHoleIndex: number) {
    const selectedHoleStats = this.props.holeStatsArr[newHoleIndex];

    this.setState({
      holeId: selectedHoleStats.holeId,
      strokes: selectedHoleStats.strokes,
      fairway: selectedHoleStats.fairway,
      gir: selectedHoleStats.gir,
      putts: selectedHoleStats.putts,
      penaltyStrokes: selectedHoleStats.penaltyStrokes,
      chips: selectedHoleStats.chips,
      sandStrokes: selectedHoleStats.sandStrokes,
      holeKey: selectedHoleStats.key,
      holeIndex: newHoleIndex
    });
  }

  private async handleSaveHoleStats(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    await this.props.dbService.updateHoleStatsReal(this.props.roundKey, this.state.holeKey, {
      strokes: this.state.strokes,
      fairway: this.state.fairway,
      gir: this.state.gir,
      putts: this.state.putts,
      penaltyStrokes: this.state.penaltyStrokes,
      chips: this.state.chips,
      sandStrokes: this.state.sandStrokes,
    });
  }
}

export default EditRoundStatsContainer;
