import React from 'react'
import { UserPanelAvatar } from '../UserSettings/UserPanelAvatar'

export function UserPanelUserInfo(){
    return(
        <>
        <div className="user-img-container dp-flex flex-dir-col align-items-center justify-cnt-center width-100per pad-top-20px">
            <h4 className="user-role font-size-18px color-black mar-bottom-15px align-self-center">Mi cuenta</h4>
            <UserPanelAvatar avatar=""/>
        </div>

        <div className="user-data-container dp-flex flex-dir-col align-items-center justify-cnt-center width-100per pad-top-10px pad-bottom-10px">
            <h3 className="user-name align-self-center color-black">John Doe</h3>
            <span className="user-email align-self-center color-black pad-5px font-size-16px ">john@doe.com</span>
        </div>
        </>
    )
}