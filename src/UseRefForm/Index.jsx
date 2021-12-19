// create a form using different input boxes to collect user information
// name - text
// gender - select box
// role - select box
// marital status - checkbox
// image or file
// submit form and prevent default behaviour
import { useRef, useState } from 'react';
import styles from './style.module.css'
function HandleFormUseRef() {
     const [name, setName]=useState("")
    const [gender, setGender]=useState("")
    const [role, setRole]=useState("")
     const form=useRef();
    let handleSubmit=(e)=>{
      e.preventDefault()
 form.current.reset()
 setName("");setGender("");setRole("")
        
    }
    return (  
        <div className={styles.formContainer}>
            <form  className={styles.form}
             onSubmit={(e)=>handleSubmit(e)}
             ref={form}>
                <input type="text" placeholder='Enter your name' value={name}
                onChange={(e)=>setName(e.target.value)}/>
                <select name="gender" id="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <option value="None">None</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
                <select name="role" id="role" value={role} onChange={(e)=>setRole(e.target.value)}>
                    <option value="None">None</option>
                    <option value="Android_developer">Android_developer</option>
                    <option value="web_developer">web_developer</option>
                </select>
                <div>
                    <label htmlFor="married">married</label>
                    <input type="radio" name="marital_status" value="married"/>
                    <label htmlFor="single">single</label>
                    <input type="radio" name="marital_status" value="single"/>

                </div>
                <input type="file" />
               <input type="submit" value={"value"}
              />
            </form>
        </div>
    );
}

export default HandleFormUseRef;