import Layout from "@/components/Layout";

export default function NotFound() {
    return (
        <Layout>
            <div className="text-center m-auto">
                <h1 className="text-3xl font-semibold text-foreground"><span className="text-6xl">404</span><br />Page Not Found</h1>

                <p className="mt-5 text-lg text-muted-foreground">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
            </div>
        </Layout>
    );
}