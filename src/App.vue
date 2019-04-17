<template>
	<div class="app-frame">
		<div class="container">
			<div class="row">
				<!-- Les colonnes joueur -->
				<player-column
						v-for="player_number in number_of_players"
						:number_of_rounds="number_of_rounds"
						:key="player_number - 1"
						:player_index="player_number - 1"
						:additional_classes="player_cols_class">
				</player-column>
				<!-- La colonne ajout nouveau joueur -->
				<div
						class="add-new-player"
						:class="player_cols_class"
						v-if="can_add_more_players">
					<button class="btn btn-success" @click="add_new_player">+ Joueur</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import PlayerColumn from "./components/player-column";

	const MAX_NUMBER_OF_PLAYERS = 6;

	export default {
		name: 'App',
		components: {PlayerColumn},
		data() {
			return {
				number_of_players: 2
			}
		},
		methods: {
			add_new_player() {
				if(this.can_add_more_players) {
					this.number_of_players++;
				}
			}
		},
		computed: {
			/**
			 * Classe pour le nombre de colonnes approprié pour chaque joueur
			 * @return {string}
			 */
			player_cols_class() {
				const starterClass = 'col-sm-';
				switch (this.number_of_players) {
					case 2:
						return starterClass + '4';
					case 3:
						return starterClass + '3';
					case 4:
						return starterClass + '2';
					case 5:
						return starterClass + '2';
					case 6:
						return starterClass + '2';
					default:
						return starterClass + '2';
				}
			},

			number_of_rounds() {
				return Math.min(60 / this.number_of_players, 20);
			},

			/**
			 * Vérifie s'il est possible d'ajouter d'autres joueurs (i.e. le nombre de joueurs actuel
			 * est inférieur au maximum autorisé)
			 *
			 * @return {boolean}
			 */
			can_add_more_players() {
				return this.number_of_players < MAX_NUMBER_OF_PLAYERS;
			}
		},
	}
</script>

<style lang="scss">
	@import "assets/fonts/fontello/css/wizard.css";
	@import "assets/scss/main";
</style>