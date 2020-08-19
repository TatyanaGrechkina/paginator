import React from "react";
import paginatorStore, {PaginatorStore} from "../../store/paginator-store";
import {Provider} from "mobx-react";

export const PaginatorContextPage = (props: any) => {
    return (
        <Provider store={paginatorStore}>
              {props.children}
        </Provider>
    )
}