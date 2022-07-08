import React from 'react'
import PageTitle from '../../DashboaedComponents/pageTitle/pageTitle'
import ProfileInformation from './components/profileInfo/ProfileInformation'

export default function EditUserProfile() {
  return (
    <div className="">
        <PageTitle title={"حساب کاربری"}/>
        <div className="w-full flex justify-center items-center">
            <div className="m-h-[600px]">
                <div className="mt-12 flex justify-between">
                    <ProfileInformation userName={"سجاد قدرتی"} userType={"کاربر طلایی"} email={"sajjad@gmail.com"}/>
                    <button className="btn-style h-10 rounded-lg text-[14px] mr-[161px]">  خروج <img src="./img/dashboard/header/logoutProfile.svg" alt="logout" className="mr-3" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}
