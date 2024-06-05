//Accordingly this error handler, should return the error tot the boundry directly.
//This way when an error occurs it throws the home made error
import { useErrorHandler } from "react-error-boundary";

export const getEventData = async () => {
  const handleError = useErrorHandler();
  try {
    const eventData = await fetch("http://localhost:3000/events");
    return { eventData: await eventData.json() };
  } catch (error) {
    handleError(error);
  }
};
