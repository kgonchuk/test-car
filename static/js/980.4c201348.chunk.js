(self.webpackChunktest_car=self.webpackChunktest_car||[]).push([[980],{380:(e,s,i)=>{"use strict";i.d(s,{A:()=>u});var t=i(43);const a={itemCard:"CarListItem_itemCard__kWOtQ",itemImg:"CarListItem_itemImg__5F8E2",itemModel:"CarListItem_itemModel__5Otpd",infoContainer:"CarListItem_infoContainer__V5+iY",infoText:"CarListItem_infoText__PGK5T",itemTitle:"CarListItem_itemTitle__QzCBn",itemTitlePrice:"CarListItem_itemTitlePrice__KpBBp",itemTitleInfo:"CarListItem_itemTitleInfo__xtgy7",buttonItem:"CarListItem_buttonItem__tf+wv",btnAddFavorite:"CarListItem_btnAddFavorite__tHwT0"};var r=i(838);const l={overlay:"Modal_overlay__r63M6",modalContainer:"Modal_modalContainer__QjqZb",closeBtn:"Modal_closeBtn__mlOa4",imgCar:"Modal_imgCar__F3WvF",carTitle:"Modal_carTitle__wLvrS",SecondaryInfo:"Modal_SecondaryInfo__UDfAP",SecondaryCarText:"Modal_SecondaryCarText__bKjam",carInfo:"Modal_carInfo__mtCXq",modalDescription:"Modal_modalDescription__uJ4eb",Accessories:"Modal_Accessories__kBvyl",conditionListTitle:"Modal_conditionListTitle__oFM82",AccessoriesTitle:"Modal_AccessoriesTitle__wF0KY",AccessoryList:"Modal_AccessoryList__CXs7n",AccessoryListItem:"Modal_AccessoryListItem__tIWuK",secondaryTitle:"Modal_secondaryTitle__KAZyG",AccessoriesList:"Modal_AccessoriesList__2p9Hs",conditionList:"Modal_conditionList__MANWY",number:"Modal_number__RCTCc",RentalButton:"Modal_RentalButton__NjdsC",btn:"Modal_btn__ghtlt"};var n=i(579);const c=e=>{let{closeModal:s,car:i}=e;const t=i.address.split(", "),a=t[1],c=t[2],o=i.rentalConditions.split("\n",3),d=o[0].match(/\d+/),m=parseInt(d[0],10);return(0,n.jsx)("div",{className:l.overlay,onClick:e=>{e.currentTarget===e.target&&s()},children:(0,n.jsxs)("div",{className:l.modalContainer,children:[(0,n.jsx)("img",{src:i.img,alt:"",width:"264",className:l.imgCar}),(0,n.jsx)("button",{className:l.closeBtn,onClick:s,children:(0,n.jsx)("img",{src:r.A,alt:"close",width:14,height:14})}),(0,n.jsx)("div",{className:l.itemTitle,children:(0,n.jsxs)("div",{className:l.carTitle,children:[(0,n.jsxs)("h2",{children:[i.make,"\xa0"]}),(0,n.jsx)("h2",{className:l.itemModel,children:(0,n.jsxs)("span",{children:[i.model,",\xa0"]})}),(0,n.jsx)("h2",{children:i.year})]})}),(0,n.jsxs)("div",{className:l.SecondaryInfo,children:[(0,n.jsx)("div",{className:l.SecondaryCarText,children:a}),(0,n.jsx)("div",{className:l.SecondaryCarText,children:c}),(0,n.jsxs)("div",{className:l.SecondaryCarText,children:["Id:",i.id]}),(0,n.jsxs)("div",{className:l.SecondaryCarText,children:["Year:",i.year]}),(0,n.jsxs)("div",{className:l.SecondaryCarText,children:["Type:",i.type]}),(0,n.jsxs)("div",{className:l.SecondaryCarText,children:["Fuel Consumption:",i.fuelConsumption]}),(0,n.jsxs)("div",{className:l.SecondaryCarText,children:["Engine Size:",i.engineSize]})]}),(0,n.jsx)("div",{className:l.modalDescription,children:i.description}),(0,n.jsxs)("div",{className:l.Accessories,children:[(0,n.jsx)("div",{className:l.AccessoriesTitle,children:"Accessories and functionalities:"}),(0,n.jsxs)("ul",{className:l.AccessoryList,children:[i.accessories.map(((e,s)=>(0,n.jsx)("li",{className:l.AccessoryListItem,children:e},s))),i.functionalities.map(((e,s)=>(0,n.jsx)("li",{className:l.AccessoryListItem,children:e},s)))]})]}),(0,n.jsxs)("div",{className:l.RentalBlock,children:[(0,n.jsx)("div",{className:l.conditionListTitle,children:"Rental Conditions:"}),(0,n.jsxs)("div",{className:l.AccessoriesList,children:[(0,n.jsxs)("div",{className:l.conditionList,children:["Minimum age: ",(0,n.jsx)("span",{children:m})]}),(0,n.jsxs)("div",{className:l.conditionList,children:[" ",o[1]]}),(0,n.jsxs)("div",{className:l.conditionList,children:[" ",o[2]]}),(0,n.jsxs)("div",{className:l.conditionList,children:["Mileage: ",(0,n.jsx)("span",{children:i.mileage.toLocaleString("en-EN")})]}),(0,n.jsxs)("div",{className:l.conditionList,children:["Price: ",(0,n.jsx)("span",{children:i.rentalPrice})]})]})]}),(0,n.jsxs)("div",{className:l.btn,children:[" ",(0,n.jsx)("a",{href:"tel:+380730000000",className:l.RentalButton,children:"Rental car"})]})]})})};const o=i.p+"static/media/addHeart.97847e9195943f61800c97807e735d4f.svg";const d=i.p+"static/media/removeHeart.282d936f414f4c6884ab9306a91dad67.svg";var m=i(871),_=i(3),x=i(360);const h="FavoriteIcon_favoriteImg__Pjo-n",j=e=>{let{data:s}=e;const i=(0,_.wA)(),t=(0,_.d4)(x.Cp);return(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:t.some((e=>e.id===s.id))?o:d,alt:"Like","aria-label":"Add to Favorites",onClick:()=>(e=>{t.some((s=>s.id===e.id))?i((0,m.wy)(e)):i((0,m._J)(e))})(s),className:h})})},u=e=>{let{car:s}=e;const[i,r]=(0,t.useState)(!1),[l,o]=(0,t.useState)(!1),d=s.address.split(", "),m=d[1],_=d[2],x=s.functionalities[0],h=()=>{r(!1)};return window.addEventListener("keydown",(e=>{"Escape"===e.code&&h()})),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{class:a.itemCard,children:[(0,n.jsx)("div",{children:(0,n.jsx)(j,{data:s})}),(0,n.jsx)("img",{class:a.itemImg,src:s.img,alt:s.make}),(0,n.jsx)("div",{class:a.btnAddFavorite}),(0,n.jsxs)("div",{class:a.itemTitle,children:[(0,n.jsxs)("div",{class:a.itemTitleInfo,children:[(0,n.jsxs)("p",{children:[s.make,"\xa0"]}),(0,n.jsxs)("p",{class:a.itemModel,children:[s.model,",\xa0"]}),(0,n.jsx)("p",{children:s.year})]}),(0,n.jsx)("p",{class:a.itemTitlePrice,children:s.rentalPrice})]}),(0,n.jsx)("div",{class:a.itemInfo,children:(0,n.jsxs)("ul",{class:a.infoContainer,children:[(0,n.jsx)("li",{class:a.infoText,children:m}),(0,n.jsx)("li",{class:a.infoText,children:_}),(0,n.jsx)("li",{class:a.infoText,children:s.rentalCompany}),(0,n.jsx)("li",{class:a.infoText,children:s.type}),(0,n.jsx)("li",{class:a.infoText,children:s.model}),(0,n.jsx)("li",{class:a.infoText,children:s.id}),(0,n.jsx)("li",{class:a.infoText,children:x})]})}),(0,n.jsx)("button",{class:a.buttonItem,onClick:()=>{r(!0)},children:"Learn More"})]}),i&&(0,n.jsx)(c,{closeModal:h,car:s},s.id)]})}},658:()=>{},979:(e,s,i)=>{"use strict";i.d(s,{A:()=>M});const t="Filter_searchForm__o0JyC",a="Filter_dropDown__lQDS8",r="Filter_dropDownButton__ZHgEJ",l="Filter_dropDownButtonPrice__hJ1Jf Filter_dropDownButton__ZHgEJ",n="Filter_dropDownListItem__e+bLp",c="Filter_dropDownTitle__cN2In",o="Filter_dropDownList__KrrWr",d="Filter_dropDownListVisiable__NJQ1w Filter_dropDownList__KrrWr",m="Filter_dropDownListPrice__9xDnZ Filter_dropDownList__KrrWr",_="Filter_dropDownListPriceVisiable__3QcGh Filter_dropDownListPrice__9xDnZ Filter_dropDownList__KrrWr",x="Filter_inputWrapper__-FNL8",h="Filter_mileageTitle__cFDDY",j="Filter_inputBlock__a77Qo",u="Filter_inputFrom__rPmuY",v="Filter_inputTo__TBbNI",p="Filter_btnWrap__WeBdP",C="Filter_filterBtn__BTiM7",N=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land","Toyota"],T=[10,20,30,40,50,60,70,80,90,100,120,130,140,150,160,170,180,190,200,210,220,230,240,250,260,270,280,290,300,310,320,340,350];var g=i(3),f=i(43),L=i(360),F=i(877),y=i(579);const M=()=>{const e=(0,g.wA)(),s=(0,g.d4)(L.Cv),i=(0,g.d4)(L.S3),[M,I]=(0,f.useState)(s||"Enter the text"),[b,A]=(0,f.useState)(i||"To $"),[S,w]=(0,f.useState)(""),[D,k]=(0,f.useState)(""),[B,P]=(0,f.useState)(!1),[E,W]=(0,f.useState)(!1);return(0,y.jsxs)("form",{className:t,children:[(0,y.jsxs)("div",{className:a,children:[(0,y.jsx)("p",{className:c,children:"Car brand"}),(0,y.jsx)("button",{className:r,onClick:e=>{e.preventDefault(),P((e=>!e))},children:M}),(0,y.jsx)("ul",{className:B?d:o,children:N.map((e=>(0,y.jsx)("li",{onClick:()=>(I(e),void P(!1)),className:n,children:e},e)))})]}),(0,y.jsxs)("div",{className:a,children:[(0,y.jsx)("p",{className:c,children:"Price / 1 hour"}),(0,y.jsx)("button",{className:l,onClick:e=>{e.preventDefault(),W((e=>!e))},children:b}),(0,y.jsx)("ul",{className:E?_:m,children:T.map((e=>(0,y.jsx)("li",{onClick:()=>(e=>{A(e),W(!1)})(e),className:n,children:e},e)))})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{className:h,children:"\u0421ar mileage / km"}),(0,y.jsxs)("div",{className:j,children:[(0,y.jsxs)("div",{className:x,children:[" ",(0,y.jsx)("input",{className:u,mask:"9,999",type:"number",value:S,onChange:e=>{const{value:s}=e.target;w(s.replace(/,/g,""))},placeholder:"From"})]}),(0,y.jsx)("div",{className:x,children:(0,y.jsx)("input",{className:v,mask:"9,999",type:"number",value:D,onChange:e=>{const{value:s}=e.target;k(s.replace(/,/g,""))},placeholder:"To"})})]})]}),(0,y.jsxs)("div",{className:p,children:[(0,y.jsx)("button",{type:"button",onClick:s=>{if(s.preventDefault(),"Enter the text"===M&&"To $"===b&&!S&&!D)return;const i={brand:"Enter the text"===M?"":M,price:"To $"===b?"":"$".concat(parseInt(b,10)),mileageFrom:S.trim(),mileageTo:D.trim(),onFilter:!0};e((0,F.Sx)(i))},className:C,children:"Search"}),(0,y.jsx)("button",{type:"button",onClick:s=>{s.preventDefault();e((0,F.Sx)({brand:"",price:"",mileageFrom:"",mileageTo:"",onFilter:!1})),I("Enter the text"),A("To $"),w(""),k("")},className:C,children:"Reset"})]})]})}},245:(e,s,i)=>{"use strict";i.d(s,{D:()=>t});const t=(e,s,i,t,a)=>null===e||void 0===e?void 0:e.filter((e=>{let r=!0;if(s&&(r=e.make===s),i){const s=i.match(/\$(\d+)/),t=e.rentalPrice.match(/\$(\d+)/),a=s[1],l=t[1];Number(a)>=l||(r=!1)}return t&&(e.mileage>=t||(r=!1)),a&&(e.mileage<=a||(r=!1)),t&&a&&(e.mileage>=t&&e.mileage<=a||(r=!1)),r}))},980:(e,s,i)=>{"use strict";i.r(s),i.d(s,{default:()=>x});var t=i(380),a=i(516),r=i(979),l=i(3),n=i(360),c=i(245);const o="FavoritePage_carList__sEw39";var d=i(658),m=i.n(d),_=i(579);const x=()=>{const e=(0,l.d4)(n.Cp),s=(0,l.d4)(n.Cv),i=(0,l.d4)(n.S3),d=(0,l.d4)(n.lx),x=(0,l.d4)(n.MI),h=(0,c.D)(e,s,i,d,x);return(0,_.jsx)(a.A,{children:(0,_.jsx)("section",{children:0===e.lenth?(0,_.jsx)(m(),{}):(0,_.jsxs)("div",{children:[(0,_.jsx)(r.A,{}),(0,_.jsx)("ul",{className:o,children:h.map((e=>(0,_.jsx)(t.A,{car:e},e.id)))})]})})})}},360:(e,s,i)=>{"use strict";i.d(s,{Co:()=>t,Cp:()=>n,Cv:()=>o,Di:()=>a,MI:()=>_,S3:()=>d,lx:()=>m,nT:()=>r,oW:()=>c,q8:()=>l});const t=e=>e.catalog.adverts,a=e=>e.catalog.isLoading,r=e=>e.catalog.error,l=e=>e.catalog.advertsForFilter,n=e=>e.favorite.favoriteArray,c=e=>e.filter.onFilter,o=e=>e.filter.brand,d=e=>e.filter.price,m=e=>e.filter.mileageFrom,_=e=>e.filter.mileageTo}}]);
//# sourceMappingURL=980.4c201348.chunk.js.map