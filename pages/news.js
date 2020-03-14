import Layout from '../components/Layout';
import Cards from '../components/Cards';

export default class News extends React.Component{
    render(){
        const articles = this.props.articles
        return <Layout>
            <h1>News</h1>
           <Cards/>
        </Layout>
    }
}