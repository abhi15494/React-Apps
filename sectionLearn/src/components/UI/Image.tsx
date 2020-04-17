import React from 'react'

export const Image = (props: any) => {
    if (props.data) {
        return (
            <div className="image_container">
                <div className="image_box_outer">
                    <div className="image_box_inner">
                        <picture>
                            <source media="(min-width: 650px)" srcSet={props.data.desktop} />
                            <source media="(min-width: 465px)" srcSet={props.data.tablet} />
                            <img className="image_box_img" src={props.data.mobile} alt="Flowers" />
                        </picture>
                    </div>
                </div>
            </div>
        )
    } else return <div></div>
}
