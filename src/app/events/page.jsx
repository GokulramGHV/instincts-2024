'use client';
import EventModal from '@/components/events-page/EventModal';
import CategoryPicker from '@/sections/events-page/categoryPicker';
import EventsSection from '@/sections/events-page/eventsSection';
import Hero from '@/sections/events-page/hero';
import Footer from '@/sections/footer/footer';
import { useState} from 'react';
import { categories, events } from './events';
import SearchBar from '@/sections/events-page/searchBar';

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [chosenEvents, setChosenEvents] = useState(null); // filtered events from searchbar
  const [query, setQuery] = useState(''); //search bar query



  const sortedcategories = categories.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const filteredEvents = () => {
    
    //for events selected from search
    if(chosenEvents != null){
      if(selectedCategory){
          setSelectedCategory(null);
      }
      return chosenEvents;

    } 

    //for events selected from category
    else{
    return events
    .sort((a, b) => a.title.localeCompare(b.title))
    .filter((event) => { 

      if (selectedCategory === 'All Events') {
        return true;
      }  

       else {
        return event.category === selectedCategory;
      }
    })};
  };

  return (
    <div className="font-satoshi">
      <div>
        <Hero
          headingName="CLUB EVENTS"
          heroColor="#FB6655"
          heroImage="/events-page/hero-pattern.png"
          fontColor="#FFFCEA"
        />
        <CategoryPicker
          categories={sortedcategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setChosenEvents={setChosenEvents}
          setQuery={setQuery}
        />

        <SearchBar
         setChosenEvents = {setChosenEvents}
         setQuery={setQuery}
         query={query}
         setSelectedCategory={setSelectedCategory}/>

        <EventsSection
          events={filteredEvents()}
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
