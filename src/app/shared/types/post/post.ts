export type PostMetadata = {
  title: string;
  description: string;
  year: string;
  publishedAt: string;
  photo: string;
  slug: string;
  sizes: string;
  content: string;
  priority: boolean;
  tags?: string[];
};

export type BlogListProps = {
  posts: PostMetadata[];
  locale: string;
};

export type BlogContentProps = {
  locale: string;
  posts: PostMetadata[];
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
