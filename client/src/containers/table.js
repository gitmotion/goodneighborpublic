/*
 * filename: table.js
 * Get the user data from store and show
 * */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
class TableComponent extends Component {

  showTableData () {
    return this.props.tableData.map((data) => {
      return (
        <TableRow key={data.id}>
          <TableRowColumn>{data.id}</TableRowColumn>
          <TableRowColumn>{data.name}</TableRowColumn>
          <TableRowColumn>{data.status}</TableRowColumn>
        </TableRow>
      );
    });
  }

  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
            {this.showTableData()}
        </TableBody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    tableData: state.tableData
  }
}

export default connect(mapStateToProps)(TableComponent);
