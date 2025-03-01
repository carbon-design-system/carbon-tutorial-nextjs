'use client';
import React, { useEffect, useState } from 'react';
// Carbon React 컴포넌트 (Link, DataTableSkeleton, Pagination 등)
import {
  Link,
  DataTableSkeleton,
  Pagination,
  Grid,
  Column,
} from '@carbon/react';
// GitHub API 요청을 위한 Octokit
import { Octokit } from '@octokit/core';
// RepoTable 컴포넌트
import RepoTable from './RepoTable';

// Octokit 클라이언트 초기화
const octokitClient = new Octokit({});

// 테이블의 헤더 정의
const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'issueCount',
    header: 'Open Issues',
  },
  {
    key: 'stars',
    header: 'Stars',
  },
  {
    key: 'links',
    header: 'Links',
  },
];

/**
 * LinkList 컴포넌트
 * - GitHub 링크와 홈페이지 링크를 함께 보여주는 UI
 */
const LinkList = ({ url, homepageUrl }) => (
  <ul style={{ display: 'flex' }}>
    <li>
      <Link href={url}>GitHub</Link>
    </li>
    {homepageUrl && (
      <li>
        <span>&nbsp;|&nbsp;</span>
        <Link href={homepageUrl}>Homepage</Link>
      </li>
    )}
  </ul>
);

/**
 * getRowItems 함수
 * - GitHub API로부터 받은 raw 데이터를
 *   테이블에 필요한 형식(rows)으로 변환
 */
const getRowItems = (rows) =>
  rows.map((row) => ({
    ...row,
    key: row.id, // DataTable에서 고유 식별자로 사용
    stars: row.stargazers_count,
    issueCount: row.open_issues_count,
    createdAt: new Date(row.created_at).toLocaleDateString(),
    updatedAt: new Date(row.updated_at).toLocaleDateString(),
    links: <LinkList url={row.html_url} homepageUrl={row.homepage} />,
  }));

/**
 * RepoPage 컴포넌트
 * - GitHub Repos 데이터를 fetch하여 테이블로 보여주고,
 *   Pagination으로 페이지당 10개씩 표시
 */
export default function RepoPage() {
  // 로딩 상태, 에러 상태, 로우 데이터 상태
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rows, setRows] = useState([]);

  // 페이지네이션 상태
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  // 컴포넌트 마운트 시점에 GitHub API 요청
  useEffect(() => {
    async function getCarbonRepos() {
      try {
        const res = await octokitClient.request('GET /orgs/{org}/repos', {
          org: 'carbon-design-system',
          per_page: 75,
          sort: 'updated',
          direction: 'desc',
        });

        if (res.status === 200) {
          // 받아온 데이터를 테이블용 형식으로 변환
          setRows(getRowItems(res.data));
        } else {
          setError('Error obtaining repository data');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        // 요청 완료 후 로딩 해제
        setLoading(false);
      }
    }

    getCarbonRepos();
  }, []);

  // 로딩 중이면 Skeleton UI 표시
  if (loading) {
    return (
      <Grid className="repo-page">
        <Column lg={16} md={8} sm={4} className="repo-page__r1">
          <DataTableSkeleton
            columnCount={headers.length + 1}
            rowCount={10}
            headers={headers}
          />
        </Column>
      </Grid>
    );
  }

  // 에러 발생 시 에러 메시지 표시
  if (error) {
    return `Error! ${error}`;
  }

  // 정상적으로 데이터가 로드되었을 때 렌더
  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        {/* 페이지네이션 상태에 맞춰 slice()로 해당 부분만 테이블에 전달 */}
        <RepoTable
          headers={headers}
          rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
        />
        <Pagination
          totalItems={rows.length}
          backwardText="Previous page"
          forwardText="Next page"
          pageSize={currentPageSize}
          pageSizes={[5, 10, 15, 25]}
          itemsPerPageText="Items per page"
          onChange={({ page, pageSize }) => {
            if (pageSize !== currentPageSize) {
              setCurrentPageSize(pageSize);
            }
            setFirstRowIndex(pageSize * (page - 1));
          }}
        />
      </Column>
    </Grid>
  );
}
