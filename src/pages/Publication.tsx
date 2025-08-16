import { useParams, Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { useEffect, useState } from 'react';
import { Spinner } from "../components/ui/spinner";
import { extractH1, removeH1, slugToTitle } from '@/lib/utils';

const files = import.meta.glob("../publications/*.md", {
  query: "?raw",
  import: "default",
});

const Publication: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    const fileKey = `../publications/${slug}.md`;

    if (files[fileKey]) {
      files[fileKey]().then((md) => {
        const h1 = extractH1(md as string) || slugToTitle(slug)
        setTitle(h1); // H1 or fallback
        setContent(removeH1(md as string));

        setLoading(false);
        document.title = h1;
      });
    } else {
      setContent("Publication not found.");
      setTitle("Not Found");
      setLoading(false);
    }
  }, [slug]);

  return (
    <Layout>
      <div className="mb-8">
        <Link
          to="/publications"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Publications
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {title || "Loading..."}
        </h1>
      </div>

      <article className="bg-sidebar rounded-xl shadow-sm border border-muted p-8">
        {!loading ? <MarkdownRenderer content={content} /> : <div className='w-full h-40 flex flex-col items-center justify-center'><Spinner /></div>}
      </article>
    </Layout>
  );
};

export default Publication;