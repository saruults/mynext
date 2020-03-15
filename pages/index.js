import Layout from '../components/Layout';

export default class News extends React.Component{
    render(){
        const articles = this.props.articles
        return <Layout>
            <h1>News</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aperiam obcaecati voluptatem officia a blanditiis fuga ad modi, tempora maxime earum? Delectus expedita, similique enim quos unde dolore. Quos suscipit quisquam odit maiores, eum molestiae nihil praesentium quam eius minus quis veritatis, exercitationem officia voluptatem beatae necessitatibus saepe ut possimus! Quos eaque mollitia incidunt repellat magnam neque enim sequi itaque? Illo consequatur beatae, sint expedita rerum rem error dignissimos temporibus tempore maiores nesciunt obcaecati. Totam commodi veniam, autem deleniti in quidem aliquam mollitia nesciunt facilis at enim tempora non animi expedita, reiciendis quaerat qui omnis sequi exceptguri voluptates maxime libero?</p>
        </Layout>
    }
}