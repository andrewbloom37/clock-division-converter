import React, { Fragment } from 'react';
import v4 from 'uuid/v4';
import styled from 'styled-components';

import divisions from '../lib/calculator';

const TableGrid = styled.td`
  outline: solid 1px black;
  text-align: center;
  padding: 1px 5px;
`;

interface Props {
  tempo: number,
}

export default (props: Props) => {
  const { tempo } = props;
  const timeTable = divisions(tempo);
  return (
    <Fragment>
      <thead>
        <tr>
          <TableGrid>Division</TableGrid>
          <TableGrid>Triplet</TableGrid>
          <TableGrid>Straight</TableGrid>
          <TableGrid>Dotted</TableGrid>
        </tr>
      </thead>
      <tbody>
        {Object.keys(timeTable).map(division => {
          const {triplet, straight, dotted} = timeTable[division];
          return (
            <tr key={v4()}>
              <TableGrid>{division}</TableGrid>
              <TableGrid>{`${triplet} ms`}</TableGrid>
              <TableGrid>{`${straight} ms`}</TableGrid>
              <TableGrid>{`${dotted} ms`}</TableGrid>
            </tr>
          )
        })}
      </tbody>
    </Fragment>
  );
};
