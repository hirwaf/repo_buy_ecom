import React,{useEffect,useState} from 'react'
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import SearchIcon from '@material-ui/icons/Search';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useHistory } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import StarIcon from '@material-ui/icons/Star';
import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { TransverseLoading } from 'react-loadingg'
const Cart = () => {
    const [isLoaded, setIsLoaded] =useState(false);
    const [count, setCount] = useState(0);
    const history = useHistory();
    useEffect(() => {
        setTimeout(() => {
            if(isLoaded === false){}
        setIsLoaded(true);
        }, 3000);
    }, [isLoaded]);
    useEffect(() => {
    if(count<= 1){
        setCount(1)
    }
    },[count])
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
            <nav id="navHeader_1" >
            <div className="row col-12 ">
        <div className="col-6"style={{textAlign:'center',display:"inline-block"}}>
            <p style={{textAlign:'center',display:"inline-block",margin:'0',fontFamily:`'Dosis', sans-serif`,fontWeight:"bold"}}>FREE UK/US SHIPPING </p>
            <p style={{textAlign:'center',display:"inline-block",paddingLeft:'3px',margin:'0',fontFamily:`'Dosis', sans-serif`}}> OVER ₮50</p>
        </div>
        <div className="col-6"style={{textAlign:'center',display:"inline-block",borderLeft:"1px solid #c8c8c8 "}}>
            <p style={{textAlign:'center',display:"inline-block",margin:'0',fontFamily:`'Dosis', sans-serif`,fontWeight:"bold"}}>FREE </p>
            <p style={{textAlign:'center',display:"inline-block",paddingLeft:'3px',margin:'0',fontFamily:`'Dosis', sans-serif`}}>  UK RETURNS</p>
        </div>
            </div>
            </nav>

            <br/>
<div className="row col-12" id="cart_body">
                <div className="col-8">
<div className="row col-12" id="div_for_all_cart_product">
    <div className="col-3" id="div_have_image">
    <img src="https://www.forever21.com/images/default_330/00415149-01.jpg" className="class_for_image" alt="image_added_to_Cart"/>
    </div>
    <div className="col-6"style={{fontFamily:`"Dosis", sans-serif`}}>
                <p id="name_of_cart_product">Blue denim shirt</p>
                <p>Blue denim shirt</p>
                <p>SHIRT - BLUE</p>
                <p>SIZE: M</p>
                <button id="romeve_Item"><DeleteIcon/>REMOVE ITEM</button>
</div>
<div className="col-3">
<ButtonGroup  aria-label="outlined primary button group" id="slkdmd">
  <Button style={{fontWeight:"bold"}}onClick={() =>{ 
      setCount(count - 1)}}>-</Button>
            <Button>{count}</Button>
  <Button style={{fontWeight:"bold"}}onClick={() => setCount(count + 1)}>+</Button>
</ButtonGroup>
<p className="sdmlxs">100Frw</p>
</div>
<div className="col-3" id="div_have_image">
    <img src="https://www.forever21.com/images/default_330/00415149-01.jpg" className="class_for_image" alt="image_added_to_Cart"/>
    </div>
    <div className="col-6"style={{fontFamily:`"Dosis", sans-serif`}}>
                <p id="name_of_cart_product">Blue denim shirt</p>
                <p>Blue denim shirt</p>
                <p>SHIRT - BLUE</p>
                <p>SIZE: M</p>
                <button id="romeve_Item"><DeleteIcon/>REMOVE ITEM</button>
</div>
<div className="col-3">
<ButtonGroup  aria-label="outlined primary button group" id="slkdmd">
  <Button style={{fontWeight:"bold"}}>-</Button>
  <Button>1</Button>
  <Button style={{fontWeight:"bold"}}>+</Button>
</ButtonGroup>
<p className="sdmlxs">100Frw</p>
</div>
<div className="col-3" id="div_have_image">
    <img src="https://www.forever21.com/images/default_330/00415149-01.jpg" className="class_for_image" alt="image_added_to_Cart"/>
    </div>
    <div className="col-6"style={{fontFamily:`"Dosis", sans-serif`}}>
                <p id="name_of_cart_product">Blue denim shirt</p>
                <p>Blue denim shirt</p>
                <p>SHIRT - BLUE</p>
                <p>SIZE: M</p>
                <button id="romeve_Item"><DeleteIcon/>REMOVE ITEM</button>
</div>
<div className="col-3">
<ButtonGroup  aria-label="outlined primary button group" id="slkdmd">
  <Button style={{fontWeight:"bold"}}>-</Button>
  <Button>1</Button>
  <Button style={{fontWeight:"bold"}}>+</Button>
</ButtonGroup>
<p className="sdmlxs">100Frw</p>
</div>
<hr id="sdkld"/>
<div className="col-3" id="div_have_image">
    <img src="https://www.forever21.com/images/default_330/00415149-01.jpg" className="class_for_image" alt="image_added_to_Cart"/>
    </div>
    <div className="col-6"style={{fontFamily:`"Dosis", sans-serif`}}>
                <p id="name_of_cart_product">Blue denim shirt</p>
                <p>Blue denim shirt</p>
                <p>SHIRT - BLUE</p>
                <p>SIZE: M</p>
                <button id="romeve_Item"><DeleteIcon/>REMOVE ITEM</button>
</div>
<div className="col-3">
<ButtonGroup  aria-label="outlined primary button group" id="slkdmd">
  <Button style={{fontWeight:"bold"}}>-</Button>
  <Button>1</Button>
  <Button style={{fontWeight:"bold"}}>+</Button>
</ButtonGroup>
<p className="sdmlxs">100Frw</p>
</div>
</div>
                </div>
                <div className="col-4" id="div_with_payment">
                <div >
                    <p id="p_total_amount">The total amount of</p>
                    <div className="row col-12">
                        <div className="col-9"style={{paddingBottom:"12px"}}>
                        Temporary amount

                        </div>
                        <div className="col-3">
                        50Frw
</div>
                        <div className="col-9"style={{paddingBottom:"12px"}}>
                        Shipping
                        </div>
                        <div className="col-3">
                        Gratis
</div>

                    </div>
                    <hr/>
                    <div className="row col-12" style={{paddingBottom:"15px"}}>
                        <div className="col-9"style={{paddingBottom:"12px",fontWeight:"bold"}}>
                        The total amount of
(including VAT)

                        </div>
                        <div className="col-3">
                        50Frw
</div>
<div className="col-12">
<button className="btn btn" id="buyButtom">BUY</button>
</div>
                    </div>
                   <div>
                   <p id="p_total_amount">Payment Options</p>
                   <div className=" row col-12" id>
                        <div className="col-9">
                        <p id="paymaent_opt">Google Wallet</p>
                        </div>
                        <div className="col-3">
<img style={{width:"100%",paddingBottom:"12px"}} src={`https://img.talkandroid.com/uploads/2015/09/google-wallet-new-logo.png`} alt="sd"/>
</div>

<div className="col-9">
PayPal
                        </div>
                        <div className="col-3">
<img style={{width:"100%",paddingBottom:"17px"}} src={`https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJQ_7-ZZkDNkvpwxeIddovjUWR5kEvGo9vyy0JcRpvfQ&usqp=CAU&ec=45714077`} alt="sd"/>
</div>


<div className="col-9">
                       Visa card
                        </div>
                        
                        <div className="col-3">
<img style={{width:"100%",paddingBottom:"16px"}} src={`https://www.b-payment.com/docs/images/logos/Visa_logo.png`} alt="sd"/>
</div>
                   </div>
                   </div>
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

export default Cart
