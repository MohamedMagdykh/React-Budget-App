import React, { createContext,  useCallback,  useEffect, useReducer, useRef } from "react";
import { CategoriesReducer , initialState } from "services/reducers/CategoriesReducer"; 
import { getAllCategories } from "services/apis/CategoriesApi";
;

export const CategoriesContext = createContext();
export const CategoriesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CategoriesReducer, initialState);
    
const isAmountted = useRef(false);
     const getCategories =useCallback( async ()=> {
        dispatch({ type: "FETCH_START" });
      try{
         
       const getData = await getAllCategories();
        dispatch({ type: "FETCH_SUCCESS"  , payload: getData });  
      }

      catch(err){
       dispatch({ type: "FETCH_ERROR"  , payload :err.message || "Unknown error" });
      }
   
     } , []
     )

  useEffect(() => {
    if(isAmountted.current) return;
      getCategories();
      isAmountted.current = true;
  }, [getCategories]);
return (
    <CategoriesContext.Provider
      value={{
        ...state ,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
