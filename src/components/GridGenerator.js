import { chunk } from 'lodash';
import * as React from 'react';

const GridGenerator = ({ cols, children }) => {
 
const colWidth = 12 / cols;
const rows = chunk(React.Children.toArray(children), cols);
return (
    <div className="container">
      {rows.map((cols) => (
        <div className="row">
          {cols.map((col) => (
            <div className={"col sm-12 md-"+colWidth} style={{padding:'0',margin:'0'}}>
              {col}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default GridGenerator