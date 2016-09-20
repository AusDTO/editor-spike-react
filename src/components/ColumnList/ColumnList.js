import React, { Component, PropTypes } from 'react';

const columnCountClasses = {
  2: "list-vertical",
  3: "list-vertical--thirds",
  4: "list-vertical--fourths",
};

export default class ColumnList extends Component {
  render() {
    let { block } = this.props;
    return (
      <div className="ColumnList">
        <ul className={columnCountClasses[block.columns.length]}>
          {
            block.columns.map((column, index) => (
              <li key={index}>
                <article>
                  <h3><a href='#'>{ column.heading }</a></h3>
                  <p>
                    { column.content }
                  </p>
                </article>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

ColumnList.propTypes = {
  block: PropTypes.object.isRequired
};
