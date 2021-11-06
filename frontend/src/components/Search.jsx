import React,{useState} from "react";
import axios from "axios";
import Accent from "./Accent"
import Loading from "./Loading"
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

function Search(props) {

    const InfoLoading = Loading(Accent);

    const [searchs , setNewSearch] = useState("")

    const [sent , setNewSent] = useState(false)
    const [error , setNewError] = useState(false)

    function handleChange(event) {
        const newValue = event.target.value
        setNewSearch(newValue);
    }
    function submitSearch (event){
        event.preventDefault();

        axios({
            method: "POST",
            url:"/",
            data:{
                customer: searchs,
            },
          }).then((response)=>{
            console.log(response)
            if (response.status === 200) {
              console.log('Message Sent.')
              setNewSearch("")
              setNewSent(true)
              setNewError(false)
            } else{
                console.log("Message failed to send. Kindly retry")
            }
          }).catch(function (error) {
            if (error.response) {
              console.log(error.response);
              console.log(error.response.status);
              console.log(error.response.headers);

              setNewSent(false)
              setNewError(true)
            }
          });
}
  return (
    <div>
      <form onSubmit={submitSearch}>
            <input
                className="form-control form-control-lg"
                type="text"
                name="searchy"
                placeholder="ENTER CUSTOMER CODE e.g ACC001"
                value={searchs}
                onChange={handleChange} />
            <button> Search </button>
      </form>

      { sent && <div className='repo-container'>
                    <InfoLoading isLoading={props.isLoading} agentz={props.agentz} fees={props.fees}/>
                 </div> 
      }

      { error && <div className='repo-container'>
                    <h2 className='list-head'> Sorry, No property managed by this client was found</h2>
                 </div> 
      }
    </div>

  );
}

export default Search;
