import { create } from 'zustand'

const useConversation = create((set) => ({
  
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({selectedConversation}),
  
  // from mongoDB
  messages:[],
  setMessage: (messages)=> set({messages}),

}));

export default useConversation;

// 1. we fist give a variable storage 
// eg selectedConversation: null,
// eg messages:[],

// 2. then we set it and give variable storage name again and then set it in object again
// setSelectedConversation: (selectedConversation) => set({selectedConversation}),
// setMessage: (messages)=> set({messages}),