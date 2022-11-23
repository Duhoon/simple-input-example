import axios from "axios";

// HOST
const serverHost =  "http://localhost:4000";

export default {
    sendMessage : async (message)=>{
        message.userId = "@JejuAlrock";
        const requestURL = `${serverHost}/send`;
        const result = await axios.post(requestURL, {message})
        .then(result=>result)
        .catch(err=>err);
    },
    
    sendReply : async (message)=>{
        message.userId = "@JejuAlrock";
        const requestURL = `${serverHost}/reply`;
        const result = await axios.post(requestURL, {message})
        .then(result=>result)
        .catch(err=>err);
    },
    
    updateMessage : async (message)=>{
        const requestURL = `${serverHost}/update`;
        const result = await axios.post(requestURL, {message})
        .then(result=>result)
        .catch(err=>err);
    },
    
    removeMessage : async (messageId)=>{
        const requestURL = `${serverHost}/remove`;
        const result = await axios.post(requestURL, {message: {messageId}})
        .then(result=>result)
        .catch(err=>err);
    }
}