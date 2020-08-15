import React from 'react';
import '../paginator/Paginator.scss';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';

type Props = {
    page: string;
}

const PaginatorItem = (props: Props) => {
    return (
        <div className={'paginator__item'}>
        {props.page}
    </div>)
}

export default PaginatorItem;