import clsx from "clsx";
import Section from "../components/common/section";

import { useState, type FC } from "react";

import { useGetArticlesQuery } from "../hooks/queries/use-article-queries";
import ArticleTables from "./article-view/components/articles-table";
import Pagination from "../components/common/pagination";
import type { ArticlesTableData } from "./article-view/type";

const ArticlesView: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useGetArticlesQuery(currentPage);

  return (
    <Section title="All Posts" className={clsx("m-6")}>
      {!isLoading && (
        <>
          <ArticleTables articles={data as ArticlesTableData[]} />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={1}
          />
        </>
      )}
    </Section>
  );
};

export default ArticlesView;
