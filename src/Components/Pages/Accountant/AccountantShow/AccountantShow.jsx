import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AccountantDetail from '../../../details/AccountantDetail/AccountantDetail';

const AccountantShow = () => {
  const { accountantId } = useParams();

  const [accountant, setAccountant] = useState(null);

  // Accountant data show
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/accountants/${accountantId}`, {
      headers: {
        Accept: 'application/json',
      },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.info(response);
        setAccountant(response.data?.accountant);
      })
      .catch((error) => {
        console.error(error);
        setAccountant(null);
      });
  }, [accountantId]);

  return (
    <div>

      {/* Accountant create table title section */}
      <Link to='/accountants' className='add_button'>
        <button type='button' className='btn'>
          Accountant Table <AiOutlineArrowRight />
        </button>
      </Link>

      {/* Accountant data details component */}
      <AccountantDetail accountant={accountant} />
      
    </div>
  );
};

export default AccountantShow;