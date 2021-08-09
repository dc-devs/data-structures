import { expect } from 'chai';
import tournamentWinner from './tournament-winner';

describe('Algorithms', () => {
	describe('Arrays', () => {
		describe('tournamentWinner', () => {
			it('exists', () => {
				expect(typeof tournamentWinner).to.be.equal('function');
			});

			describe('when ', () => {
				describe('and', () => {
					it('should return', () => {
						const result = tournamentWinner();

						expect(result).to.be.true;
					});
				});
			});
		});
	});
});
