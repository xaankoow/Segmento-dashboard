
import React, { useEffect, useState } from 'react'
import DataTable, { Direction } from 'react-data-table-component';

const customStyles = {
    table: {
        style: {
            color: '#FCFCFB',
            textAlign: 'center',
            borderRadius: '3px',
            border: '1px solid #eee'
        },
    },
    rows: {
        style: {
            minHeight: '72px',
            justifyContent: 'center',
        },
    },
    head: {
        style: {
            borderRadius: '3px',
        },
    },
    headCells: {
        style: {
            color: '#002145',
            backgroundColor: '#FCFCFB',
            paddingLeft: '5px',
            justifyContent: 'center',
            textAlign: 'center',
            paddingRight: '5px',
        },
    },
    cells: {
        style: {
            justifyContent: 'center',
            paddingLeft: '8px',
            paddingRight: '8px',
        },
    },
};

const Table = ({ cells, rows = [], headerComponent }) => {

    const [pending, setPending] = useState(false);
    return (
        <div class="h-[70%] flex flex-col items-center justify-center gap-3  rounded-lg mt-7">
            <DataTable
                noDataComponent="اطلاعاتی برای نمایش یافت نشد."
                direction={Direction.RTL}
                title=""
                data={rows}
                subHeader
                subHeaderComponent={headerComponent}
                selectableRows
                progressPending={pending}
                columns={cells} customStyles={customStyles}
            />
        </div>
    )
}

export default Table