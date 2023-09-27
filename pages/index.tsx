'use client'

// import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from 'components/container'
import Layout from 'components/layout'
import Image from 'next/image'
import { client } from 'lib/apollo'
import { GET_ALL_MOVIES } from 'lib/queries'

export default function Index({ allMovies: { movies } }) {
  const moviePost = movies.nodes[0]
  const movieFields = movies.nodes[0].movieFields

  return (
    <Layout preview>
      <Container>
        {/* <Intro /> */}
        { moviePost && (
          <>
            <h2>{moviePost.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: moviePost.content}}></div>
            <time className='font-bold'>{movieFields.runningTime} mins</time>
            <Image src={movieFields.featuredImage.node.sourceUrl} height={800} width={500} alt={moviePost.title} />
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.query({
    query: GET_ALL_MOVIES
  })
  const allMovies = response.data
  return {
    props: { allMovies },
    revalidate: 10,
  }
}
