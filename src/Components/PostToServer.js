import React from 'react';
import axios from 'axios';

class TestServer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        let url = 'http://localhost:3001/posts';
        // fetch(url)
        //     .then(resp => resp.json())
        //     .then(data => {
        //         console.log(data);
        //     });
        axios.post(url, { id: '4', name: 'Milan', lastName: 'Blaz' }).then(res => {
            console.log(res.data);
        });

        // axios.get(url).then(res => {
        //     console.log(res.data);
        //     this.setState({ posts: res.data });
        // });
    }

    render() {
        return <div />;
    }
}

export default TestServer;
