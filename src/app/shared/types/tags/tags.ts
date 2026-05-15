export type AdminTagRow = {
  id: number;
  name: string;
  slug: string;
  postsCount: number;
};

export type TagsDataTableProps = {
  data: AdminTagRow[];
};

export type TagsProps = {
  tags?: string[];
};
