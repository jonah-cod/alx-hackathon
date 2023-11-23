import React, { useState } from 'react'
import { addPrompt, addPromptMessage } from '../redux/messageSlice';
import { useDispatch } from 'react-redux';
import ChatOutput from './chatOutput';


const Reports = () => {

      const [chat_active, setchatActive] = useState(false)
      const [prompt, setPrompt] = useState("");
      const dispatch = useDispatch();
      const handleChange = (e) => {
            setPrompt(e.target.value)
            if (e.target.value.trim()) {

                  setchatActive(true)
            } else {
                  setchatActive(false)
            }
      }

      const handleSubmit = (e) => {
            e.preventDefault()
            dispatch(addPromptMessage({type: "send", message: prompt}))
            // dispatch(addPrompt(prompt))

            // setPrompt("")
      }
      return (
            <div className='reports'>
                  <h2>Reports</h2>
                  <div className="report-content">

                        <ChatOutput/>
                        <div className="chat-box">
                              <form  onSubmit={handleSubmit}>
                                    <input type="text" 
                                          placeholder='Type a prompt. . .' 
                                          onChange={handleChange} 
                                          value={prompt} />

                                    <button className={`submit ${chat_active ? "submit-active" : ""}`} 
                                            type="submit" 
                                            disabled={!chat_active}>
                                          <i className="fas fa-location-arrow " ></i>
                                    </button>
                              </form>

                        </div>

                  </div>
            </div>
      )
}

export default Reports