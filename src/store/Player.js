/**
 * Représente un joueur dans la partie
 */
export class Player {
	/**
	 * @constructor
	 */
	constructor() {
		this.name = null;
		this.score_per_round = [];
	}

	/**
	 * Défini le pointage pour une ronde donnée
	 *
	 * @param {Number} round - numéro de la ronde (indexé à partir de 0)
	 * @param {Number} score - pointage pour la ronde
	 */
	set_score_for_round(round, score) {
		this.score_per_round[round] = score;
	}

	/**
	 * Calcule et retourne le pointage du joueur
	 */
	get_total_score() {
		return this.score_per_round.reduce((a, b) => a + b, 0);
	}
}