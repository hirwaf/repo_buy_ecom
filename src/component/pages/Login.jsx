import React,{useEffect} from 'react'
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import SearchIcon from '@material-ui/icons/Search';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useHistory } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import StarIcon from '@material-ui/icons/Star';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { TransverseLoading } from 'react-loadingg'
import CheckIcon from '@material-ui/icons/Check';
const Login = () => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
        setIsLoaded(true);
        console.log(isLoaded)
        }, 3000);
    }, [isLoaded]);
    return (
        <div>
            {isLoaded === true ?
              <div className="row clearfix" style={{margin:'0',padding:"0"}}>
              <div className="col-md-3 column wel"style={{margin:'0',padding:"0"}}>
              <div className="left_side">
                 <h3>blackbutterfly</h3>
                 <hr id="line_1"/>
                 <ul id="list_of_buy">
                     <li onClick={()=>history.push('/')}>Women</li>
                    <li onClick={()=>history.push('/men')}>Men</li>
                     <li onClick={()=>history.push('/kids')}>Kids</li>    
                 </ul>
                 <hr id="line_2"/>
                 <ul id="list_of_buy2">
                 <li onClick={()=>history.push('/home_improvement')}>HOME IMPROVEMENT</li>
                     <li onClick={()=>history.push('/game')}>VIDEO-GAMES</li>
                     <li onClick={()=>history.push('/electronics')}>ELECTRONICS</li>    
                 </ul>
                 <hr id="line_3"/>
                 <div id="icons">
                 <InstagramIcon/>
                  <FacebookIcon style={{marginLeft:"12px"}}/>
                 </div>
                 <div id="footerHeader"onClick={()=>history.push('/')}>
                    <p>
                    Blackbutterfly
                    </p>
                    <div>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    </div>
                 </div>
              </div>
              </div>
              <div className=" col-md-9 column"style={{margin:'0',padding:"0"}}>
              <nav id="navHeader">
                      <div className="row">
                      <div className="col-6">
                      <div>
                      <SearchIcon />
                      <input type="search" id="seacher_all" placeholder="SEAECH"/>
                      </div>
                      </div>
                      <div className="col-6">
                      <ul className="float-right" id="sideList">
                     <li>Frw</li>
                     <li onClick={()=>history.push('/account/:name')}><PersonOutlineRoundedIcon/></li>
                     <li onClick={()=>history.push('/account/:name')}>ACCOUNT</li>   
                     <li onClick={()=>history.push('/cart')}><ShoppingCartOutlinedIcon/></li>  
                 </ul>
          
                      </div>
                      </div>
                     
                      
                  </nav>
            <nav id="navHeader_3" >
            <p style={{fontFamily:`"Dosis", sans-serif`,fontWeight:"bold"}}>COVID-19 ALERT</p>
            <p id="alert_word">Whilst we try our absolute hardest to meet our estimated delivery times quoted at checkout, due to Covid-19, there could be additional delays beyond our control at this time especially for orders outside of Europe. If there is anything you are unsure of, please do not hestitate to get in touch and we would be more than happy to help. Stay safe!</p>
            </nav>
            <nav id="navHeade_Errors" >
            <ErrorOutlineIcon/> You need to sign in to access this page.
            </nav>
                    <div className="row col-12 container" id="sign_up_card">
                    <div className="col-6">
                        <div id="div_have_signup">
                            <p id="signups">SIGN UP</p>
                            <p id="create_account_words">Create an account with us and you'll be able to:</p>
                            <ul>
                                <li><CheckIcon style={{color:"rgb(138, 4, 4)"}}/> Check out faster</li>
                               <li><CheckIcon style={{color:"rgb(138, 4, 4)"}}/> Save multiple shipping addresses</li>
                               <li><CheckIcon style={{color:"rgb(138, 4, 4)"}}/> Track new orders</li>
                               <li><CheckIcon style={{color:"rgb(138, 4, 4)"}}/> Shoping </li>
                                <li><CheckIcon style={{color:"rgb(138, 4, 4)"}}/> Access to All</li>
                            </ul>
                            <br/>
                            <button className="btn btn" id="login_button" onClick={()=>history.push('/create_account')}>CREATE ACCOUNT</button>
                        </div>
                    </div>
                    <div className="col-6">
                    <div id="div_have_signup">
                            <p id="signups">SIGN IN</p>
                            <p id="create_account_words">Welcome Back:</p>
                            <div className="row col-12" id="div_with_input_for_signin">
                            <div className="col-4">
                            <p id="input_word_for_all">EMAIL:</p>
                            </div>
                            <div className="col-8">
                            <input type="text" id="input" placeholder="you email" />
                            </div>
                           </div>
                           <div className="row col-12" id="div_with_input_for_signin">
                            <div className="col-4">
                            <p id="input_word_for_all">PASSWORD:</p>
                            </div>
                            <div className="col-8">
                            <input type="text" id="input" placeholder="you password" />
                            </div>
                           </div>
                            <br/>
                            <button className="btn btn" id="login_button">LOGIN</button>
                        </div>
                    </div>
                    </div>

        </div>
            </div>
            :
            <div style={{zIndex:999999}}>
            <TransverseLoading />
            </div>
}
        </div>
    )}

export default Login
