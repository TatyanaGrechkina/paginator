import React from 'react';
import '../paginator/Paginator.scss';
import classNames from "classnames";

type Props = {
    page: string;
    selectedPage: string | null;
    selectPage: (page: string) => void;
}
const PaginatorItem = (props: Props) => {
    return (<button className={classNames("paginator__item", props.selectedPage ===  props.page && "paginator__item--selected")}
                onClick={() => props.selectPage(props.page)}>
           {props.page}
        </button>)
}


export default PaginatorItem;