import React from 'react'

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

