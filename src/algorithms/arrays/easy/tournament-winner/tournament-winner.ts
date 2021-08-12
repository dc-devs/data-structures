// const competitions = [
//   ["HTML", "C#"],
//   ["C#", "Python"],
//   ["Python", "HTML"],
// ]
//
// const results =  [0, 0, 1];
//

// return winning team
// neeed to keep track of score
//

interface Scores {
	[key: string]: number;
}

// O(n) Linear Time
// O(k) Linear Space - K is number of keys in scores object
const tournamentWinner = (
	competitions: string[][],
	results: number[]
): string => {
	const scores: Scores = {};
	let currentBestTeam = '';

	for (let i = 0; i < competitions.length; i++) {
		const result = results[i];
		const winningTeamIndex = result === 0 ? 1 : 0;
		const competition = competitions[i];
		const winningTeam = competition && competition[winningTeamIndex];

		if (winningTeam && !scores[winningTeam]) {
			scores[winningTeam] = 3;
		} else if (winningTeam) {
			scores[winningTeam] += 3;
		} else {
			throw 'No winning team found!!';
		}

		if (!currentBestTeam) {
			currentBestTeam = winningTeam;
		} else if (
			(scores[winningTeam] as number) >
			(scores[currentBestTeam] as number)
		) {
			currentBestTeam = winningTeam;
		}
	}

	// console.log(scores);

	return currentBestTeam;
};

export default tournamentWinner;
