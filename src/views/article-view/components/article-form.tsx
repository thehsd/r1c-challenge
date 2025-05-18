import clsx from "clsx";
import { useForm } from "react-hook-form";
import { RHFTextField } from "../../../components/common/hook-form/rhf-text-field";
import { RHFTextareaField } from "../../../components/common/hook-form/rhf-textarea-field";
import Section from "../../../components/common/section";
import TagsList from "../tags-list";
import { Form } from "../../../components/common/hook-form/form";
import Button from "../../../components/ui/button";
import type { ArticleFormProps } from "../type";
import type { FC } from "react";
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { updateArticleParam } from "../../../services/type";
import {
  useCreateArticleMutation,
  useUpdateArticleMutation,
} from "../../../hooks/queries/use-article-queries";

const articleFormSchema = zod.object({
  title: zod.string().min(1, "Title is required"),
  description: zod.string().min(1, "Description is required"),
  body: zod.string().min(1, "Body is required"),
  tagList: zod.array(zod.string()).optional(),
});

const ArticleForm: FC<ArticleFormProps> = ({ defaultValues, slug = "" }) => {
  const methods = useForm({
    mode: "all",
    resolver: zodResolver(articleFormSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const {
    mutate: updateMutate,
    // isPending, isError, isSuccess
  } = useUpdateArticleMutation();

  const {
    mutate: createMutate,
    // isPending, isError, isSuccess
  } = useCreateArticleMutation();

  const onSubmit = handleSubmit((data) => {
    if (slug) {
      const updatePayload: updateArticleParam = {
        article: {
          slug: slug,
          ...data,
        },
      };
      updateMutate(updatePayload, {
        onSuccess: () => {
          alert("Well done! Article updated successfully");
        },
        onError: () => {
          alert("Update Failed");
        },
      });
    } else {
      const createPayload = { article: data };
      createMutate(createPayload);
    }
  });

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <div className={clsx("flex", "m-6", "gap-x-6")}>
        <Section title="New article" className={clsx("grow")}>
          <div className={clsx("flex", "flex-col", "gap-y-3")}>
            <RHFTextField
              error={!!errors.title}
              label="title"
              placeholder="title"
              name="title"
            />
            <RHFTextField
              error={!!errors.description}
              label="description"
              placeholder="description"
              name="description"
            />
            <RHFTextareaField
              error={!!errors.body}
              label="body"
              placeholder="body"
              name="body"
            />
          </div>

          <Button color={"primary"} className={clsx("mt-6")} type="submit">
            Submit
          </Button>
        </Section>
        <TagsList initialSelectedTags={defaultValues.tagList} />
      </div>
    </Form>
  );
};

export default ArticleForm;
