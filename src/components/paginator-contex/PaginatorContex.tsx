import React from "react";
import Paginator from "../paginator/Paginator";
import paginatorStore from "../../store/paginator-store";

export const PaginatorContext= React.createContext<any>(null);


export const PaginatorContextPage = (props: any) => {
    return (
        <PaginatorContext.Provider value={paginatorStore}>
              {props.children}
        </PaginatorContext.Provider>
    )
}