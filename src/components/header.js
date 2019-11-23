import React from 'react'

export class Header extends React.Component{
    render() {
        const { firstName, secondName, patronymicName, variant, topic, style } = this.props;
        return (
            <div className="header" style={style.style.header.main}>
                <div className="topic" style={style.style.header.topic}>
                        {topic}
                </div>
                <div className="information" style={style.style.header.information}>
                        {secondName}
                        <br/>
                        {firstName}
                        <br/>
                        {patronymicName}
                        <br/>
                        VARIANT: {variant}
                </div>
            </div>
        )
    }
}

