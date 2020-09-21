import axios from "axios";

// export api funcations constant
export const userServices = {
	logIn,
	settingView
};

const Prefix = "http://192.168.100.99/api/"
// login call function
async function logIn(value) {
  const { data: response } = await axios.post(
    `${Prefix}admin/login`, {
			email: value.email,
			password: value.password
		  },{
			  headers:{
				  "token":"ABCDEF"
			  }
		  });
  
  return response;
}

// Settings call function
async function settingView() {
	const { data: response } = await axios.post(
		`${Prefix}admin/settings/view`, {},
			{
				headers:{
					"token":"ABCDEF"
				}
			});
	
	return response;
  }
  