import React from 'react'
import { Table, TableCell, TableRow, TableHead } from 'react-toolbox/lib/table'

export class MyTable extends React.Component{
    render() {
        const { table, style } = this.props;
        return (
            <div className="table" style={style.style.myTable.main}>
                <Table selectable={false} style={style.style.myTable.table}>
                    <TableHead>
                        <TableCell style={style.style.myTable.tdTh}>
                            X
                        </TableCell>
                        <TableCell style={style.style.myTable.tdTh}>
                            Y
                        </TableCell>
                        <TableCell style={style.style.myTable.tdTh}>
                            R
                        </TableCell>
                        <TableCell style={style.style.myTable.tdTh}>
                            HIT
                        </TableCell>
                    </TableHead>
                    {table.map((item) => (
                        <TableRow>
                            <TableCell style={style.style.myTable.tdTh}>
                                {item.x}
                            </TableCell>
                            <TableCell style={style.style.myTable.tdTh}>
                                {item.y}
                            </TableCell>
                            <TableCell style={style.style.myTable.tdTh}>
                                {item.r}
                            </TableCell>
                            <TableCell style={style.style.myTable.tdTh}>
                                {String(item.hit)}
                            </TableCell>
                        </TableRow>
                    ))}
                </Table>
            </div>
        )
    }
}
