import React from 'react'
function LeftPanel (props) {
  const { shelfFilter } = props;
  return (
    <div className="sidenav">
      {console.log(shelfFilter)}
      <h1>Book States</h1>
      <ul>
        {shelfFilter.map(({shelf, shelfName}) => (
          <li><a href={"#"+shelf}>{shelfName}</a></li>
        ))}
      </ul>
    </div>
  )
}
export default LeftPanel