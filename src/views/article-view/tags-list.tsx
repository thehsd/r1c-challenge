import clsx from "clsx";
import Box from "../../components/common/box";
import CheckboxField from "../../components/ui/checkbox-field";
import TextField from "../../components/ui/text-field";
import { useGetAllTags } from "../../hooks/queries/use-tags-queries";
import {
  useCallback,
  useEffect,
  useId,
  useState,
  type FC,
  type KeyboardEvent,
} from "react";
import type { TagsListProps, tagType } from "./type";
import { useFormContext } from "react-hook-form";

const TagsList: FC<TagsListProps> = ({ initialSelectedTags = [] }) => {
  const [tags, setTags] = useState<tagType[]>([]);

  const { data, isPending } = useGetAllTags();
  const { setValue } = useFormContext();
  const uid = useId();

  const sortTags = useCallback((tags: tagType[]) => {
    return [...tags].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  useEffect(() => {
    if (!isPending && data?.tags?.length && tags.length === 0) {
      const tagList = [...new Set([...data.tags, ...initialSelectedTags])];
      const initialTags: tagType[] = tagList.map((tag, i) => ({
        name: tag,
        id: `api-${i}`,
        selectedTag: initialSelectedTags?.includes(tag),
      }));

      setTags(sortTags(initialTags));
      setValue("tagList", initialSelectedTags);
    }
  }, [data?.tags, tags, isPending, initialSelectedTags, setValue]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const input = e.currentTarget;
      const value = input.value.trim();

      if (value && !tags.find((tag) => tag.name === value)) {
        const newTag = {
          name: value,
          id: `new-${uid}-${tags.length}`,
          selectedTag: true,
        };
        setTags((prev) => sortTags([...prev, newTag]));
        input.value = "";
      }
    }
  };

  const handleTagsChange = (changedName: string, checked: boolean) => {
    const updatedTags = tags.map((tag) =>
      tag.name === changedName ? { ...tag, selectedTag: checked } : tag
    );
    setTags(updatedTags);

    const selectedTagNames = updatedTags
      .filter((tag) => tag.selectedTag)
      .map((tag) => tag.name);

    setValue("tagList", selectedTagNames);
  };

  return (
    <Box>
      <TextField label="Tags" placeholder="New tag" onKeyDown={handleKeyDown} />
      <Box
        className={clsx(
          "border",
          "border-secondary-light/40",
          "max-h-[350px]",
          "overflow-y-auto",
          "pretty-scroll",
          "rounded-2xl",
          "mt-6"
        )}
      >
        {!isPending &&
          tags.map((tag) => (
            <CheckboxField
              key={tag.id}
              label={tag.name}
              checked={tag.selectedTag}
              onChange={(e) => handleTagsChange(tag.name, e.target.checked)}
              name="tag"
            />
          ))}
      </Box>
    </Box>
  );
};

export default TagsList;
