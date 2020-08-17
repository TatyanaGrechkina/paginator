import React, {Component, createRef, RefObject, useRef} from 'react';
import './Paginator.scss';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';
import PaginatorItem from '../paginator-item/PaginatorItem';

interface Props {
    pages: string[];
}

interface State {
    blockWidth: number;
    selectedPage: string;
    displayedPages: string[];
}

class Paginator extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            blockWidth: 0,
            selectedPage: props && props.pages && props.pages[1],
            displayedPages: [],
        }
    }

     setPaginatorRefValues = () => {
        const ref = document.getElementById("paginator__inner-content");
        const blockWidth = ref?.clientWidth ?? 0;
        const selectedFirstIndex = this.props.pages.indexOf(this.state.selectedPage);
        const index = selectedFirstIndex >= 0 && selectedFirstIndex || 0;
        let width = 0;
        const displayElements: string[] = [];
        this.props.pages.slice(index).forEach((page: string) => {
            width += page.length * 15 + 32;
            if (width < blockWidth) {
                displayElements.push(page);
            }
        });

        if (width < blockWidth && !!index) {
            for (let ind = 0; ind < index; ind ++) {
                const page = this.props.pages[index - ind - 1];
                width += page.length * 15 + 32;
                if (width < blockWidth) {
                    displayElements.unshift(page);
                }
            }
        }

        this.setState({
            blockWidth: blockWidth,
            displayedPages: !!displayElements ? displayElements : [],
        })
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.setPaginatorRefValues();
    }

    handleResize = (e) => {
        this.setPaginatorRefValues();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    render () {
        const {displayedPages} = this.state;
        return (
        <div className={'paginator__content'}>
            <ChevronLeftRounded  className={'paginator__chevron'}/>
            <div className={'paginator__inner-content'}  id="paginator__inner-content">
                {displayedPages?.map((page) => <PaginatorItem page={page} />)}
            </div>
            <ChevronRightRounded  className={'paginator__chevron'}/>
        </div>)
  } 
}
export default Paginator;
