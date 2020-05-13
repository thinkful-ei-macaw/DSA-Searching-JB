import React, { Component } from "react";

export class ReactSearch extends Component {
  render() {
    return (
      <div>
        <label htmlFor="add-folder-form">Add New Folder</label>
        <form name="add-folder-form" onSubmit={this.onAddFolder}>
          <label htmlFor="folderinput">
            Number to search for: <div>{this.validateName()}</div>{" "}
          </label>
          <input
            id="folderinput"
            name="folderinput"
            type="number"
            onChange={(e) => this.updateName(e.target.value)}
          />
          <button type="submit" disabled={this.validateName()}>
            Submit{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default ReactSearch;
