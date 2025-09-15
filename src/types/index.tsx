export type Attendee = {
    email: string,
    status: "Yes" | "No" | "Maybe"
}

export type Event = {
    id: string,
    title : string,
    description: string,
    date: string,
    time: string,
    location: string,
    attendees: Attendee[]
}   

export type EventState ={
    event : Event[]
}

export type EventAction ={
    type: "ADD_EVENT"  , payload: Event
}

export type EventContextType = {
    state: EventState,
    dispatch : React.Dispatch<EventAction>,
    addEvent :  (event: Omit<Event, "id">) => void
}