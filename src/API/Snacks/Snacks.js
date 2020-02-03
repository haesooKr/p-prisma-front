import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";

const QUERY = gql`
  {
    allSnack {
      name
      price
      unit
    }
  }
`;

export const Snacks = () => {
  const { loading, error, data } = useQuery(QUERY);
  if (loading) return "loading";
  else if (error) return "error";
  else {
    return (
      <ul>
        {data.allSnack.map((i, index) => (
          <li key={index}>
            <ul>
              <li>제품: {i.name}</li>
              <li>가격: {i.price}</li>
            </ul>
          </li>
        ))}
      </ul>
    );
  }
};
