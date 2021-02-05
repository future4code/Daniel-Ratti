export const goToHomePage = (history) => {
    history.push("/");
  };
  
  export const goToApplicationFormPage = (history) => {
    history.push("/application-form");
  };
  
  export const goToLogin = (history) => {
    history.push("/login");
  };
  
  export const goToListTripsPage = (history) => {
    history.push("/trips/list");
  };
  
  export const goToCreateTripsPage = (history) => {
    history.push("/trips/create");
  };
  
  export const goToTripDetailsPage = (history, id) => {
    history.push(`/trips/details/${id}`);
  };