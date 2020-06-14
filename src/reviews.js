import React, {Component} from 'react';
class Reviews extends Component{
    render() {
        return (
            <div>
                <h2>Year-in-Review</h2>
                <div className="2019">
                    <h3>2019</h3>
                    <p>Please look following PDF.</p>
                    <a href="/static/files/YiR2019.pdf">Download or View YiR2019 PDF(11KB)</a>
                </div>
            </div>
        );
    }
}

export default Reviews;
