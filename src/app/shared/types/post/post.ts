export type BlogListItem = {
  slug: string;
  title: string;
  description: string;
  content: string;
  year: number | null;
  photo: string | null;
  publishedAt: Date | null;
  isPublished: boolean;
  updatedAt: Date | null;
  tags: string[];
};

export type BlogContentProps = {
  locale: string;
  posts: BlogListItem[];
};

export type BlogListProps = {
  posts: BlogListItem[];
  locale: string;
};

export type DbPostMetadata = {
  slug: string;
  title: string;
  description: string;
  content: string;
  year: number | null;
  photo: string | null;
  publishedAt: Date | null;
  isPublished: boolean;
  updatedAt: Date | null;
  tags: string[];
};

export type MdxHeadingProps = React.ComponentPropsWithoutRef<"h1">;
export type MdxParagraphProps = React.ComponentPropsWithoutRef<"p">;
export type MdxUlProps = React.ComponentPropsWithoutRef<"ul">;
export type MdxOlProps = React.ComponentPropsWithoutRef<"ol">;
export type MdxLiProps = React.ComponentPropsWithoutRef<"li">;
export type MdxAnchorProps = React.ComponentPropsWithoutRef<"a">;
export type MdxCodeProps = React.ComponentPropsWithoutRef<"code">;
export type MdxPreProps = React.ComponentPropsWithoutRef<"pre">;
export type MdxImgProps = React.ComponentPropsWithoutRef<"img">;

export type PageParams = {
  locale: string;
  slug: string;
};

export type PageProps = {
  params: Promise<PageParams>;
};

export type PostRow = {
  id: number;
  slug: string;
  year: number | null;
  isPublished: boolean;
  publishedAt: Date | null;
  createdAt: Date;
  translations: { title: string; description: string }[];
  postTags: { tag: { name: string } }[];
};

export type PostsTableProps = {
  posts: PostRow[];
};
