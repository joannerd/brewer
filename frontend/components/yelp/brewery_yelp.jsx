import React from 'react';
import { formatTime, DAYS } from '../../util';

const BreweryYelp = ({ price, hours }) => {
  const openMessage = i => {
    const currentDay = new Date().getDay() - 1;
    if (hours[0].is_open_now && currentDay === i) return 'Open now';
  };

  return (
    <div className="brewery-yelp">
      <h3>
        Price Range:
        {price}
      </h3>

      <table className="table-center">
        <tbody>
          {hours[0].open.map((brewHours, i) => {
            const startInt = parseInt(brewHours.start, 10);
            const endInt = parseInt(brewHours.end, 10);
            const openTime = (startInt <= 1200)
              ? brewHours.start
              : formatTime((startInt - 1200).toString());
            const closeTime = (endInt <= 1200)
              ? brewHours.end
              : formatTime((endInt - 1200).toString());

            return (
              <tr key={i}>
                <th>{DAYS[i]}</th>
                <td>
                  {openTime}
                  -
                  {closeTime}
                </td>
                <td className="open">{openMessage(i)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BreweryYelp;
