import axios from "axios";

// export api funcations constant
export const userServices = {
	logIn,
};

// login call function
async function logIn(value) {
  const { data: response } = await axios.post(
    'http://192.168.100.99/api/admin/login', {
			email: value.email,
			password: value.password
		  },{
			  headers:{
				  "token":"ABCDEF"
			  }
		  });
  
  return response;
}
