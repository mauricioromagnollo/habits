import { FaRegClock } from 'react-icons/fa';

import { EditIcon, TrashIcon } from '../../styles/icons';

import {
  IconsGroup,
  CalendarPaper,
  Container,
  Content,
  DateTimeContainer,
} from './styles';

export interface EventProps {
  name: string;
  description: string;
  startDay: string;
  startMonth: string;
  startHour: string;
  endDate: string;
  endHour: string;
  handleEdit: () => void;
  handleDelete: () => void;
}

export const EventCard = ({
  name,
  description,
  startDay,
  startMonth,
  startHour,
  endDate,
  endHour,
  handleEdit,
  handleDelete,
}: EventProps): JSX.Element => {
  return (
    <Container>
      <Content>
        <div>
          <IconsGroup>
            <EditIcon onClick={handleEdit} />
            <TrashIcon onClick={handleDelete} />
          </IconsGroup>
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Termina em:</p>
          <DateTimeContainer>
            <p>{endDate}</p> <p>às {endHour}</p>
          </DateTimeContainer>
        </div>
      </Content>
      <CalendarPaper>
        <h3>{startDay}</h3>
        <h1>{startMonth}</h1>
        <DateTimeContainer>
          <FaRegClock />
          <p>{startHour}</p>
        </DateTimeContainer>
      </CalendarPaper>
    </Container>
  );
};
