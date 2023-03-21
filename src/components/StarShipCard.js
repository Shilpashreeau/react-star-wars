function StarShipCard(props) {
  console.log(props);
  const { starship } = props;
  console.log(props);

  const listOfStarships = starship.map((ele) => {
    return ele.results.map((e) => {
      return <div className="main">{e.name}</div>;
    });
  });

  return (
    <div className="box">
      <div className="single">{listOfStarships}</div>
    </div>
  );
}

export default StarShipCard;
