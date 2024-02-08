"use client";

import Hero from "@/sections/events-page/hero";
import CategoryPicker from "@/sections/events-page/categoryPicker";
import EventsSection from "@/sections/events-page/eventsSection";
import Footer from "@/sections/footer/footer";

import { useState } from "react";
import EventModal from "@/components/events-page/EventModal";

const categories = [
  {
    name: "All Events",
    color: "#202020",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Tamil Lit.",
    color: "#DB2525",
  },
  {
    name: "Photography",
    color: "#00644C",
  },
];

const events = [
  {
    title: "Tamil Lit. Event",
    dayDetail: "8 Mar",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
    perTeam: 2,
    prize: [
      { place: "FIRST", amount: 5000 },
      { place: "SECOND", amount: 2500 },
      { place: "THIRD", amount: 1500 },
    ],
    description: `Get your dance partner to duke it out with the best hip hop
            freestyle dancers in the city. Watch the crowd roar as you showcase
            your best moves in the cypher.`,
    rules: [
      "Team of 2.",
      "Time limit : 60-120 seconds per team.",
      "Pairs will be pitted against each other at random.",
      "Team dynamics, cohesion of groove, creativity and audience response will be judged.",
      "Usage of props is allowed.",
      "Obscenity and vulgarity will not be entertained.",
      "Inflammable objects, water and heavy objects are not allowed on stage.",
      "Decisions of the judges and coordinators will be final and binding.",
      "The Organizing Committee reserves the right to modify the event at any point.",
    ],
    contacts: ["9876346765", "8973257889"],
    eventDetail: `Step into the vibrant world of our Western Dance Club, where every
              movement ignites the spirit of celebration! Embracing the theme of
              "Viva La Fiesta," our dancers fuse passion with rhythm, delivering
              electrifying performances that transport you to the heart of a
              lively fiesta. With dynamic choreography and infectious energy, we
              invite you to join us on a journey filled with pulsating beats and
              sizzling moves, where every step is a celebration of life and
              culture. Get ready to unleash your inner dancer and let the fiesta
              begin!`,
    clubDetails: [
      { name: "N2K", img: "/events-page/event-dummy.png" },
      { name: "Rhythm", img: "/events-page/event-dummy.png" },
    ],
    fee: 100,
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "8 Mar",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
    perTeam: 2,
    prize: [
      { place: "FIRST", amount: 5000 },
      { place: "SECOND", amount: 2500 },
      { place: "THIRD", amount: 1500 },
    ],
    description: `Get your dance partner to duke it out with the best hip hop
            freestyle dancers in the city. Watch the crowd roar as you showcase
            your best moves in the cypher.`,
    rules: [
      "Team of 2.",
      "Time limit : 60-120 seconds per team.",
      "Pairs will be pitted against each other at random.",
      "Team dynamics, cohesion of groove, creativity and audience response will be judged.",
      "Usage of props is allowed.",
      "Obscenity and vulgarity will not be entertained.",
      "Inflammable objects, water and heavy objects are not allowed on stage.",
      "Decisions of the judges and coordinators will be final and binding.",
      "The Organizing Committee reserves the right to modify the event at any point.",
    ],
    contacts: ["9876346765", "8973257889"],
    eventDetail: `Step into the vibrant world of our Western Dance Club, where every
              movement ignites the spirit of celebration! Embracing the theme of
              "Viva La Fiesta," our dancers fuse passion with rhythm, delivering
              electrifying performances that transport you to the heart of a
              lively fiesta. With dynamic choreography and infectious energy, we
              invite you to join us on a journey filled with pulsating beats and
              sizzling moves, where every step is a celebration of life and
              culture. Get ready to unleash your inner dancer and let the fiesta
              begin!`,
    clubDetails: [
      { name: "N2K", img: "/events-page/event-dummy.png" },
      { name: "Rhythm", img: "/events-page/event-dummy.png" },
    ],
    fee: 100,
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "8 Mar",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
    perTeam: 2,
    prize: [
      { place: "FIRST", amount: 5000 },
      { place: "SECOND", amount: 2500 },
      { place: "THIRD", amount: 1500 },
    ],
    description: `Get your dance partner to duke it out with the best hip hop
            freestyle dancers in the city. Watch the crowd roar as you showcase
            your best moves in the cypher.`,
    rules: [
      "Team of 2.",
      "Time limit : 60-120 seconds per team.",
      "Pairs will be pitted against each other at random.",
      "Team dynamics, cohesion of groove, creativity and audience response will be judged.",
      "Usage of props is allowed.",
      "Obscenity and vulgarity will not be entertained.",
      "Inflammable objects, water and heavy objects are not allowed on stage.",
      "Decisions of the judges and coordinators will be final and binding.",
      "The Organizing Committee reserves the right to modify the event at any point.",
    ],
    contacts: ["9876346765", "8973257889"],
    eventDetail: `Step into the vibrant world of our Western Dance Club, where every
              movement ignites the spirit of celebration! Embracing the theme of
              "Viva La Fiesta," our dancers fuse passion with rhythm, delivering
              electrifying performances that transport you to the heart of a
              lively fiesta. With dynamic choreography and infectious energy, we
              invite you to join us on a journey filled with pulsating beats and
              sizzling moves, where every step is a celebration of life and
              culture. Get ready to unleash your inner dancer and let the fiesta
              begin!`,
    clubDetails: [
      { name: "N2K", img: "/events-page/event-dummy.png" },
      { name: "Rhythm", img: "/events-page/event-dummy.png" },
    ],
    fee: 100,
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "8 Mar",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
    perTeam: 2,
    prize: [
      { place: "FIRST", amount: 5000 },
      { place: "SECOND", amount: 2500 },
      { place: "THIRD", amount: 1500 },
    ],
    description: `Get your dance partner to duke it out with the best hip hop
            freestyle dancers in the city. Watch the crowd roar as you showcase
            your best moves in the cypher.`,
    rules: [
      "Team of 2.",
      "Time limit : 60-120 seconds per team.",
      "Pairs will be pitted against each other at random.",
      "Team dynamics, cohesion of groove, creativity and audience response will be judged.",
      "Usage of props is allowed.",
      "Obscenity and vulgarity will not be entertained.",
      "Inflammable objects, water and heavy objects are not allowed on stage.",
      "Decisions of the judges and coordinators will be final and binding.",
      "The Organizing Committee reserves the right to modify the event at any point.",
    ],
    contacts: ["9876346765", "8973257889"],
    eventDetail: `Step into the vibrant world of our Western Dance Club, where every
              movement ignites the spirit of celebration! Embracing the theme of
              "Viva La Fiesta," our dancers fuse passion with rhythm, delivering
              electrifying performances that transport you to the heart of a
              lively fiesta. With dynamic choreography and infectious energy, we
              invite you to join us on a journey filled with pulsating beats and
              sizzling moves, where every step is a celebration of life and
              culture. Get ready to unleash your inner dancer and let the fiesta
              begin!`,
    clubDetails: [
      { name: "N2K", img: "/events-page/event-dummy.png" },
      { name: "Rhythm", img: "/events-page/event-dummy.png" },
    ],
    fee: 100,
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "8 Mar",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
    perTeam: 2,
    prize: [
      { place: "FIRST", amount: 5000 },
      { place: "SECOND", amount: 2500 },
      { place: "THIRD", amount: 1500 },
    ],
    description: `Get your dance partner to duke it out with the best hip hop
            freestyle dancers in the city. Watch the crowd roar as you showcase
            your best moves in the cypher.`,
    rules: [
      "Team of 2.",
      "Time limit : 60-120 seconds per team.",
      "Pairs will be pitted against each other at random.",
      "Team dynamics, cohesion of groove, creativity and audience response will be judged.",
      "Usage of props is allowed.",
      "Obscenity and vulgarity will not be entertained.",
      "Inflammable objects, water and heavy objects are not allowed on stage.",
      "Decisions of the judges and coordinators will be final and binding.",
      "The Organizing Committee reserves the right to modify the event at any point.",
    ],
    contacts: ["9876346765", "8973257889"],
    eventDetail: `Step into the vibrant world of our Western Dance Club, where every
              movement ignites the spirit of celebration! Embracing the theme of
              "Viva La Fiesta," our dancers fuse passion with rhythm, delivering
              electrifying performances that transport you to the heart of a
              lively fiesta. With dynamic choreography and infectious energy, we
              invite you to join us on a journey filled with pulsating beats and
              sizzling moves, where every step is a celebration of life and
              culture. Get ready to unleash your inner dancer and let the fiesta
              begin!`,
    clubDetails: [
      { name: "N2K", img: "/events-page/event-dummy.png" },
      { name: "Rhythm", img: "/events-page/event-dummy.png" },
    ],
    fee: 100,
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "8 Mar",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
    perTeam: 2,
    prize: [
      { place: "FIRST", amount: 5000 },
      { place: "SECOND", amount: 2500 },
      { place: "THIRD", amount: 1500 },
    ],
    description: `Get your dance partner to duke it out with the best hip hop
            freestyle dancers in the city. Watch the crowd roar as you showcase
            your best moves in the cypher.`,
    rules: [
      "Team of 2.",
      "Time limit : 60-120 seconds per team.",
      "Pairs will be pitted against each other at random.",
      "Team dynamics, cohesion of groove, creativity and audience response will be judged.",
      "Usage of props is allowed.",
      "Obscenity and vulgarity will not be entertained.",
      "Inflammable objects, water and heavy objects are not allowed on stage.",
      "Decisions of the judges and coordinators will be final and binding.",
      "The Organizing Committee reserves the right to modify the event at any point.",
    ],
    contacts: ["9876346765", "8973257889"],
    eventDetail: `Step into the vibrant world of our Western Dance Club, where every
              movement ignites the spirit of celebration! Embracing the theme of
              "Viva La Fiesta," our dancers fuse passion with rhythm, delivering
              electrifying performances that transport you to the heart of a
              lively fiesta. With dynamic choreography and infectious energy, we
              invite you to join us on a journey filled with pulsating beats and
              sizzling moves, where every step is a celebration of life and
              culture. Get ready to unleash your inner dancer and let the fiesta
              begin!`,
    clubDetails: [
      { name: "N2K", img: "/events-page/event-dummy.png" },
      { name: "Rhythm", img: "/events-page/event-dummy.png" },
    ],
    fee: 100,
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "8 Mar",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
    perTeam: 2,
    prize: [
      { place: "FIRST", amount: 5000 },
      { place: "SECOND", amount: 2500 },
      { place: "THIRD", amount: 1500 },
    ],
    description: `Get your dance partner to duke it out with the best hip hop
            freestyle dancers in the city. Watch the crowd roar as you showcase
            your best moves in the cypher.`,
    rules: [
      "Team of 2.",
      "Time limit : 60-120 seconds per team.",
      "Pairs will be pitted against each other at random.",
      "Team dynamics, cohesion of groove, creativity and audience response will be judged.",
      "Usage of props is allowed.",
      "Obscenity and vulgarity will not be entertained.",
      "Inflammable objects, water and heavy objects are not allowed on stage.",
      "Decisions of the judges and coordinators will be final and binding.",
      "The Organizing Committee reserves the right to modify the event at any point.",
    ],
    contacts: ["9876346765", "8973257889"],
    eventDetail: `Step into the vibrant world of our Western Dance Club, where every
              movement ignites the spirit of celebration! Embracing the theme of
              "Viva La Fiesta," our dancers fuse passion with rhythm, delivering
              electrifying performances that transport you to the heart of a
              lively fiesta. With dynamic choreography and infectious energy, we
              invite you to join us on a journey filled with pulsating beats and
              sizzling moves, where every step is a celebration of life and
              culture. Get ready to unleash your inner dancer and let the fiesta
              begin!`,
    clubDetails: [
      { name: "N2K", img: "/events-page/event-dummy.png" },
      { name: "Rhythm", img: "/events-page/event-dummy.png" },
    ],
    fee: 100,
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "8 Mar",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
    perTeam: 2,
    prize: [
      { place: "FIRST", amount: 5000 },
      { place: "SECOND", amount: 2500 },
      { place: "THIRD", amount: 1500 },
    ],
    description: `Get your dance partner to duke it out with the best hip hop
            freestyle dancers in the city. Watch the crowd roar as you showcase
            your best moves in the cypher.`,
    rules: [
      "Team of 2.",
      "Time limit : 60-120 seconds per team.",
      "Pairs will be pitted against each other at random.",
      "Team dynamics, cohesion of groove, creativity and audience response will be judged.",
      "Usage of props is allowed.",
      "Obscenity and vulgarity will not be entertained.",
      "Inflammable objects, water and heavy objects are not allowed on stage.",
      "Decisions of the judges and coordinators will be final and binding.",
      "The Organizing Committee reserves the right to modify the event at any point.",
    ],
    contacts: ["9876346765", "8973257889"],
    eventDetail: `Step into the vibrant world of our Western Dance Club, where every
              movement ignites the spirit of celebration! Embracing the theme of
              "Viva La Fiesta," our dancers fuse passion with rhythm, delivering
              electrifying performances that transport you to the heart of a
              lively fiesta. With dynamic choreography and infectious energy, we
              invite you to join us on a journey filled with pulsating beats and
              sizzling moves, where every step is a celebration of life and
              culture. Get ready to unleash your inner dancer and let the fiesta
              begin!`,
    clubDetails: [
      { name: "N2K", img: "/events-page/event-dummy.png" },
      { name: "Rhythm", img: "/events-page/event-dummy.png" },
    ],
    fee: 100,
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "8 Mar",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
    perTeam: 2,
    prize: [
      { place: "FIRST", amount: 5000 },
      { place: "SECOND", amount: 2500 },
      { place: "THIRD", amount: 1500 },
    ],
    description: `Get your dance partner to duke it out with the best hip hop
            freestyle dancers in the city. Watch the crowd roar as you showcase
            your best moves in the cypher.`,
    rules: [
      "Team of 2.",
      "Time limit : 60-120 seconds per team.",
      "Pairs will be pitted against each other at random.",
      "Team dynamics, cohesion of groove, creativity and audience response will be judged.",
      "Usage of props is allowed.",
      "Obscenity and vulgarity will not be entertained.",
      "Inflammable objects, water and heavy objects are not allowed on stage.",
      "Decisions of the judges and coordinators will be final and binding.",
      "The Organizing Committee reserves the right to modify the event at any point.",
    ],
    contacts: ["9876346765", "8973257889"],
    eventDetail: `Step into the vibrant world of our Western Dance Club, where every
              movement ignites the spirit of celebration! Embracing the theme of
              "Viva La Fiesta," our dancers fuse passion with rhythm, delivering
              electrifying performances that transport you to the heart of a
              lively fiesta. With dynamic choreography and infectious energy, we
              invite you to join us on a journey filled with pulsating beats and
              sizzling moves, where every step is a celebration of life and
              culture. Get ready to unleash your inner dancer and let the fiesta
              begin!`,
    clubDetails: [
      { name: "N2K", img: "/events-page/event-dummy.png" },
      { name: "Rhythm", img: "/events-page/event-dummy.png" },
    ],
    fee: 100,
  },
  {
    title: "Tamil Lit. Event",
    dayDetail: "8 Mar",
    category: "Tamil Lit.",
    image: "/events-page/event-dummy.png",
    color: "#DB2525",
    perTeam: 2,
    prize: [
      { place: "FIRST", amount: 5000 },
      { place: "SECOND", amount: 2500 },
      { place: "THIRD", amount: 1500 },
    ],
    description: `Get your dance partner to duke it out with the best hip hop
            freestyle dancers in the city. Watch the crowd roar as you showcase
            your best moves in the cypher.`,
    rules: [
      "Team of 2.",
      "Time limit : 60-120 seconds per team.",
      "Pairs will be pitted against each other at random.",
      "Team dynamics, cohesion of groove, creativity and audience response will be judged.",
      "Usage of props is allowed.",
      "Obscenity and vulgarity will not be entertained.",
      "Inflammable objects, water and heavy objects are not allowed on stage.",
      "Decisions of the judges and coordinators will be final and binding.",
      "The Organizing Committee reserves the right to modify the event at any point.",
    ],
    contacts: ["9876346765", "8973257889"],
    eventDetail: `Step into the vibrant world of our Western Dance Club, where every
              movement ignites the spirit of celebration! Embracing the theme of
              "Viva La Fiesta," our dancers fuse passion with rhythm, delivering
              electrifying performances that transport you to the heart of a
              lively fiesta. With dynamic choreography and infectious energy, we
              invite you to join us on a journey filled with pulsating beats and
              sizzling moves, where every step is a celebration of life and
              culture. Get ready to unleash your inner dancer and let the fiesta
              begin!`,
    clubDetails: [
      { name: "N2K", img: "/events-page/event-dummy.png" },
      { name: "Rhythm", img: "/events-page/event-dummy.png" },
    ],
    fee: 100,
  },
  {
    title: "Photography Event",
    dayDetail: "8 Mar",
    category: "Photography",
    image: "/events-page/event-dummy.png",
    color: "#3D3D3D",
    perTeam: 2,
    prize: [
      { place: "FIRST", amount: 5000 },
      { place: "SECOND", amount: 2500 },
    ],
    description: `Get your dance partner to duke it out with the best hip hop
            freestyle dancers in the city. Watch the crowd roar as you showcase
            your best moves in the cypher.`,
    rules: [
      "Team of 2.",
      "Time limit : 60-120 seconds per team.",
      "Pairs will be pitted against each other at random.",
      "Team dynamics, cohesion of groove, creativity and audience response will be judged.",
      "Usage of props is allowed.",
      "Obscenity and vulgarity will not be entertained.",
      "Inflammable objects, water and heavy objects are not allowed on stage.",
      "Decisions of the judges and coordinators will be final and binding.",
      "The Organizing Committee reserves the right to modify the event at any point.",
    ],
    contacts: ["9876346765"],
    eventDetail: `Step into the vibrant world of our Western Dance Club, where every
              movement ignites the spirit of celebration! Embracing the theme of
              "Viva La Fiesta," our dancers fuse passion with rhythm, delivering
              electrifying performances that transport you to the heart of a
              lively fiesta. With dynamic choreography and infectious energy, we
              invite you to join us on a journey filled with pulsating beats and
              sizzling moves, where every step is a celebration of life and
              culture. Get ready to unleash your inner dancer and let the fiesta
              begin!`,
    clubDetails: [
      {
        name: "SPC",
        img: "https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    fee: 100,
  },
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = events.filter((event) => {
    if (selectedCategory === "All Events") {
      return true;
    } else {
      return event.category === selectedCategory;
    }
  });

  return (
    <div>
      <div>
        <Hero />
        <CategoryPicker
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <EventsSection
          events={filteredEvents}
          setModalOpen={setModalOpen}
          setSelectedEvent={setSelectedEvent}
        />
        <Footer />
      </div>
      <EventModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        event={selectedEvent}
      />
    </div>
  );
}
