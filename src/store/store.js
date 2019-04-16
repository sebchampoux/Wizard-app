import Vue from 'vue';
import Vuex from 'vuex';
import {Player} from "./Player";

Vue.use(Vuex);

// Constantes
export const MAX_NUMBER_OF_PLAYERS = 6;

export const store = new Vuex.Store({
	state: {
		players: [
			new Player(),
			new Player(),
		]
	},
	getters: {
		number_of_players: state => state.players.length,
		number_of_rounds: state => Math.min(60 / state.players.length, 20),
	},
	mutations: {
		add_new_player: state => {
			if (state.players.length >= MAX_NUMBER_OF_PLAYERS) return false;
			state.players.push(new Player());
		}
	}
});