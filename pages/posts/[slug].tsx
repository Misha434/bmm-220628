import { serialize } from 'next-mdx-remote/serialize';
import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import Thumbnail from '../../components/Thumbnail';
import { IPost } from '../../types/post';
import { getPost, getAllPosts } from '../../utils/mdxUtils';
import { ParsedUrlQuery } from 'querystring';
import { Typography } from '@mui/material';
import rehypeHighlight from 'rehype-highlight';

// props type
type Props = {
    source: MDXRemoteSerializeResult,
    frontMatter: Omit<IPost, 'slug'>;
}


const PostPage: React.FC<Props> = ({ source, frontMatter }: Props) => {
    return (
        <>
            <Typography variant='body1' mb={'1.5rem'}>{frontMatter.date}</Typography>
            <Typography variant='h4' mb={'1.5rem'}>{frontMatter.title}</Typography>
            <Thumbnail title={frontMatter.title} src={frontMatter.thumbnail} />
            <MDXRemote {...source} />
        </>
    )
}

export default PostPage;

interface Iparams extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {

    const { slug } = context.params as Iparams;
    const { content, data } = getPost(slug);
    const mdxSource = await serialize(content, { scope: data, mdxOptions: { rehypePlugins: [rehypeHighlight] }, });
    return {
        props: {
            source: mdxSource,
            frontMatter: data
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    const posts = getAllPosts(['slug']);

    const paths = posts.map((post) => ({
        params: {
            slug: post.slug
        }
    }));

    return {
        paths,
        fallback: false
    }
}