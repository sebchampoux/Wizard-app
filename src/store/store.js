import Vue from 'vue';
import Vuex from 'vuex';
import { Player } from "./Player";

Vue.use(Vuex);

// Constantes etc.
export const MAX_NUMBER_OF_PLAYERS = 6;

// Store
export const store = new Vuex.Store({
	state: {
		players: [
			new Player(),
			new Player()
		]
	},
	getters: {
		number_of_players: state => state.players.length,
		number_of_rounds: state => Math.min(60 / state.players.length, 20),
		get_player_name: state => player_index => state.players[player_index].name,
		get_player_total: state => player_index => state.players[player_index].score_per_round.reduce((a, b) => a + b, 0)
	},
	mutations: {
		/**
		 * Ajoute un nouveau joueur à la partie (sans artifice supplémentaire)
		 *
		 * @param state
		 */
		add_new_player: state => {
			if (state.players.length >= MAX_NUMBER_OF_PLAYERS) return;
			state.players.push(new Player());
		},

		/**
		 * Défini le nom d'un joueur
		 * @param state
		 * @param payload
		 */
		set_player_name: (state, payload) => {
			state.players[payload.player_index].name = payload.new_player_name;
		},

		set_player_score_for_round: (state, payload) => {
			state.players[payload.player_index].set_score_for_round(payload.round_index, payload.score_for_round);
		}
	}
});