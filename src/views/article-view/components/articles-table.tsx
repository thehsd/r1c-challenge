import { useState, type FC } from "react";
import { useTable } from "../../../hooks/use-table";
import Table from "../../../components/common/table";
import type { ArticlesTableData, ArticleTablesProps } from "../type";
import { useNavigate } from "@tanstack/react-router";
import Modal from "../../../components/common/modal";
import ModalHeader from "../../../components/common/modal/modal-header";
import ModalContent from "../../../components/common/modal/modal-content";
import WarningIcon from "../../../components/common/icons/warning-icon";
import Typography from "../../../components/ui/typography";
import clsx from "clsx";
import ModalAction from "../../../components/common/modal/modal-action";
import Button from "../../../components/ui/button";
import { useDeleteArticleMutation } from "../../../hooks/queries/use-article-queries";
import { useQueryClient } from "@tanstack/react-query";
import { _endpoints } from "../../../services/articles-api-service";

const ArticleTables: FC<ArticleTablesProps> = ({ articles }) => {
  const [showDeleteModalConfirm, setShowDeleteModalConfirm] = useState(false);
  const [selectedRow, setSelectedRow] = useState<ArticlesTableData>(
    {} as ArticlesTableData
  );
  const { rows, openRowId, toggleRowMenu } = useTable({
    data: articles,
    pageSize: 10,
  });

  const columns = [
    { label: "#", key: "id" },
    { label: "Title", key: "title" },
    { label: "Author", key: "author" },
    { label: "Tags", key: "tags" },
    { label: "Excerpt", key: "excerpt" },
    { label: "Created", key: "created" },
  ];

  const { mutate: deleteMutate, isPending } = useDeleteArticleMutation();

  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const editItem = (data: ArticlesTableData) => {
    navigate({ to: `/articles/edit/${data.slug}` });
  };
  const deleteItem = (data: ArticlesTableData) => {
    setSelectedRow(data);
    setShowDeleteModalConfirm(true);
  };

  const handleDeleteItem = () => {
    deleteMutate(selectedRow.slug, {
      onSuccess: () => {
        alert("Article deleted successfully");
        setShowDeleteModalConfirm(false);
        queryClient.invalidateQueries({
          queryKey: [_endpoints.get_all_articles(1)],
        });
      },
      onError: () => {
        alert("Delete Failed");
        setShowDeleteModalConfirm(false);
      },
    });
  };
  const actions = [
    { label: "Edit", key: "edit", handler: editItem },
    { label: "Delete", key: "delete", handler: deleteItem },
  ];

  return (
    <>
      <Table
        columns={columns}
        data={rows}
        openRowId={openRowId}
        toggleRowMenu={toggleRowMenu}
        actions={actions}
      />
      <Modal
        isVisible={showDeleteModalConfirm}
        onClose={() => setShowDeleteModalConfirm(false)}
      >
        <ModalHeader title="Delete Article" />
        <ModalContent
          className={clsx(
            "p-6",
            "flex",
            "flex-col",
            "justify-center",
            "items-center",
            "gap-y-2"
          )}
        >
          <div
            className={clsx(
              "text-error-default",
              "w-14",
              "h-14",
              "p-4",
              "rounded-full",
              "justify-center",
              "flex",
              "items-center",
              "bg-error-light/30"
            )}
          >
            <WarningIcon />
          </div>

          <Typography
            variant="p"
            weight="normal"
            className="text-sm text-secondary-default"
          >
            Are you sure you want to delete this article?
          </Typography>
        </ModalContent>
        <ModalAction className={clsx("flex  flex-row-reverse gap-x-4")}>
          <Button
            color="secondary"
            onClick={() => setShowDeleteModalConfirm(false)}
          >
            Cancel
          </Button>
          <Button
            color="error"
            isLoading={isPending}
            onClick={handleDeleteItem}
          >
            Delete
          </Button>
        </ModalAction>
      </Modal>
    </>
  );
};

export default ArticleTables;
