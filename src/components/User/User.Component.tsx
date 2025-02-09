import Link from 'next/link';
import { User } from '@/types/User';

const UserComponent = ({ user }: { user: User }) => {

  return (
    <div className='bg-white shadow rounded-lg p-4 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center'>
      <div className='flex flex-col sm:flex-row sm:space-x-4'>
        <div className='space-y-1'>
          <h4 className='text-lg font-semibold'>{user.name}</h4>
          <p className='text-sm text-gray-600'>
            <span className='font-semibold text-gray-800'> Email:</span>{' '}
            {user.email}
          </p>
          <p className='text-sm text-gray-600'>
            <span className='font-semibold text-gray-800'> Address:</span>{' '}
            {user.address.city}, {user.address.street}, {user.address.suite}
          </p>
          <p className='text-sm text-gray-600'>
            <span className='font-semibold text-gray-800'>Phone:</span>
            {user.phone}
          </p>
          <p className='text-sm text-gray-600'>
            <span className='font-semibold text-gray-800'> Company:</span>
            {user.company.name}
          </p>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row w-full sm:w-auto sm:space-x-2 mt-2 sm:mt-0'>
        <Link
          href={`/users/${user.id}`}
          className='bg-blue-500 text-white px-4 py-2 rounded mb-2 sm:mb-0 w-full sm:w-auto text-center hover:bg-blue-700'
        >
          View User
        </Link>
      </div>
    </div>
  );
};

export default UserComponent;