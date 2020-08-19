import { observable, action } from 'mobx'


export class PaginatorStore {
    @observable selectedPage: string | null = null;
    @observable displayedPages: string[] = [];

    @action setSelectedPage (page: string) {
        this.selectedPage = page;
    }

    @action setDisplayedPages (blockWidth: number, pages: string[]) {
        const selectedFirstIndex = pages.indexOf(this.displayedPages[0]);
        const index = selectedFirstIndex > 0 ? selectedFirstIndex : 0;
        let width = 0;
        const displayElements: string[] = [];
        pages.slice(index).forEach((page: string) => {
            width += page.length * 15 + 32;
            if (width < blockWidth) {
                displayElements.push(page);
            }
        });

        if (width < blockWidth && !!index) {
            for (let ind = 0; ind < index; ind ++) {
                const page = pages[index - ind - 1];
                width += page.length * 20 + 32;
                if (width < blockWidth) {
                    displayElements.unshift(page);
                }
            }
        }
        this.displayedPages = displayElements;
    }

    lastIndex = (element: string, array: string[]) => {
        return array.lastIndexOf(element);
    }

    firstIndex = (element: string, array: string[]) => {
        return array.lastIndexOf(element);
    }

    @action slideLeft(pages: string[]) {
        let displayedPages = this.displayedPages;
        const selectedLastIndex = this.lastIndex(displayedPages[displayedPages.length - 1], pages);
        const indexLast = selectedLastIndex > 0 ? selectedLastIndex : 0;
        displayedPages = displayedPages.slice(1);
        const indexToAdd = Math.floor((indexLast + 1)%(pages.length));
        displayedPages.push(pages[indexToAdd]);
        this.displayedPages = displayedPages;
    }

    @action  slideRight(pages: string[]) {
        let displayedPages = this.displayedPages;
        const selectedFirstIndex = this.firstIndex(displayedPages[0], pages);
        const indexFirst = selectedFirstIndex > 0 ? selectedFirstIndex : 0;
        displayedPages = displayedPages.slice(0, displayedPages.length - 1);
        const indexToAdd = indexFirst - 1 >= 0 ? indexFirst - 1 : pages.length + indexFirst - 1;
        displayedPages.unshift(pages[indexToAdd]);
        this.displayedPages = displayedPages;
    }

}

const paginatorStore = new PaginatorStore();
export default paginatorStore;