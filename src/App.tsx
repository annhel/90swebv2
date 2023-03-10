import React from 'react';
import { readBuilderProgram } from 'typescript';
import { StyleInfo } from './style-info';

const bgLink = "https://i.pinimg.com/564x/7c/40/2f/7c402f5b16bffa4353920fdc0ef22679.jpg"

const backgroundStyle = {
  height: '100%',
  backgroundImage: 'url("https://i.pinimg.com/564x/7c/40/2f/7c402f5b16bffa4353920fdc0ef22679.jpg")',

  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const bannerStyle = {
  backgroundImage: 'url("https://media.istockphoto.com/id/1272367294/photo/abstract-trendy-rainbow-pastel-colored-holographic-banner-background.jpg?s=612x612&w=0&k=20&c=lsIfOdSzTin1IEQuc9T2HeWS37vBSBfnCbQQ2x-3OJ8=")',
  width: '100%'
}

// const divStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }

function App() {
const styles = [
  {name:"Jorts", productDescription: "The jean shorts, or Jorts are a staple to this eras' summer fashion. Featuring a longer length short, and worn by the likes of Billie Eilish - this style is begging to be brought back this year! ", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cqfd-communication.com%2F%3Fh%3Dd7ae3c3%26iid%3Dom7_11370777&psig=AOvVaw2Iz0XAvgRQREZKgms92-wU&ust=1675293819785000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJCFifj58vwCFQAAAAAdAAAAABAT", shopIt: "https://jnco.com/collections/shorts/products/wide-load-shorts-17-inseam-dark-stone"},
  {name:"Denim-on-Denim", productDescription: "The head-to-toe denim look is a favorite from the 90s! Most commonly remembered by Justin Timberlake and Britney Spears on the read carpet, and has of late seen a resurgence through shows like Stranger Things.", image: "", shopIt: "https://www.wrangler.com/shop/rugged-wear-unlined-denim-jacketvint-indigom-RJK30VI%3AM.html?utm_medium=cpc&utm_source=google&utm_campaign=shopping&utm_content=pla&utm_term=RJK30VI:M&gclid=CjwKCAiAleOeBhBdEiwAfgmXf7hrd3zWYeZzl3AKYPyJHsYf_eOBYIO3K_72tyhgyLlubez5Z7P8pBoCvnsQAvD_BwE&gclsrc=aw.ds"},
  {name:"Frosted Tips", productDescription: "You either love it or you hate it - but frosted tips were a moment in the 90s. It was fun fresh and cool for all the men back then. We've seen many styles resurface, maybe it's time to bring back frosted tips?", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.throwbacks.com%2Fs-o-s-frosted-tips-are-a-thing-again%2F&psig=AOvVaw3WuGLPY7vYZ_cpce7kV4nF&ust=1675294403084000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDhqI788vwCFQAAAAAdAAAAABAE", shopIt: "https://www.amazon.com/Just-Men-AutoStop-Comb-Color/dp/B00IGGYAH4/ref=sr_1_2_sspa?keywords=men%2Bblonde%2Bhair%2Bdye&qid=1675208299&rdc=1&sr=8-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExRDZQNVlOWFBZM1lZJmVuY3J5cHRlZElkPUEwMjQ5MzczMVQ4RDk4NExJSzBaWCZlbmNyeXB0ZWRBZElkPUEwMjIxOTQzMVNKRFBCQzlCVldYWSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1"},
  {name:"Skirts Over Jeans", productDescription: "She's an icon, she's a legend and she is the moment! - the layering trend of wearing your skirts and dresses over jeans is utterly iconic. Gone are the days where all the kids raged for this look, but it's most certainly on the books for a comeback.", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F729583208365469768%2F&psig=AOvVaw1lnaWifWShK3VsAOpEclZZ&ust=1675293349286000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJDzwJf48vwCFQAAAAAdAAAAABAE", shopIt: "https://www.shopcider.com/product/detail?pid=1019733&style_id=119488&currency=USD&sku_id=83096&utm_source=google_shopping&utm_campaign=pla-us-cate-bottom-skirt-all&gclid=CjwKCAiAleOeBhBdEiwAfgmXf5zasfAw7xvGzv4TgMBO_0XnRA5-QodeH7peo5EnnNSRge-cvZuwiBoCI1cQAvD_BwE"},
  {name:"Cargo Capris", productDescription: "Is it cropped pants? Long-length shorts? Couldn't tell ya! The epitome of 90s mothers' fashion is the cargo capris. Perfect for a casul summer day or a breezy fall afternoon. Keep an eye out for this style as it could be the next *hot look*", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.walmart.com%2Fip%2FWomen-s-Cargo-Capri-Pants%2F519814774&psig=AOvVaw3mhzDaGrI9CAkIgYIoE2Ye&ust=1675294444426000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLiAj6L88vwCFQAAAAAdAAAAABAK", shopIt: "https://www.womanwithin.com/products/convertible-length-cargo-capri-pant/301157842.html"},
]

  return (
    <div style = {backgroundStyle}>
    <h1>Back to the 90s!</h1>
    <h1>Exploring Fashion Trends of the <b>1990s</b></h1>
    <h6>A simple web application using React</h6>
    <Intro></Intro>
    <PhotoBanner></PhotoBanner>
    {styles.map(s => <StyleInfo {...s}></StyleInfo>)}
    </div>
  );
}

function Intro(){ 
  return(
  <div>
  <p>While fashion transforms and evolves throughout the years, it's not without it's fair-share of referenecs to past decades/eras. Here are some the hottest trends of the 90s:</p>
  </div>
  )
}

function PhotoBanner(){ 
  return(
  <div style={bannerStyle}>
  </div>
  )
}

export default App;
