import { useState } from 'react';
import Calendar from 'moedim';
import styled from 'styled-components';
const StyledCalendar = styled(Calendar)`
  --moedim-primary: #f00;
`;

const Calendar1 = () => {
  const [value, setValue] = useState(new Date());

  return (
    <>
      <div className='date_calender'>
        <StyledCalendar>
          <Calendar value={value} onChange={(d) => setValue(d)} />
        </StyledCalendar>
      </div>
    </>
  );
};

export default Calendar1;
