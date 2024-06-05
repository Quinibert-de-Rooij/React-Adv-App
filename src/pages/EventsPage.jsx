import React, { useState, useEffect } from "react";
//This looks promising, however doesn't give the right results.
//Has to be retried with a later version.
//import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
import { SimpleGrid } from "@chakra-ui/react";
import { EventCard } from "./pageLayout/EventCard";
import { AsyncErrorHandler } from "../ErrorHandlers/AsyncErrorHandler";

export const EventsPage = () => {
  const [EventData, setEventData] = useState([]);
  //Quinns homebrew error handler:
  const [EventError, setEventError] = useState();
  //const { isError } = useErrorBoundary();
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => {
        setEventData(data);
      })
      //  .catch((error) => console.log(error));
      .catch((error) => setEventError(error));
  }, []);
  if (EventError !== undefined) {
    return <AsyncErrorHandler error="Unable to load Event Data" />;
  }
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={2}>
      {EventData.map((event) => (
        <EventCard key={event.id} eventItem={event} />
      ))}
    </SimpleGrid>
  );
};
