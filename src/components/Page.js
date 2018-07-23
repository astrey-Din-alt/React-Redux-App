import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.getPhotos(+e.target.innerText)
    }
    render() {
        const { year, photos, fetching } = this.props
        return <div className='ib page'>
            <p>
                <button onClick={this.onYearBtnClick.bind(this)}>2016</button>{' '}
                <button onClick={this.onYearBtnClick.bind(this)}>2015</button>{' '}
                <button onClick={this.onYearBtnClick.bind(this)}>2014</button>
            </p>
            <h3>{year} year</h3>
            {
                fetching ?
                    <p>Loading...</p> :
                    <p>You have {photos.length} photos.</p>
            }
        </div>
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired
}