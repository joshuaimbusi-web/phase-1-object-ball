function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 22,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Kemba Walker": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 7,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

function numPointsScored(playerName) {
  const game = gameObject();
  for (const teamKey in game) {
    const team = game[teamKey];
    if (playerName in team.players) {
      return team.players[playerName].points;
    }
  }
  return null; // Player not found
}

function shoeSize(playerName) {
  const game = gameObject();
  for (const teamKey in game) {
    const team = game[teamKey];
    if (playerName in team.players) {
      return team.players[playerName].shoe;
    }
  }
  return null; // Player not found
}

function teamColors(teamName) {
  const game = gameObject();
  for (const teamKey in game) {
    const team = game[teamKey];
    if (team.teamName === teamName) {
      return team.colors;
    }
  }
  return null; // Team not found
}

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  for (const teamKey in game) {
    const team = game[teamKey];
    if (team.teamName === teamName) {
      return Object.values(team.players).map((player) => player.number);
    }
  }
  return []; // Team not found
}

function playerStats(playerName) {
  const game = gameObject();
  for (const teamKey in game) {
    const team = game[teamKey];
    if (playerName in team.players) {
      return team.players[playerName];
    }
  }
  return null; // Player not found
}

function bigShoeRebounds() {
  const game = gameObject();
  let maxShoeSize = 0;
  let rebounds = 0;

  for (const teamKey in game) {
    const team = game[teamKey];
    for (const playerName in team.players) {
      const player = team.players[playerName];
      if (player.shoe > maxShoeSize) {
        maxShoeSize = player.shoe;
        rebounds = player.rebounds;
      }
    }
  }

  return rebounds;
}
function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let topScorer = "";

  for (const teamKey in game) {
    const team = game[teamKey];
    for (const playerName in team.players) {
      const player = team.players[playerName];
      if (player.points > maxPoints) {
        maxPoints = player.points;
        topScorer = playerName;
      }
    }
  }

  return topScorer;
}

function winningTeam() {
  const game = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (const playerName in game.home.players) {
    homePoints += game.home.players[playerName].points;
  }

  for (const playerName in game.away.players) {
    awayPoints += game.away.players[playerName].points;
  }

  if (homePoints > awayPoints) {
    return game.home.teamName;
  } else if (awayPoints > homePoints) {
    return game.away.teamName;
  } else {
    return "It's a tie!";
  }
}

function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";

  for (const teamKey in game) {
    const team = game[teamKey];
    for (const playerName in team.players) {
      if (playerName.length > longestName.length) {
        longestName = playerName;
      }
    }
  }

  return longestName;
}

function doesLongNameStealATon() {
  const game = gameObject();
  const longestName = playerWithLongestName();
  let maxSteals = 0;
  let playerWithMaxSteals = "";

  for (const teamKey in game) {
    const team = game[teamKey];
    for (const playerName in team.players) {
      const player = team.players[playerName];
      if (player.steals > maxSteals) {
        maxSteals = player.steals;
        playerWithMaxSteals = playerName;
      }
    }
  }

  return longestName === playerWithMaxSteals;
}

