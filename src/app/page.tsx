"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";

const FUNNY_TEAM_NAMES = [
  "Beercelona",
  "Brewventus",
  "Crystal Phallus",
  "Farcelona",
  "ManChestHair United",
  "Moleicester City",
  "Pathetico Madrid",
  "Real Sociopath",
];

const generateRandomFunnyTeamName = () =>
  generateRandomTeamName(FUNNY_TEAM_NAMES);

const generateRandomTeamName = (teamNames: string[]) => {
  const randomIndex = Math.floor(Math.random() * teamNames.length);
  return teamNames[randomIndex];
};

export default function Home() {
  const [teamName, setTeamName] = useState<string>("");

  const generateRandomTeamName = () => {
    let newTeamName;

    do {
      newTeamName = generateRandomFunnyTeamName();
    } while (newTeamName === teamName);

    setTeamName(newTeamName);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-center">
      <div>
        <h1 className="text-6xl font-bold">
          Welcome to soccer team name generator
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Want to see a funny and creative team name for your soccer team ? You
          are in the right place !
          <br />
          Click the button below to generate a team name :
        </p>
        <div className="mt-10">
          <Button
            color="success"
            variant="contained"
            endIcon={<RefreshIcon />}
            onClick={generateRandomTeamName}
          >
            Generate
          </Button>
        </div>
        <div>
          <h2 className="text-4xl font-bold mt-10">{teamName}</h2>
        </div>
      </div>
    </main>
  );
}
