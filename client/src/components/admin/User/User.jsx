import React from 'react'
import st from './User.module.css'
import { PermIdentity, AlternateEmail, CalendarMonth, Wc, Public, MyLocation, PhoneInTalk, ManageAccounts, DriveFolderUpload
} from '@mui/icons-material'

export default function User() {
  return (
    <div className={st.User}>
        
        <div className={st.userTitleContainer}>
            <h1 className={st.userTitle}>Edit User</h1>
            <button className={st.useadAddButton}>Create</button>
        </div>

        <div className={st.userContainer}>
            <div className={st.userShow}>
                <div className={st.userShowTop}>
                    <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="Profile Pict" className={st.userShowImg} />
                    <div className={st.userShowTopTitle}>
                        <span className={st.userShowUsername}>Santiago Castillo</span>
                        <span className={st.userShowRole}>Patient</span>
                    </div>
                </div>

                <div className={st.userShowBottom}>
                    <span className={st.userShowTitle}>Account Details</span>

                    <div className={st.userShowInfo}>
                        <PermIdentity className={st.userShowIcon}/>
                        <span className={st.userShowInfoTitle}>ID: 123456</span>
                    </div>
                    <div className={st.userShowInfo}>
                        <AlternateEmail className={st.userShowIcon}/>
                        <span className={st.userShowInfoTitle}>Email: SantiCas@gmail.com</span>
                    </div>
                    <div className={st.userShowInfo}>
                        <ManageAccounts className={st.userShowIcon}/>
                        <span className={st.userShowInfoTitle}>Status: Active</span>
                    </div>

                    <span className={st.userShowTitle}>Contact Details</span>

                    <div className={st.userShowInfo}>
                        <Wc className={st.userShowIcon}/>
                        <span className={st.userShowInfoTitle}>Genre: Male</span>
                    </div>
                    <div className={st.userShowInfo}>
                        <Public className={st.userShowIcon}/>
                        <span className={st.userShowInfoTitle}>Country: Argentina</span>
                    </div>
                    <div className={st.userShowInfo}>
                        <MyLocation className={st.userShowIcon}/>
                        <span className={st.userShowInfoTitle}>Address: St 55 Av 40-77</span>
                    </div>
                    <div className={st.userShowInfo}>
                        <PhoneInTalk className={st.userShowIcon}/>
                        <span className={st.userShowInfoTitle}>Tel: +54 999 777 123</span>
                    </div>
                    <div className={st.userShowInfo}>
                        <CalendarMonth className={st.userShowIcon}/>
                        <span className={st.userShowInfoTitle}>BirthDate: 10/10/1998</span>
                    </div>
                </div>    
            </div>

            <div className={st.userUpdate}>
                <span className={st.userUpdateTitle}>Edit</span>
                <form className={st.userUpdateForm}>
                    <div className={st.userUpdateLeft}>

                        <div className={st.userUpdateItem}>
                            <label>Name</label>
                            <input type="text" placeholder='Santiago Castillo' className={st.userUpdateInput}/>
                        </div>
                        <div className={st.userUpdateItem}>
                            <label>Role</label>
                            <input type="text" placeholder='Patient' className={st.userUpdateInput}/>
                        </div>
                        <div className={st.userUpdateItem}>
                            <label>Email</label>
                            <input type="email" placeholder='SantiCas@gmail.com' className={st.userUpdateInput}/>
                        </div>
                        <div className={st.userUpdateItem}>
                            <label>Status</label>
                            <input type="text" placeholder='Active' className={st.userUpdateInput}/>
                        </div>
                        <div className={st.userUpdateItem}>
                            <label>Genre</label>
                            <input type="text" placeholder='Male' className={st.userUpdateInput}/>
                        </div>
                        <div className={st.userUpdateItem}>
                            <label>Country</label>
                            <input type="text" placeholder='Argentina' className={st.userUpdateInput}/>
                        </div>
                        <div className={st.userUpdateItem}>
                            <label>Address</label>
                            <input type="text" placeholder='St 55 Av 40-77' className={st.userUpdateInput}/>
                        </div>
                        <div className={st.userUpdateItem}>
                            <label>Tel</label>
                            <input type="phone" placeholder='+54 999 777 123' className={st.userUpdateInput}/>
                        </div>
                        <div className={st.userUpdateItem}>
                            <label>BirthDate</label>
                            <input type="text" placeholder='10/10/1998' className={st.userUpdateInput}/>
                        </div>

                    </div>
                    <div className={st.userUpdateRight}>
                        <div className={st.userUpdateUpload}>
                            <img className={st.userUpdateImg} src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="Profile Pic" />
                            <label htmlFor="file"><DriveFolderUpload/> </label>
                            <input type="file" id='file' style={{display: "none"}}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
    </div>
  )
}
