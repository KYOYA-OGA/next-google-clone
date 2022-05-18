import Head from 'next/head';
import { useRouter } from 'next/router';
import ImageResults from '../components/ImageResults';
import SearchHeader from '../components/SearchHeader';
import SearchResults from '../components/SearchResults';
import Response from '../Response';

export default function Search({ results }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.term} - Search results</title>
      </Head>
      <SearchHeader />
      <>
        {router.query.searchType === 'image' ? (
          <ImageResults results={results} />
        ) : (
          <SearchResults results={results} />
        )}
      </>
    </>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || '1';
  const mockData = false;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && '&searchType=image'
        }&start=${startIndex}`
      );
  const json = await data.json();

  return {
    props: {
      results: json,
    },
  };
}
