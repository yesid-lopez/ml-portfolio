export const formatDateString = (dateString: string) => {
    // Parse the input date string into a Date object
    const date = new Date(dateString);
    
    // Check for Invalid Date
    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }
  
    // Convert to format "Month Year"
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'long', // full name of the month
      year: 'numeric' // numeric year
    });
  
    return formattedDate;
  }
  
  