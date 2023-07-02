import Layout from './../../../components/layout/Layout'
import CategoryHeader from './../../../components/headers/CategoryHeader'


async function getTechData(){
    

    const remotepost = await fetch('https://content.api.pressassociation.io/v1/service/paservice:sport/item?sort=firstcreated:desc', {
        headers: {
            'Accept': 'application/json',
            'apikey': '2wmhpxengxmes4d9xfdk4a79'
        }
    })
    .then(response => response.json())

  return remotepost;
}


export default async function Page({ params }) {

    const techPosts = await getTechData(); 
    // console.log(techPosts);

    return (
        <Layout>
            <CategoryHeader category={params.category} />
        </Layout>
    );
}