import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import PreviewSuspense from '../../components/PreviewSuspense';
import PreviewBlogList from '../../components/PreviewBlogList';
import BlogList from '../../components/BlogList';

const query = groq`
  *[_type=='post'] { //all the post data
    ...,            // all the fields
    author->,       //author reference with {}
    categories[]-> // categories reference with []
} | order(_createdAt desc) // ordering by descending
`;

export const revalidate = 30; // revalidate this page every 30 seconds

async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role='status'>
            <p className='text-center text-lg animate-pulse text-[#f7ab0a]'>
              Loading Preview Data
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return (
    <div className=''>
      {/* Blog List */}
      <BlogList posts={posts} />
    </div>
  );
}

export default HomePage;
