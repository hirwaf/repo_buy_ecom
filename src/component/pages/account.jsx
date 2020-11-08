    import React,{useEffect} from 'react'
    import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
    import SearchIcon from '@material-ui/icons/Search';
    import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useHistory } from "react-router-dom";
import StarIcon from '@material-ui/icons/Star';
    import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
    import { TransverseLoading } from 'react-loadingg'
    const Account = () => {
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
                      <li onClick={()=>history.push('/account/:name')} id="actions"><PersonOutlineRoundedIcon/></li>
                      <li onClick={()=>history.push('/account/:name')} id="actions">ACCOUNT</li>   
                      <li onClick={()=>history.push('/cart')}><ShoppingCartOutlinedIcon/></li>  
                  </ul>
           
                       </div>
                       </div>
                      
                       
                   </nav>

                            <div className="col-12" id="body_for_account">
                            <p id="your_account_details">YOUR ACCOUNT DETAILS</p>
                            <p>Make changes to your account details below. Click 'Update My Details' when you're done.</p>
                           <div id="div_for_input"className="col-4">
                              <div className="row col-12" id="div_that_have_input">
                            <div className="col-4">
                            <p id="name_for_input">FIRST NAME:</p>
                            </div>
                            <div className="col-8">
                            <input type="text" id="input" placeholder="Aldo"/>
                            </div>
                           </div>
                           <div className="row col-12" id="div_that_have_input">
                            <div className="col-4">
                            <p id="name_for_input">LAST NAME:</p>
                            </div>
                            <div className="col-8">
                            <input type="text" id="input" placeholder="Hirwa"/>
                            </div>
                           </div>
                           <div className="row col-12" id="div_that_have_input">
                            <div className="col-4">
                            <p id="name_for_input">PHONE:</p>
                            </div>
                            <div className="col-8">
                            <input type="text" id="input" placeholder="0788562312"/>
                            </div>
                           </div>
                           <div className="row col-12" id="div_that_have_input">
                            <div className="col-4">
                            <p id="name_for_input">EMAIL:</p>
                            </div>
                            <div className="col-8">
                            <input type="text" id="input" placeholder="hirwaaldo1@gmail.com"/>
                            </div>
                           </div>
                           <div className="row col-12" id="div_that_have_input">
                            <div className="col-4">
                            <p id="name_for_input">PASSWORD:</p>
                            </div>
                            <div className="col-8">
                            <input type="password" id="input" placeholder="**********"/>
                            </div>
                           </div>
                           <div id="word_of_password">
                               <p>LEAVE PASSWORD BLANK TO REMAIN UNCHANGED.</p>
                           </div>
                           <div className="row col-12" id="div_that_have_input">
                            <div className="col-4">
                            <p id="name_for_input">NEW PASSWORD:</p>
                            </div>
                            <div className="col-8">
                            <input type="text" id="input" />
                            </div>
                           </div>
                           <div className="row col-12" id="div_that_have_input1">
                       <button className="btn btn" id="update_your_details">UPDATE YOUR  DETAILS</button>
                          
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

    export default Account
