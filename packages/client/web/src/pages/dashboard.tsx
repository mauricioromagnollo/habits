import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiPlusCircle } from 'react-icons/fi';

import { AuthContext } from '../contexts/auth';
import { Header } from '../components/header';

import { Main, NovoEventoButton } from '../styles/pages/dashboard';
import { EventCard } from '../components/event-card';
import api from '../services/api';

export interface EventProps {
  id: string;
  name: string;
  description: string;
  startDay: string;
  startMonth: string;
  startHour: string;
  endDate: string;
  endHour: string;
}

export default function Dashboard(): JSX.Element {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState<EventProps[]>([]);

  useEffect(() => {
    async function loadEvents() {
      const response = await api.get('/events');
      setEvents(response.data);
    }

    loadEvents();
  }, [events]);

  const router = useRouter();

  function handleEditCard(id: string) {
    router.push(`/event/create/${id}`);
  }

  async function handleDeleteCard(id: string) {
    await api.delete(`/events/${id}`);
  }

  return (
    <>
      <Header>
        <h3>Olá, {user.name}</h3>
      </Header>
      <Main>
        <div>
          <h1>Eventos</h1>
          <NovoEventoButton>
            <FiPlusCircle />
            <Link href="/event/create">Novo Evento</Link>
          </NovoEventoButton>
        </div>
        <section>
          {events.map(event => (
            <EventCard
              key={event.id}
              name={event.name}
              description={event.description}
              endDate={event.endDate}
              endHour={event.endHour}
              startDay={event.startDay}
              startMonth={event.startMonth}
              startHour={event.startHour}
              handleEdit={() => handleEditCard(event.id)}
              handleDelete={() => handleDeleteCard(event.id)}
            />
          ))}
        </section>
      </Main>
    </>
  );
}
