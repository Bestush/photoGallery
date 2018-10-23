import React from 'react'
import axios from 'axios'
import Layout from '../components/layout'
import '../styles/style.css'

export default class Gallery extends React.Component {
    state = {
        link: [],
        slidesRunning: false,
        activeIndex: 0
    };

    componentDidMount() {
        axios.get("http://localhost:3000/posts")
            .then(res => {
                console.log(res.data)
                this.setState({ link: res.data, slidesRunning: true })
            })

        this.handle = setInterval(() => {
            if (!this.state.slidesRunning) return;

            this.setState({
                activeIndex: (this.state.activeIndex + 1) % this.state.link.length
            })
        }, 5000);
    }

    get imgs() {
        return this.state.link.map(x => x.img)
    }



    renderCurrentSlide = () => {
        return this.state.link.map((l, i) => (
            <div className={i === this.state.activeIndex ? 'active slide' : 'slide'}><img src={l.img}></img>
            <div className="label">
            <h3>l.title</h3>
            <p>l.author</p>
            </div></div>
        ))
    }

    addImage = () => {
        
    }

    render() {
        console.log(this.imgs)

        this.renderCurrentSlide()
        return (
            <Layout>
                <div className="img-slideshow">
                    <this.renderCurrentSlide />
                </div>
            </Layout>
        );
    }
}

