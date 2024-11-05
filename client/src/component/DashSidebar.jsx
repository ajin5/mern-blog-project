import { Sidebar } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { BsArrow90DegRight } from 'react-icons/bs'
import { FaHospitalUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { signoutSuccess } from '../redux/user/userSlice'


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
  const handleSignout = async()=>{
    try{
      const res = await fetch('/api/user/signout', {
        method:'POST',
      });
      const data = res.json();
      if(!res.ok){
        console.log(data.message)
      }else{
        dispatch(signoutSuccess())
  
      }
  
    }catch(error){
      console.log(error.message)
  
    }
  }
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to='/dashboard?tab=profile'>
          <Sidebar.Item active={tab === 'profile'} icon={FaHospitalUser} label={'user'} labelColor={'dark'} as='div'>
            profile
          </Sidebar.Item>  
          </Link>
          <Sidebar.Item icon={BsArrow90DegRight} onClick={handleSignout}>
            Sign Out
          </Sidebar.Item>  
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
