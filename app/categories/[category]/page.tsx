import Layout from './../../../components/layout/Layout'
import CategoryHeader from './../../../components/headers/CategoryHeader'
export default async function Page({ params }) {
    return (
        <Layout>
            <CategoryHeader category={params.category} />
        </Layout>
    );
}