import React, { useState, useEffect } from "react";

function ConversionDate({ dateString, includeHour = false }) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    function formatDate(dateString) {
      const date = new Date(dateString);

      if (isNaN(date.getTime())) {
        return "Invalid Date";
      }

      const day = date.getDate();
      const month = date.getMonth() + 1; // Adding 1 because months are zero-based
      const year = date.getFullYear();

      let formattedDateString = `${day}-${month}-${year}`;

      if (includeHour) {
        const hour = date.getHours();
        const minute = date.getMinutes();

        formattedDateString += ` ${hour}:${minute}`;
      }

      return formattedDateString;
    }

    const formattedDate = formatDate(dateString);
    setFormattedDate(formattedDate);
  }, [dateString, includeHour]);

  return (
    <div>
      {formattedDate}
    </div>
  );
}

export default ConversionDate;
