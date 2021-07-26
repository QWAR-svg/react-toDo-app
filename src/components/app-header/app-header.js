import React from "react";

const AppHeader = ({toDo, done}) => {
    return (
      <div>
        <h1 className="header-title">ToDo App</h1>
        <div className="do">{toDo} more to do,</div>
        <div className="do">{done} done</div>
      </div>
    )
  }


  export default AppHeader;