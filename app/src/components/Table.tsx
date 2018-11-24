import React, { Fragment } from 'react';
import styled from 'styled-components';

import TableBody from './TableBody';

import { validateInput } from '../lib/calculator';

const Head = styled.h1`
  text-align: center;
`;

const CenteredTable = styled.table`
  margin: 0 auto;
`;

const CenteredBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const StyledLabel = styled.label`
  margin-right: 25px;
`;

const StyledInput = styled.input`
  max-width: 50px;
`;

interface State {
  tempo: number;
}

export default class Table extends React.Component<{}, State> {
  state = {
    tempo: 120,
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    this.setState({ tempo: validateInput(Number(event.target && event.target.value)) });
  }

  render() {
    const { tempo } = this.state;
    return (
      <Fragment>
        <Head>
          {`Time table for common beat divisions at ${tempo} bpm`}
        </Head>
        <CenteredBox>
          <StyledLabel htmlFor="bpm">
            Tempo in bpm:
          </StyledLabel>
          <StyledInput
            id="bpm"
            type="number"
            min="1"
            onChange={this.handleChange}
            value={parseFloat(`${tempo}`)}
          />
        </CenteredBox>
        <CenteredTable>
          <TableBody tempo={tempo}/>
        </CenteredTable>
      </Fragment>
    );
  }
}
