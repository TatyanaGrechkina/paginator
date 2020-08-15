import React, {Component} from 'react';
import './Paginator.scss';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';
import PaginatorItem from '../paginator-item/PaginatorItem';

interface Props {
    pages: string[];
}

class Paginator extends Component<Props, any> {

    constructor(props: Props) {
        super(props);
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
    }
    handleResize(e) {
        console.log(window.innerWidth);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    render () {
        const {pages} = this.props;
        return (
        <div className={'paginator'}>
        <div className={'paginator__content'}>
            <ChevronLeftRounded  className={'paginator__chevron'}/>
            <div className={'paginator__elements'}>
                {pages?.map((page) => <PaginatorItem page={page} />)}
            </div>
            <ChevronRightRounded  className={'paginator__chevron'}/>
        </div>
        </div>)
  } 
}
export default Paginator;
