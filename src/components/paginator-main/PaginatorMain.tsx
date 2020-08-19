import React from 'react';
import '../paginator/Paginator.scss';
import classNames from "classnames";
import {PaginatorContextPage} from "../paginator-contex/PaginatorContex";
import Paginator from "../paginator/Paginator";

type Props = {
    pages: string[];
}
const PaginatorMain = (props: Props) => {
    return (<PaginatorContextPage>
             <Paginator pages={props.pages} />
          </PaginatorContextPage>)
}


export default PaginatorMain;