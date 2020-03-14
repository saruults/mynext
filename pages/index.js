import Layout from '../components/Layout';

export default class News extends React.Component{
    render(){
        const articles = this.props.articles
        return <Layout>
            <h1>News</h1>
        </Layout>
    }
}