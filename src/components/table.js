import React from 'react'
import { Table, TableCell, TableRow, TableHead } from 'react-toolbox/lib/table'

export class MyTable extends React.Component{
    render() {
        const { table } = this.props
        return (
            <div className="table">
                <Table selectable={false}>
                    <TableHead>
                        <TableCell>
                            X
                        </TableCell>
                        <TableCell>
                            Y
                        </TableCell>
                        <TableCell>
                            R
                        </TableCell>
                        <TableCell>
                            HIT
                        </TableCell>
                    </TableHead>
                    {table.map((item) => (
                        <TableRow>
                            <TableCell>
                                {item.x}
                            </TableCell>
                            <TableCell>
                                {item.y}
                            </TableCell>
                            <TableCell>
                                {item.r}
                            </TableCell>
                            <TableCell>
                                {String(item.hit)}
                            </TableCell>
                        </TableRow>
                    ))}
                </Table>
            </div>
        )
    }
}
