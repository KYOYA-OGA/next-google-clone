import Head from 'next/head';
import { useRouter } from 'next/router';
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
      <div className="container px-3 mx-auto lg:px-0 lg:max-w-5xl">
        <SearchResults results={results} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const mockData = true;
  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && '&searchType=image'
        }`
      );
  // const json = await data.json();

  return {
    props: {
      results: data,
    },
  };
}
