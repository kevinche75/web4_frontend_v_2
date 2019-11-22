import React from 'react'
import PropTypes from 'prop-types'

export class Header extends React.Component{
    render() {
        const { firstName, secondName, patronymicName, variant, topic } = this.props
        return (
            <div className="header">
                <p>
                    {topic}
                </p>
                <p>
                    {secondName}
                <br/>
                    {firstName}
                <br/>
                    {patronymicName}
                <br/>
                    Variant: {variant}
                </p>
            </div>
        )
    }
}

Header.propTypes = {
    firstName: PropTypes.string.isRequired,
    secondName: PropTypes.string.isRequired,
    patronymicName: PropTypes.string.isRequired,
    variant: PropTypes.number.isRequired,
    topic: PropTypes.string.isRequired
}