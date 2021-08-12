import { expect } from 'chai';
import tournamentWinner from './tournament-winner';

describe('Algorithms', () => {
	describe('Arrays', () => {
		describe('tournamentWinner', () => {
			it('exists', () => {
				expect(typeof tournamentWinner).to.be.equal('function');
			});

			describe('when provided arrays of competions and results', () => {
				it('should return the winner of the competition', () => {
					const competitions = [
						['HTML', 'C#'],
						['C#', 'Python'],
						['Python', 'HTML'],
					];

					const results = [0, 0, 1];

					const result = tournamentWinner(competitions, results);

					expect(result).to.be.equal('Python');
				});
			});
		});
	});
});
