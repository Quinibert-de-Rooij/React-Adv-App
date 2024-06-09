//This file is to try and catch data

export const RouterData = async () => {
  try {
    const EventData = await fetch("http://localhost:3000/events");
    const UserData = await fetch("http://localhost:3000/users");
    const CategoryData = await fetch("http://localhost:3000/categories");
    const ErrorMessage = "";
    //Return an error value, to have a variable, that can be checked to throw an error yes, or no.
    return {
      EventData: await EventData.json(),
      UserData: await UserData.json(),
      CategoryData: await CategoryData.json(),
      ErrorMessage,
    };
  } catch (error) {
    const ErrorMessage =
      "There was a problem loading data. Make sure the json server is running, using: localhost:3000";
    //Returning empty data sets, to prevent pages from throwing errors:
    const EventData = [];
    const UserData = [];
    const CategoryData = [];
    return { ErrorMessage, EventData, UserData, CategoryData };
  }
};
