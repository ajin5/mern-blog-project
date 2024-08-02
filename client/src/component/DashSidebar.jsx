import { Sidebar } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { BsArrow90DegRight } from 'react-icons/bs'
import { FaHospitalUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

export default function DashSlidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/dashboard?tab=profile'>
          <Sidebar.Item active={tab === 'profile'} icon={FaHospitalUser} label={'user'} labelColor={'dark'} as='div'>
            profile
          </Sidebar.Item>  
          </Link>
          <Sidebar.Item icon={BsArrow90DegRight}>
            Sign Out
          </Sidebar.Item>  
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
