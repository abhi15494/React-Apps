import React from 'react'

export const Heading = (props: any) => {
    if (props && props.data) {
        return (
            <div className="heading_container">
                <div className="heading_box_outer">
                    <div className="heading_box_inner">
                        <h2 className="heading_box_title">
                            {props.data.title}
                        </h2>
                        <h3 className="heading_box_subtitle">
                            {props.data.subtitle}
                        </h3>
                        <p className="heading_box_description">
                            {props.data.description}
                        </p>
                    </div>
                </div>
            </div>
        )
    } else return <div></div>;
}
