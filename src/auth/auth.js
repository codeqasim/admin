import React from 'react'
import { connect } from "react-redux";
import { 
	authentication
} from 'redux/actions/Auth';
import { useHistory } from "react-router-dom";
function LoginAuth(props) {

    const { 
		authentication
    } = props

React.useEffect(() => {
        var loginSession = JSON.parse(window.sessionStorage.getItem('login'));
		const newDate = new Date();
		if(loginSession){
			var {expiresAt} = JSON.parse(window.sessionStorage.getItem('login'));
			if(expiresAt > newDate.toLocaleString()){
				var d = new Date();
				d.setMinutes(d.getMinutes() + 30);
				const date = d.toLocaleString();
				var sessionObject = {
					expiresAt: date,
					someOtherSessionData: {
					message: 'success'
					}
                }
                authentication(true);
				window.sessionStorage.setItem('login',JSON.stringify(sessionObject))
			}
			else{
				window.sessionStorage.removeItem('login')
				authentication(false);
			}
        }
    }, [props.login])
    
    return (
        <>
        </>
    )
}

const mapStateToProps = ({auth}) => {
	const {login} = auth;
  return {login}
}

const mapDispatchToProps = {
	authentication
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginAuth)

