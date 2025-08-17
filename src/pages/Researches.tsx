import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { Spinner } from "../components/ui/spinner";
import { extractH1, removeH1, slugToTitle } from '@/lib/utils';
import MarkdownRenderer from '@/components/MarkdownRenderer';

const files = import.meta.glob("../researches/*.md", {
    query: "?raw",
    import: "default",
});

type Research = {
    title: string;
    slug: string;
    content: string;
};

const Researches: React.FC = () => {
    const [researches, setResearches] = useState<Research[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFiles() {
            setLoading(true);
            const loaded = await Promise.all(
                Object.entries(files).map(async ([path, resolver]) => {
                    const md = (await resolver()) as string;
                    const slug = path.split("/").pop()?.replace(".md", "") || "untitled";
                    const title = extractH1(md) || slugToTitle(slug); // H1 or fallback
                    const content = removeH1(md);
                    return { slug, title, content };
                })
            );
            setResearches(loaded);
            setLoading(false);
        }
        loadFiles();
    }, []);

    return (
        <Layout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Researches</h1>
                <p className="text-gray-600 dark:text-gray-300">
                    A collection of research papers, articles, and academic work.
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center pt-20 pb-5">
                    <Spinner />
                </div>
            ) : researches.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-gray-600 dark:text-gray-300">No researches found.</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {researches.map((research) => (
                        <article
                            key={research.slug}
                            className="bg-sidebar rounded-xl shadow-sm border border-muted p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        <Link
                                            to={`/researches/${research.slug}`}
                                            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            {research.title}
                                        </Link>
                                    </h2>
                                    <div className="text-gray-700 dark:text-gray-300 my-4 leading-relaxed line-clamp-4">
                                        <MarkdownRenderer content={research.content} />
                                    </div>
                                    <Link
                                        to={`/researches/${research.slug}`}
                                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                                    >
                                        Read more
                                        <ArrowRight className="h-4 w-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </Layout>
    );
};

export default Researches;