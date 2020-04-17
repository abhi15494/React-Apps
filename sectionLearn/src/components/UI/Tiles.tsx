import React from 'react'

export const Tiles = (props: any) => {
    return (
        <div className="tiles_container">
            <div className="tiles_box_outer">
                <div className="tiles_box_inner">
                    <ul className="tiles_box_list">
                        {Array.isArray(props.data) && props.data.map((value: any, index: number, arr: Array<any>) => (
                            <li key={"list_" + index} className="tiles_box_item_container">
                                <div className="tiles_box_item_outer">
                                    <div className="tiles_box_item_inner">
                                        <h3 className="tiles_box_item_title">{value.title}</h3>
                                        <h4 className="tiles_box_item_subtitle">{value.subtitle}</h4>
                                        <p className="tiles_box_item_description">{value.description}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
