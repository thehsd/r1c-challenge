import type { Article } from "../../services/type";

export type tagType = {
  id: number | string;
  name: string;
  selectedTag: boolean;
};

export interface TagsListProps {
  initialSelectedTags?: string[];
}

export interface ArticleFormProps {
  defaultValues: {
    title: string;
    description: string;
    body: string;
    tagList?: string[];
  };
  slug?: string;
}

export interface ArticlesTableData {
  slug: string;
  id: number;
  title: string;
  author: string;
  tags: string;
  excerpt: string;
  created: string;
}

export interface ArticleTablesProps {
  articles: ArticlesTableData[];
}
export type ActionHandler = (rowData: Article) => void;
