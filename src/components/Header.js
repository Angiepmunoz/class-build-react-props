function Header(props) { //can destructure right in the functions parameters
  // console.log(props);
  // const name = props.name;
  // const todaysDate = props.todaysDate;
  // const { name, todaysDate } = props;
  return (
    <header>
      <h1>{props.name}</h1>
      <h2>{props.todaysDate}</h2>
    </header>
  );
}

export default Header;
