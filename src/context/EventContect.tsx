import { createContext, useContext } from "react";
import type { EventContextType } from "../types";

type TypeProviderProps ={
    children : React.ReactNode
}

const EventContext = createContext<undefined | EventContextType >(undefined)

export default function EventProvider ({children} : TypeProviderProps){

    const [state, dispatch] = useReducer(eventReducer, getInitialState());

  function addEvent(eventData: Omit<Event, "id">) {
    const newEvent: Event = {
      ...eventData,
      id: crypto.randomUUID(),
    };

    dispatch({ type: "ADD_EVENT", payload: newEvent });
  }

  const value = {
    state, 
    dispatch,
    addEvent
  }

    return <EventContext.Provider value={value} >
        {children}
    </EventContext.Provider>
}

export function useEventContext(){
    const context = useContext(EventContext)
    if(context === undefined){
        throw new Error("useEventContext must be within an EventProvider")
    }
    return context
}