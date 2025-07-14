import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface LiveTimestampProps {
  className?: string;
  showSeconds?: boolean;
  prefix?: string;
}

export function LiveTimestamp({
  className = "",
  showSeconds = true,
  prefix = "Live Update:",
}: LiveTimestampProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(
      () => {
        setCurrentTime(new Date());
      },
      showSeconds ? 1000 : 60000,
    ); // Update every second if showing seconds, otherwise every minute

    return () => clearInterval(timer);
  }, [showSeconds]);

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      ...(showSeconds && { second: "2-digit" }),
      timeZoneName: "short",
      timeZone: "Africa/Lagos", // Nigerian time
    };

    return date.toLocaleString("en-NG", options);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Clock className="w-4 h-4 text-green-600 animate-pulse" />
      <span className="text-sm font-medium text-gray-700">
        {prefix} {formatTime(currentTime)}
      </span>
    </div>
  );
}

export function LiveNewsTimestamp() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000); // Update every 30 seconds for news

    return () => clearInterval(timer);
  }, []);

  const formatNewsTime = (date: Date) => {
    const lagosTime = new Date(
      date.toLocaleString("en-US", { timeZone: "Africa/Lagos" }),
    );
    const hours = lagosTime.getHours();
    const minutes = lagosTime.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;

    return `${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm} WAT`;
  };

  const formatNewsDate = (date: Date) => {
    return date.toLocaleDateString("en-NG", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Africa/Lagos",
    });
  };

  return (
    <div className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
      <span className="text-sm font-semibold">LIVE</span>
      <span className="text-sm">
        {formatNewsDate(currentTime)} • {formatNewsTime(currentTime)}
      </span>
    </div>
  );
}
