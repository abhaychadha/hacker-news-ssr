
import { Component } from 'react';
import axios from 'axios';
import Error from 'next/error';
import { NewsList } from '../components/NewsList/NewsList.js';
import Head from 'next/head';
import Link from 'next/link';
import { Button, ButtonGroup, Row, Navbar } from 'react-bootstrap';

class Index extends Component {
  static async getInitialProps ({ query }) {
    let response;
    let stories = [];
    let error = false;
    let page;
    try {
      page = Number(query.page) || 1;
      response = await axios.get('http://hn.algolia.com/api/v1/search?page=' + page);
      stories = response.data;
    } catch (exception) {
      console.log(exception);
      error = true;
    }
    return { stories, error, page };
  }

  render () {
    const { error, stories, page } = this.props;
    console.log(stories.length);
    return error
      ? <Error/>
      : <div>
        <Head>
          <title>Hacker news</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
        </Head>
        <Navbar bg="dark"></Navbar>
        <NewsList stories = {stories} />
        <Row className="justify-content-md-center">
          <ButtonGroup>
            <Link href={`/?page=${page > 1 ? page - 1 : 1}`}>
              <Button variant="primary" disabled ={page === 1 } size="sm">Prev</Button>
            </Link>
            <Button variant="secondary" size="sm" disabled>{page}</Button>
            <Link href={`/?page=${page + 1}`}>
              <Button variant="primary" size="sm">Next</Button>
            </Link>
          </ButtonGroup>
        </Row>
      </div>;
  }
}

export default Index;
