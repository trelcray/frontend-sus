import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { Pencil, Trash } from 'phosphor-react';

interface Column {
  id: 'name' | 'description' | 'risc' | 'actions';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;

}

const columns: readonly Column[] = [
  { id: 'name', label: 'Nome', minWidth: 170 },
  { id: 'description', label: 'Descrição', minWidth: 170},
  { id: 'risc', label: 'Risco', minWidth: 170},
  { id: 'actions', label: 'Ações', minWidth: 60 }
];

interface Data {
  name: string;
  description: string;
  risc: string;
  actions: JSX.Element;
}

function createData(
  name: string,
  description: string,
  risc: string,
): Data {
  return { name, description, risc, actions: <div>
    <Link to="/editConsult">
        <Tooltip title="Editar">
            <IconButton>
                <Pencil size={22} color="#c0e119" />
            </IconButton>
        </Tooltip>
    </Link>
    <Tooltip title="Remover">
        <IconButton>
            <Trash size={22} color="#ff0f3f" />
        </IconButton>
    </Tooltip></div>};
}

const rows = [
  createData('Thalis Zambarda', 'Com muita dor', "alto"),
];

export function Ctable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.description}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        labelRowsPerPage="Linhas por página"
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}