import { FormEvent, useState, ChangeEvent, useContext } from 'react';
import { useRouter } from 'next/router';

import { serializeDateTime } from '../../helpers/serializeDateTime';
import { Header } from '../../components/header';
import {
  Container,
  Form,
  Input,
  DateInput,
  TimeInput,
} from '../../styles/pages/event/create';
import api from '../../services/api';
import { AuthContext } from '../../contexts/auth';

type EventSaveData = {
  name: string;
  description: string;
  startAt: string;
  endsAt: string;
  userId: string;
};

export default function CreateEvent(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
  });

  const router = useRouter();
  const { user } = useContext(AuthContext);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const newEvent: EventSaveData = {} as EventSaveData;

    newEvent.name = formData.name;

    newEvent.description = formData.description;

    newEvent.startAt = serializeDateTime({
      date: formData.startDate,
      time: formData.startTime,
    });

    newEvent.endsAt = serializeDateTime({
      date: formData.endDate,
      time: formData.endTime,
    });

    newEvent.userId = user.id;

    try {
      await api.post('/events', { ...newEvent });
      router.push('/dashboard');
    } catch (err) {
      alert('Já existe evento com essa data!');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={handleSubmit}>
          <h1>Adicione um novo evento na sua agenda!</h1>
          <Input
            type="text"
            name="name"
            placeholder="Nome"
            onChange={handleInputChange}
            autoComplete="off"
            spellCheck="false"
          />

          <Input
            type="text"
            name="description"
            placeholder="Descrição do Evento"
            onChange={handleInputChange}
            autoComplete="off"
            spellCheck="false"
          />

          <h4>Início do Evento</h4>
          <DateInput
            mask="99/99/9999"
            name="startDate"
            maskPlaceholder="dd/mm/yyyy"
            spellCheck="false"
            onChange={handleInputChange}
          />

          <TimeInput
            mask="99:99"
            name="startTime"
            maskPlaceholder="00:00"
            alwaysShowMask
            spellCheck="false"
            onChange={handleInputChange}
          />

          <h4>Fim do Evento</h4>
          <DateInput
            mask="99/99/9999"
            name="endDate"
            maskPlaceholder="dd/mm/yyyy"
            spellCheck="false"
            onChange={handleInputChange}
          />

          <TimeInput
            mask="99:99"
            name="endTime"
            maskPlaceholder="00:00"
            spellCheck="false"
            onChange={handleInputChange}
          />

          <button type="submit">Cadastrar</button>
        </Form>
      </Container>
    </>
  );
}
