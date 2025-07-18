export const extractNumbers = (text = "") => {
    return text.replace(/\D/g, "");
  };
  
  export const formatDate = (input) => {
    const date = new Date(input);
  
    const year = date.getFullYear();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
  
    return `${day}-${month}-${year}`;
  };