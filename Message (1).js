import React from "react";

const Message = ({ year, data, text1, text2 }) => {
  
  if (!data || data.MRData === undefined) {
    return (
      <div className="message">
        {text1} {year}
      </div>
    );
  }

  const standings =
    data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;


  const topStandings = standings
    .slice(0, 5)
    .map((constructorStanding, index) => (
      <div
        key={constructorStanding.constructorId}
        className="constructor-standing"
      >
        <p>
          {index + 1}. {constructorStanding.Constructor.name}
        </p>
        <p>Points: {constructorStanding.points}</p>
        <p>Wins: {constructorStanding.wins}</p>
        <p>Nationality: {constructorStanding.Constructor.nationality}</p>
      </div>
    ));

  return (
    <div className="message">
      <p>
        {text1} {year}
      </p>
      <p>{text2}</p>
      {topStandings}
    </div>
  );
};

export default Message;
