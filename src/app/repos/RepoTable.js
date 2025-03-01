'use client';
import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
} from '@carbon/react';

/**
 * RepoTable
 * - Carbon DataTable을 사용하여 레포지토리 목록 표시
 * - 확장 행(ExpandedRow)에서 레포지토리 설명을 표시
 */
function RepoTable({ rows, headers }) {
  /**
   * 확장 행에서 레포지토리 설명을 표시하기 위해
   * 현재 row.id에 해당하는 데이터 객체를 찾는 함수
   */
  const getRowDescription = (rowId) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.description : '';
  };

  return (
    <DataTable
      rows={rows}
      headers={headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
      }) => (
        <TableContainer
          title="Carbon Repositories"
          description="A collection of public Carbon repositories."
        >
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {/* 확장 행 아이콘 헤더 */}
                <TableExpandHeader />
                {/* 일반 컬럼 헤더들 */}
                {headers.map((header) => (
                  <TableHeader key={header.key} {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <React.Fragment key={row.id}>
                  {/* 확장 가능한 행 */}
                  <TableExpandRow {...getRowProps({ row })}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableExpandRow>
                  {/* 확장 시 표시될 내용 */}
                  <TableExpandedRow colSpan={headers.length + 1}>
                    <p>{getRowDescription(row.id)}</p>
                  </TableExpandedRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
}

export default RepoTable;
