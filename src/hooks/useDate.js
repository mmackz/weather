import { useEffect, useState } from "react";

export const useDate = () => {
   const locale = "en";
   const [today, setDate] = useState(); 

   useEffect(() => {
      setDate(new Date());
      const timer = setInterval(() => {
         setDate(new Date());
      }, 60 * 1000);
      return () => {
         clearInterval(timer);
      };
   }, []);

   const day = today?.toLocaleDateString(locale, { weekday: "long" });
   const date = `${day}, ${today?.getDate()} ${today?.toLocaleDateString(locale, {
      month: "long"
   })}, ${today?.getFullYear()}\n\n`;

   const hour = today?.getHours();
   const greeting = `Good ${
      (hour < 12 && "Morning") || (hour < 17 && "morning") || "Evening"
   }!`;

   const time = today?.toLocaleTimeString(locale, {
      hour: "numeric",
      hour12: true,
      minute: "numeric"
   });

   return {
      date,
      time,
      greeting
   };
};
