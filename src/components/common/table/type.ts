import type { ArticlesTableData } from "../../../views/article-view/type";

export interface ArticleRowData {
  id: number;
  title: string;
  author: string;
  tags: string;
  excerpt: string;
  created: string;
}

export interface Column {
  label: string;
  key: string;
}

export interface Action {
  label: string;
  key: string;
  handler: (rowData: ArticlesTableData) => void;
}

export interface TableRowProps {
  rowData: ArticlesTableData;
  columns: Column[];
  openRowId: number | null;
  toggleRowMenu: (id: number) => void;
  actions: Action[];
}

export interface ArticleRowData {
  id: number;
  title: string;
  author: string;
  tags: string;
  slug: string;
  excerpt: string;
  created: string;
}

export interface ActionMenuProps {
  actions: Action[];
  rowData: ArticlesTableData;
  onActionClick: () => void;
}

export interface ArticleRowData {
  id: number;
  title: string;
  author: string;
  tags: string;
  excerpt: string;
  created: string;
}

export interface ArticleRowData {
  id: number;
  title: string;
  author: string;
  tags: string;
  excerpt: string;
  created: string;
  slug: string;
}

export interface Column {
  label: string;
  key: string;
}

export interface TableProps {
  columns: Column[];
  data: ArticlesTableData[];
  openRowId: number | null;
  toggleRowMenu: (id: number) => void;
  actions: Action[];
}
