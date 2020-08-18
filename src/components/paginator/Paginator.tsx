import React, {Component, createRef, RefObject, useRef} from 'react';
import './Paginator.scss';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';
import PaginatorItem from '../paginator-item/PaginatorItem';
import {observer, useObserver} from "mobx-react";
import paginatorStore from "../../store/paginator-store";

interface Props {
    pages: string[];
    defaultSelectedPage?: string;
}

interface State {
}

@observer
class Paginator extends Component<Props, State> {
    private paginatorStore = paginatorStore;
    constructor(props: Props) {
        super(props);
    }

    selectPage = (page: string) => {
        this.paginatorStore.setSelectedPage(page);
    }

     setPaginatorRefValues = () => {
        const ref = document.getElementById("paginator__inner-content");
        const blockWidth = ref?.clientWidth ?? 0;
         this.paginatorStore.setDisplayedPages(blockWidth, this.props.pages);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.setPaginatorRefValues();
        if (! this.paginatorStore.selectedPage) {
            this.paginatorStore
                .setSelectedPage(this.props.defaultSelectedPage ??  this.paginatorStore.displayedPages[0]);
        }
    }

    handleResize = (e) => {
        this.setPaginatorRefValues();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    slideRight = () => {
        this.paginatorStore.slideRight(this.props.pages);
    }

    slideLeft = () => {
        this.paginatorStore.slideLeft(this.props.pages);
    }

    render () {
        const {displayedPages} =  this.paginatorStore;
        return (
                <div className={'paginator__content'}>
                    <ChevronLeftRounded  className={'paginator__chevron'} onClick={() => this.slideLeft()}/>
                    <div className={'paginator__inner-content'}  id="paginator__inner-content">
                        {displayedPages?.map((page) => <PaginatorItem page={page} selectedPage={this.paginatorStore.selectedPage}
                                                                      selectPage={this.selectPage}/>)}
                    </div>
                    <ChevronRightRounded  className={'paginator__chevron'} onClick={() => this.slideRight()}/>
                </div>
   )
  } 
}
export default Paginator;
