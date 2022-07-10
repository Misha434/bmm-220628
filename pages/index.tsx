import React, { Component } from 'react';
import Thumbnail from '../components/Thumbnail';
import type { NextPage, GetStaticProps } from 'next'
import { IPost } from "../types/post";
import Link from 'next/link'
import { getAllPosts } from "../utils/mdxUtils";
import { Divider, Grid, Typography } from '@mui/material';

// props type
type Props = {
  posts: [IPost]
}

// component render function
const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <div>
      <Typography variant={'h4'} component={'h4'} mt={0} sx={{ marginBottom: "1.5rem"}} color={'#333'} align={'center'}> 
        ベーグル・ミーシャ・マッハ
      </Typography>
        {posts.map((post) => (
          <React.Fragment key={post.slug}>
            <Divider />
            <Grid item xs={12}>
            <Grid container columnSpacing={2}>              
              <Grid item xs={12} md={12} mt={'1.5rem'} color={'#666'}>
                <Typography variant={'body1'} align={'left'}>
                  {post.date}
                </Typography>
              </Grid>
            </Grid>
              <Typography variant={'h5'} component={'h5'} color={'#333'}>
                <Link href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </Typography>
            </Grid>
            <Grid container columnSpacing={2}>
              <Grid item xs={12} md={6}  mt={'1.5rem'}>
                <Thumbnail
                  slug={post.slug}
                  title={post.title}
                  src={post.thumbnail}
                />
              </Grid>
              <Grid item xs={12} md={6} mt={'1.5rem'} lineHeight={1.7} color={'#666'}>
                {post.description}
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
      </div>
  )
}

export default Home

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const initialPosts = getAllPosts([
    'title',
    'slug',
    'date',
    'description',
    'thumbnail'
  ]);

  const posts = initialPosts.sort((a, b) => (a.date > b.date) ? -1 : 1);

  // retunr the posts props
  return { props: { posts } }
}