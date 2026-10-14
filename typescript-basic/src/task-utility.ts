type Post = {
 id: number;          // id
 title: string;       // タイトル
 body: string;        // 本文
 published: boolean;  // 公開済みかどうか
};

type EditingPost = Partial<Post>;

type SummaryPost = Pick<Post, 'id' | 'title'>;

type PublishedPost = Readonly<Post>;

