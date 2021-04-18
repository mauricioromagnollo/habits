import styled, { css } from 'styled-components';
import { FaRegEdit, FaTrash } from 'react-icons/fa';

const iconCSS = css`
  width: 18px;
  height: 18px;
  color: var(--gray);
`;

export const EditIcon = styled(FaRegEdit)`
  ${iconCSS}
  cursor: pointer;
`;

export const TrashIcon = styled(FaTrash)`
  ${iconCSS}
  cursor: pointer;
`;
