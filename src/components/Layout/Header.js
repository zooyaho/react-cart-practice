// 서버에서 해당 이미지에 대한 링크를 만들어 사용할 수 있게 한다.
// 프로젝트 일부의 로컬 이미지 이기때문에 동적으로 바인딩해야한다.
import mealsImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals이미지" />
      </div>
    </>
  );
}

export default Header;
