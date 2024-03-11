class Myheader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`   
        <div class="header">
        <div class="logo-container">

            <div class="logo-row">
                <a href="Home.html"><img width="100" height="123" src="img/logopng.png"></a>
            </div>

            <div class="search-bar-row">
                <form id="frm-search" name="search" action="/tim">
                    <input type="text" class="search-box" placeholder="Sản phẩm cần tìm?">
                    <button type="submit">
                        <i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i>
                    </button>
                </form>
                
            </div>
            
            <div class="account-row">
                    <i class="fa-solid fa-user" style="color: #2B80DD;"></i>
                    <button class="dropbtn">Dropdown
                        <i class="fa fa-caret-down"></i>
                      </button>
                      <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                      </div>
            </div>

            <div class="cart-row">
                <i class="fa-solid fa-cart-shopping" style="color: #2B80DD;"></i>
                <a href="">Giỏ Hàng</a>
            </div>

        </div>

        <div class="menu-container">
            <div class="menu-item">
                <div class="menu-box">
                    <a href=""> HOME</a></div>
                <div class="menu-box">  
                    <a href=""> Surface Laptop</a></div>
                <div class="menu-box">
                    <a href=""> Surface Book</a></div>
                <div class="menu-box">
                    <a href=""> Surface Go</a></div>
                <div class="menu-box">
                    <a href=""> Surface Pro</a></div>
                </div>
                
            </div>
        </div>
    </div> 
        `    
    }
}

customElements.define('header-template', Myheader)
