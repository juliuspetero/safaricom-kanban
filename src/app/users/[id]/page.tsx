import React from 'react';
import Parameters from '@/types/Parameters';
import User from '@/types/User';
import Link from 'next/link';

const UserDetail = async ({params} : {params: Parameters}) => {
    const {id} = await params;
    const apiResult = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const userDetail: User = await apiResult.json();
  return (
    <div className='bg-white shadow rounded-lg p-6'>
        <Link
          href='/users'
          className='flex items-center text-gray-600 hover:text-gray-800 mb-4'
        >
          <i className='inline mr-1' />
          <span className='ml-2'>Back to Users</span>
        </Link>

          <div className='mt-4 sm:mt-0 sm:flex-1'>
            <p className='text-gray-600 mb-4'>{userDetail.name}</p>

            <ul className='space-y-2'>
              <li>
                <span className='font-semibold text-gray-800'>Email:</span>{' '}
                {userDetail.email}
                sq ft
              </li>
              <li>
                <span className='font-semibold text-gray-800'>
                  Address:
                </span>
                {userDetail.address.city}, {userDetail.address.street},{' '} {userDetail.address.suite}
              </li>
              <li>
                <span className='font-semibold text-gray-800'>Company:</span>
                {userDetail.company.name}, {userDetail.company.catchPhrase}, {userDetail.company.bs}
              </li>
              <li>
                <span className='font-semibold text-gray-800'>Website:</span>{' '}
                {userDetail.website}
              </li>
            </ul>
          </div>
    </div>
  )
}

export default UserDetail;
