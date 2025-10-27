import style from "./style.module.css";

function ShinyButton({handleClick}:{handleClick:()=>void}) {
  return <div className={style.btn} onClick={handleClick}>Get Started</div>;
}

export default ShinyButton;
