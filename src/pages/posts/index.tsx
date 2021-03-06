import type { InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import { getAllPosts } from '@/lib/api'
import Link from 'next/link'
import { BreadCrumbs } from '@/components/BreadCrumbs'
import { Footer } from '@/components/Footer'

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'updated', 'tags'])
  return {
    props: { allPosts },
  }
}

const Posts: NextPage<Props> = ({ allPosts }) => {
  return (
    <div className='mx-auto p-4 md:p-6'>
      <Head>
        <title>Posts | TeQu</title>
        <meta name='description' content='Posts by Tequ' />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <main className='max-w-3xl mx-auto min-h-screen'>
        <BreadCrumbs
          lists={[
            {
              string: 'TeQu',
              path: '/',
            },
            {
              string: 'Posts',
            },
          ]}
        />
        <h1 className='pl-4 border-l-4 border-green-200 text-4xl'>Posts</h1>
        <div className='my-10'>
          {allPosts.map((post) => (
            <Link href={`posts/${post.slug}`} key={post.slug}>
              <a className='block my-2 md:m-4 p-4 md:p-6 border-2 rounded-2xl hover:shadow hover:transition-all duration-500'>
                <h4>{post.title}</h4>
                <span className='text-sm text-gray-400'>{post.updated}</span>
              </a>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Posts
