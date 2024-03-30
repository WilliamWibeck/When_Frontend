import React, { useEffect, useState } from "react";
import "./Timeline.scss";
import { ITimeLineData } from "../../interfaces/ITimeLineData";
import EventCard from "../EventCard/EventCard";
import { common } from "@mui/material/colors";
import { Button } from "@mui/material";

export default function Timeline() {
  const [drawnCard, setDrawnCard] = useState<ITimeLineData[]>([]);

  const [placedCards, setPlacedCards] = useState<ITimeLineData[]>([]);

  const TimelineDataExample: ITimeLineData[] = [
    {
      name: "French Revolution",
      year: 1789,
      desc: "The French revolution started in 1789 and resulted in the end of the french monarchy and the execution of Louis XVI and Marie Antoinette",
    },
    {
      name: "American Independance",
      year: 1776,
      desc: "The United States celebrates Independence Day on July 4th to commemorate the adoption of the Declaration of Independence in 1776, marking the official separation of the thirteen colonies from Great Britain.",
    },
    {
      name: "The assassination of JFK",
      year: 1963,
      desc: "On November 22nd, 1963, President John F. Kennedy was assassinated while riding in a motorcade in Dallas, Texas. The event remains a national tragedy and a subject of ongoing historical debate and conspiracy theories",
    },
  ];
  const [events, setEvents] = useState<ITimeLineData[]>(TimelineDataExample);
  const [filteredEvents, setFilteredEvents] = useState<ITimeLineData[]>([]);

  const placeEventCard = (drawnCard: ITimeLineData) => {
    setPlacedCards([...placedCards, drawnCard]);
    drawRandomEvent(filteredEvents);
    console.log("Drawn Card state after PlaceEventCard:", drawnCard);
  };

  const drawRandomEvent = (events: ITimeLineData[]) => {
    if (events.length === 0) {
      console.log("No events left to draw");
      return;
    } else {
      console.log(events);
    }

    const randomIndex: number = Math.floor(Math.random() * events.length);
    const randomEvent: ITimeLineData = events[randomIndex];
    setDrawnCard([randomEvent]);
  };
  useEffect(() => {
    drawRandomEvent(events);
  }, [events]);

  useEffect(() => {
    setFilteredEvents(
      TimelineDataExample.filter((event) => !placedCards.includes(event))
    );
  }, [placedCards]);

  const handlePlayClick = () => {
    const cardToPlace: ITimeLineData = drawnCard[0]; // Access the first event
    placeEventCard(cardToPlace);
  };

  const logtoconsole = () => {
    console.log("EVENTS:", events);
    console.log("DRAWNCARD:", drawnCard);
    console.log("PLACEDCARDS:", placedCards);

    console.log("FILTEREDEVENTS:", filteredEvents);
  };

  return (
    <div className="Timeline">
      <div id="PlacedCardHolder">
        <EventCard data={TimelineDataExample} />
      </div>
      <div id="DrawnCardHolder">
        <EventCard data={drawnCard} />
      </div>
      <div className="ButtonHolder">
        <Button>LOCK</Button>
        <Button onClick={handlePlayClick}>PLAY</Button>
        <Button onClick={logtoconsole}>LOG</Button>
      </div>
    </div>
  );
}
