import React from 'react'
import DataTable from 'react-data-table-component'

const ReactTableChild = (props) => {
  return (
    <div>
        <DataTable
            columns={props.columns} data={props.data} defaultSortFieldId={1}
            columns={props.columns}
            data = {props.data}
        />
    </div>
  )
}

export default ReactTableChild
