import React, {Component, createRef, RefObject, useRef} from 'react';
import './Paginator.scss';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';
import PaginatorItem from '../paginator-item/PaginatorItem';
import {inject, observer} from "mobx-react";

interface Props {
    pages: string[];
    defaultSelectedPage?: string;
}

interface State {
}
@inject("store")
@observer
export default class Paginator extends Component<any, State> {
    constructor(props: any) {
        super(props);
    }

    selectPage = (page: string) => {
        this.props.store.setSelectedPage(page);
    }

     setPaginatorRefValues = () => {
        const ref = document.getElementById("paginator__inner-content");
        const blockWidth = ref?.clientWidth ?? 0;
         this.props.store.setDisplayedPages(blockWidth, this.props.pages);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.setPaginatorRefValues();
        if (! this.props.store.selectedPage) {
            this.props.store
                .setSelectedPage(this.props.defaultSelectedPage ??  this.props.store.displayedPages[0]);
        }
    }

    handleResize = (e) => {
        this.setPaginatorRefValues();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    slideRight = () => {
        this.props.store.slideRight(this.props.pages);
    }

    slideLeft = () => {
        this.props.store.slideLeft(this.props.pages);
    }

    render () {
        const {displayedPages} =  this.props.store;
        return (
                <div className={'paginator__content'}>
                    <ChevronLeftRounded  className={'paginator__chevron'} onClick={() => this.slideLeft()}/>
                    <div className={'paginator__inner-content'}  id="paginator__inner-content">
                        {displayedPages?.map((page) => <PaginatorItem page={page} selectedPage={this.props.store.selectedPage}
                                                                      selectPage={this.selectPage}/>)}
                    </div>
                    <ChevronRightRounded  className={'paginator__chevron'} onClick={() => this.slideRight()}/>
                </div>
   )
  } 
}
