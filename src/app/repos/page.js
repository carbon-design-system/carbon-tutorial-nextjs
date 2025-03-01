'use client';

import React from 'react';
import { Grid, Column } from '@carbon/react';
import RepoTable from './RepoTable';

// 예시 헤더 배열
const headers = [
  { key: 'name', header: 'Name' },
  { key: 'createdAt', header: 'Created' },
  // 필요한 헤더 추가
];

// 예시 행 배열 (추후 API 연동 예정)
const rows = [
  { id: '1', name: 'Repo 1', createdAt: '2023-01-01' },
  { id: '2', name: 'Repo 2', createdAt: '2023-02-01' },
  // 필요한 행 추가
];

export default function RepoPage() {
  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <RepoTable headers={headers} rows={rows} />
      </Column>
    </Grid>
  );
}
