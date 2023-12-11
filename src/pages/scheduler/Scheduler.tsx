// importing from fullCalendar
import FullCalendar from "@fullcalendar/react";
// import formatDate from "@fullcalendar/react";
// import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";

// importing from Material UI
import{
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    // useTheme
} from '@mui/material'

// importing the CSS file
import './scheduler.scss'

//importing from reaxt
import { useState } from 'react';

const Scheduler = () => {
    const [currentEvents, setCurrentEvents] = useState<any[]>([]);

    const handleDateClick = (selected : any) => {
        // replace with modal later
        const title = prompt("Please enter a new title for your event.");

        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if(title){
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStrt,
                allDay: selected.allDay
            });
        }
    };

    const handleEventClick = (selected : any) => {
        if (
          window.confirm(
            `Are you sure you want to delete the event '${selected.event.title}'`
          )
        ) {
          selected.event.remove();
        }
    };

    return (
        <Box m="20px">
            <Box mb="30px">
                <Typography
                    variant="h2"
                    color={'grey'}
                    fontWeight="bold"
                    sx={{ m: "0 0 5px 0" }}
                >
                    Calendar
                </Typography>
                <Typography variant="h5" color={"green"}>
                    Full Calendar Interactive Page
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
                {/* CALENDAR SIDEBAR  */}
                <Box p="15px" borderRadius="15px" flex="1 1 20%">
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => (
                            <ListItem
                                key={event.id}
                                sx = {{
                                    backgroundColor: "grey", 
                                    margin: "10px 0", 
                                    borderRadius: "2px"
                                }}
                            >
                                <ListItemText
                                    primary={event.title}
                                    secondary={<div>{event.start.toDateString()}</div>}
                                        // <Typography>
                                        //     {event.start}
                                        // </Typography>
                                >
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                {/* Calendar */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar 
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar ={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                        initialEvents={[
                            {
                                id: "12315",
                                title: "ORDS Discussion",
                                start  : '2023-12-12T09:00:00',
                                allDay : false
                              },
                              {
                                id: "5123",
                                title: "Bank Visit",
                                start  : '2023-12-12T12:00:00',
                                allDay : false
                              },
                        ]}
                    >
                    </FullCalendar>
                </Box>
            </Box>
        </Box>
    );
};

export default Scheduler;