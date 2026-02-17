import { useEffect, useState } from "react";

function DateTime() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const day = now
    .toLocaleString("en-US", { weekday: "short" })
    .toLowerCase();

  const month = now
    .toLocaleString("en-US", { month: "short" })
    .toLowerCase();

  const date = now.getDate();

  const time = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return <span>{`${day} ${month} ${date} ${time}`}</span>;
}

export default DateTime;
